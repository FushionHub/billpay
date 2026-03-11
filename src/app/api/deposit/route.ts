import { NextResponse } from 'next/server';
import { createAfxTransaction } from '@/utils/afx/api';
import { supabaseAdmin } from '@/utils/supabase/admin';

export async function POST(req: Request) {
    try {
        const { amount, sourceAccountId, destinationAccountId } = await req.json();

        // 1. Verify user authentication via Supabase (mocked for now)
        // 2. Fetch AFX Customer ID from DB
        const mockCustomerId = 'cust_123456';

        // 3. Initiate Transaction on AFX
        const afxResponse = await createAfxTransaction({
            customerId: mockCustomerId,
            destinationAmount: { value: amount, currency: 'USD' },
            sourceCurrency: 'USD',
            destinationCurrency: 'USD',
            destinationId: destinationAccountId,
            meta: {
                reference: `dep_${Date.now()}`
            }
        });

        // 4. Save to Supabase (mocked)
        // await supabaseAdmin.from('transactions').insert(...)


        const { error: dbError } = await supabaseAdmin.from('transactions').insert({
            afx_transaction_id: afxResponse.id || 'mock_id',
            type: 'DEPOSIT',
            amount: Number(amount),
            currency: 'USD',
            status: 'PENDING'
        });
        if (dbError) console.error('Supabase Error:', dbError);

        return NextResponse.json({ success: true, transaction: afxResponse });
    } catch (error: any) {
        console.error('Deposit Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
