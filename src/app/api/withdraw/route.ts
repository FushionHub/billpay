import { NextResponse } from 'next/server';
import { createAfxTransaction } from '@/utils/afx/api';
import { supabaseAdmin } from '@/utils/supabase/admin';

export async function POST(req: Request) {
    try {
        const { amount, destinationAccountId } = await req.json();

        const mockCustomerId = 'cust_123456';

        // Withdraw initiates a transfer to the external destination id
        const afxResponse = await createAfxTransaction({
            customerId: mockCustomerId,
            destinationAmount: { value: amount, currency: 'USD' },
            sourceCurrency: 'USD',
            destinationCurrency: 'USD',
            destinationId: destinationAccountId,
            meta: {
                reference: `wth_${Date.now()}`
            }
        });


        const { error: dbError } = await supabaseAdmin.from('transactions').insert({
            afx_transaction_id: afxResponse.id || 'mock_id',
            type: 'WITHDRAWAL',
            amount: Number(amount),
            currency: 'USD',
            status: 'PENDING'
        });
        if (dbError) console.error('Supabase Error:', dbError);

        return NextResponse.json({ success: true, transaction: afxResponse });
    } catch (error: any) {
        console.error('Withdrawal Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
