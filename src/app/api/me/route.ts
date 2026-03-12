import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { supabaseAdmin } from '@/utils/supabase/admin';

export async function GET() {
    try {
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        const { data: userData, error: userError } = await supabaseAdmin
            .from('users')
            .select('full_name, afx_customer_id')
            .eq('id', user.id)
            .single();

        if (userError || !userData) {
            return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
        }

        // Fetch user's transactions from the last 30 days
        const { data: transactions, error: txError } = await supabaseAdmin
            .from('transactions')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(50);

        if (txError) {
            console.error('Error fetching transactions:', txError);
        }

        // Compute balance (starting from a base or summing up deposits/withdrawals/sends)
        // For simplicity, let's assume a starting balance of 1000 and calculate from transactions
        let balance = 1000;
        const formattedTransactions = (transactions || []).map(tx => {
            if (tx.type === 'DEPOSIT' && tx.status === 'SUCCESS') {
                balance += Number(tx.amount);
            } else if ((tx.type === 'WITHDRAWAL' || tx.type === 'SEND') && tx.status === 'SUCCESS') {
                balance -= Number(tx.amount);
            }

            let typeStr: 'Utility' | 'Wallet' | 'Purchase' | 'Transfer' = 'Transfer';
            let iconStr = 'swap_horiz';
            let iconColorStr = 'text-slate-500';
            let titleStr = 'Transaction';

            if (tx.type === 'DEPOSIT') {
                typeStr = 'Wallet';
                iconStr = 'download';
                iconColorStr = 'text-primary';
                titleStr = 'Deposit';
            } else if (tx.type === 'WITHDRAWAL') {
                typeStr = 'Wallet';
                iconStr = 'account_balance';
                iconColorStr = 'text-orange-500';
                titleStr = 'Withdrawal';
            } else if (tx.type === 'SEND') {
                typeStr = 'Transfer';
                iconStr = 'person';
                iconColorStr = 'text-indigo-500';
                titleStr = 'Transfer';
            }

            return {
                id: tx.id,
                title: titleStr,
                date: new Date(tx.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                type: typeStr,
                amount: tx.type === 'DEPOSIT' ? Number(tx.amount) : -Number(tx.amount),
                status: tx.status === 'SUCCESS' ? 'Success' : tx.status === 'PENDING' ? 'Pending' : 'Failed',
                icon: iconStr,
                iconColor: iconColorStr
            };
        });

        return NextResponse.json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                full_name: userData.full_name,
                balance: balance
            },
            transactions: formattedTransactions
        });
    } catch (error: any) {
        console.error('API /me Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
