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

        const { amount, sourceAccountId, destinationAccountId } = await req.json();

        // Fetch AFX Customer ID from DB
        const { data: userData, error: userError } = await supabaseAdmin
            .from('users')
            .select('afx_customer_id')
            .eq('id', user.id)
            .single();

        if (userError || !userData?.afx_customer_id) {
            return NextResponse.json({ success: false, error: 'User not found or AFX ID missing' }, { status: 404 });
        }

        // In a real application, a deposit would involve charging a saved card or bank account
        // via a provider's payment intent / charge API (e.g., Stripe, AFX inbound, Flutterwave charge).
        // Since `routePayment` is strictly an outbound fallback router for payouts, we mock a successful
        // inbound charge here to represent a deposit to the user's wallet.

        const mockChargeTransactionId = `dep_${Date.now()}`;
        const mockGateway = 'afx_charge';

        const { error: dbError } = await supabaseAdmin.from('transactions').insert({
            afx_transaction_id: mockChargeTransactionId,
            user_id: user.id,
            type: 'DEPOSIT',
            amount: Number(amount),
            currency: 'USD',
            status: 'SUCCESS', // Automatically assuming success for demonstration purposes
            // @ts-ignore
            gateway_used: mockGateway
        });

        if (dbError) console.error('Supabase Error:', dbError);

        return NextResponse.json({
            success: true,
            gateway: mockGateway,
            transaction: { id: mockChargeTransactionId, status: 'SUCCESS' }
        });

    } catch (error: any) {
        console.error('Deposit Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
