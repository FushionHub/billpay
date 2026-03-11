import { NextResponse } from 'next/server';
import { routePayment } from '@/utils/router/paymentRouter';
import { supabaseAdmin } from '@/utils/supabase/admin';

export async function POST(req: Request) {
    try {
        const { amount, sourceAccountId, destinationAccountId } = await req.json();

        // 1. Verify user authentication via Supabase (mocked for now)
        // 2. Fetch AFX Customer ID from DB
        const mockCustomerId = 'cust_123456';

        // 3. Initiate Transaction on AFX

        const routingResult = await routePayment({
            userId: mockCustomerId,
            amount: Number(amount),
            currency: 'USD',
            destinationId: destinationAccountId
        });

        const { error: dbError } = await supabaseAdmin.from('transactions').insert({
            afx_transaction_id: routingResult.transaction?.id || routingResult.transaction?.batch_header?.payout_batch_id || 'mock_id',
            type: 'DEPOSIT',
            amount: Number(amount),
            currency: 'USD',
            status: 'PENDING',
            // @ts-ignore
            gateway_used: routingResult.gateway
        });
        if (dbError) console.error('Supabase Error:', dbError);

        return NextResponse.json({ success: true, gateway: routingResult.gateway, transaction: routingResult.transaction });

    } catch (error: any) {
        console.error('Deposit Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
