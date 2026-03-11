import { NextResponse } from 'next/server';
import { routePayment } from '@/utils/router/paymentRouter';
import { supabaseAdmin } from '@/utils/supabase/admin';

export async function POST(req: Request) {
    try {
        const { amount, recipientId } = await req.json();

        const mockSenderId = 'cust_sender_123';
        // In a real system, you would resolve the recipientId into an actual routing destination
        const mockDestinationId = 'pm_recipient_890';

        // Auto-route the send transfer via available payment gateways
        const routingResult = await routePayment({
            userId: mockSenderId,
            amount: Number(amount),
            currency: 'USD',
            destinationId: mockDestinationId
        });

        const { error: dbError } = await supabaseAdmin.from('transactions').insert({
            afx_transaction_id: routingResult.transaction?.id || routingResult.transaction?.batch_header?.payout_batch_id || 'mock_id',
            type: 'SEND',
            amount: Number(amount),
            currency: 'USD',
            status: 'PENDING',
            // @ts-ignore
            gateway_used: routingResult.gateway
        });

        if (dbError) console.error('Supabase Error:', dbError);

        return NextResponse.json({
            success: true,
            gateway: routingResult.gateway,
            transaction: routingResult.transaction
        });
    } catch (error: any) {
        console.error('Send Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
