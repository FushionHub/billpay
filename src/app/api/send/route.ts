import { NextResponse } from 'next/server';
import { createAfxTransaction } from '@/utils/afx/api';
import { supabaseAdmin } from '@/utils/supabase/admin';

export async function POST(req: Request) {
    try {
        const { amount, recipientId } = await req.json();

        const mockSenderId = 'cust_sender_123';
        // You'd typically resolve the recipient's AFX virtual account or payment method ID here
        const mockDestinationId = 'pm_recipient_890';

        const afxResponse = await createAfxTransaction({
            customerId: mockSenderId,
            destinationAmount: { value: amount, currency: 'USD' },
            sourceCurrency: 'USD',
            destinationCurrency: 'USD',
            destinationId: mockDestinationId,
            meta: {
                reference: `snd_${Date.now()}`
            }
        });


        const { error: dbError } = await supabaseAdmin.from('transactions').insert({
            afx_transaction_id: afxResponse.id || 'mock_id',
            type: 'SEND',
            amount: Number(amount),
            currency: 'USD',
            status: 'PENDING'
        });
        if (dbError) console.error('Supabase Error:', dbError);

        return NextResponse.json({ success: true, transaction: afxResponse });
    } catch (error: any) {
        console.error('Send Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
