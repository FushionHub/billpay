import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/utils/supabase/admin';
import { createAfxVirtualCard } from '@/utils/afx/api';
import { createClient } from '@/utils/supabase/server';

export async function POST(req: Request) {
    try {
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        const { currency } = await req.json();

        // Fetch AFX Customer ID from DB
        const { data: userData, error: userError } = await supabaseAdmin
            .from('users')
            .select('afx_customer_id')
            .eq('id', user.id)
            .single();

        if (userError || !userData?.afx_customer_id) {
            return NextResponse.json({ success: false, error: 'User not found or AFX ID missing' }, { status: 404 });
        }

        const afxResponse = await createAfxVirtualCard(userData.afx_customer_id, currency || 'USD');

        // Save the new virtual card into our Supabase `accounts` table
        const { error: dbError } = await supabaseAdmin.from('accounts').insert({
            user_id: user.id,
            afx_payment_method_id: afxResponse.id,
            type: 'VIRTUAL_CARD',
            name: 'Virtual Debit Card'
        });
        if (dbError) console.error('Supabase Error:', dbError);

        return NextResponse.json({ success: true, card: afxResponse });
    } catch (error: any) {
        console.error('Virtual Card Creation Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
