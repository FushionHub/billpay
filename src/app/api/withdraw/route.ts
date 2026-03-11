import { NextResponse } from 'next/server';
import { routePayment } from '@/utils/router/paymentRouter';
import { supabaseAdmin } from '@/utils/supabase/admin';

export async function POST(req: Request) {
    try {
        const { amount, destinationAccountId } = await req.json();

        const mockCustomerId = 'cust_123456';

        // Auto-route the withdrawal via available payment gateways
        const routingResult = await routePayment({
            userId: mockCustomerId,
            amount: Number(amount),
            currency: 'USD',
            destinationId: destinationAccountId
        });

        // Save transaction record to Supabase, including the gateway used
        const { error: dbError } = await supabaseAdmin.from('transactions').insert({
            afx_transaction_id: routingResult.transaction?.id || routingResult.transaction?.batch_header?.payout_batch_id || 'mock_id',
            type: 'WITHDRAWAL',
            amount: Number(amount),
            currency: 'USD',
            status: 'PENDING',
            // @ts-ignore - Assuming a 'gateway' column exists or using JSONB metadata in a real schema
            gateway_used: routingResult.gateway
        });

        if (dbError) console.error('Supabase Error:', dbError);

        return NextResponse.json({
            success: true,
            gateway: routingResult.gateway,
            transaction: routingResult.transaction
        });
    } catch (error: any) {
        console.error('Withdrawal Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
