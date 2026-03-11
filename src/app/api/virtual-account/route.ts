import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/utils/supabase/admin';
import { createAfxVirtualAccount } from '@/utils/afx/api';

export async function POST(req: Request) {
    try {
        const { currency } = await req.json();
        const mockCustomerId = 'cust_123456';

        const afxResponse = await createAfxVirtualAccount(mockCustomerId, currency || 'USD');

        // Here we would typically save the generated virtual account ID into our Supabase `accounts` table


        const { error: dbError } = await supabaseAdmin.from('accounts').insert({
            afx_payment_method_id: afxResponse.id || 'mock_pm_id',
            type: 'VIRTUAL_ACCOUNT',
            name: 'Virtual Bank Account'
        });
        if (dbError) console.error('Supabase Error:', dbError);

        return NextResponse.json({ success: true, account: afxResponse });
    } catch (error: any) {
        console.error('Virtual Account Creation Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
