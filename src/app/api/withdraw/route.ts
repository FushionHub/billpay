import { NextResponse } from 'next/server';
import { routePayment } from '@/utils/router/paymentRouter';
import { supabaseAdmin } from '@/utils/supabase/admin';
import { createClient } from '@/utils/supabase/server';

export async function POST(req: Request) {
    try {
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        const { amount, destinationAccountId } = await req.json();

        // Fetch AFX Customer ID from DB
        const { data: userData, error: userError } = await supabaseAdmin
            .from('users')
            .select('afx_customer_id')
            .eq('id', user.id)
            .single();

        if (userError || !userData?.afx_customer_id) {
            return NextResponse.json({ success: false, error: 'User not found or AFX ID missing' }, { status: 404 });
        }

        // Auto-route the withdrawal via available payment gateways
        const routingResult = await routePayment({
            userId: userData.afx_customer_id,
            amount: Number(amount),
            currency: 'USD',
            destinationId: destinationAccountId
        });

        // Save transaction record to Supabase, including the gateway used
        const { error: dbError } = await supabaseAdmin.from('transactions').insert({
            afx_transaction_id: routingResult.transaction?.id || routingResult.transaction?.batch_header?.payout_batch_id,
            user_id: user.id,
            type: 'WITHDRAWAL',
            amount: Number(amount),
            currency: 'USD',
            status: 'PENDING',
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
