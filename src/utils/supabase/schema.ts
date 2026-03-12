import { supabaseAdmin } from '../supabase/admin';

export async function setupDatabase() {
    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS public.users (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            email TEXT UNIQUE NOT NULL,
            full_name TEXT,
            afx_customer_id TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
        );
    `;

    const createAccountsTable = `
        CREATE TABLE IF NOT EXISTS public.accounts (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
            afx_payment_method_id TEXT NOT NULL,
            type TEXT NOT NULL, -- e.g. BANK_ACCOUNT, VIRTUAL_ACCOUNT
            name TEXT,
            last4 TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
        );
    `;

    const createTransactionsTable = `
        CREATE TABLE IF NOT EXISTS public.transactions (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
            afx_transaction_id TEXT,
            type TEXT NOT NULL, -- DEPOSIT, WITHDRAWAL, SEND
            amount NUMERIC(10, 2) NOT NULL,
            currency TEXT DEFAULT 'USD',
            status TEXT DEFAULT 'PENDING',
            recipient_id UUID REFERENCES public.users(id),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
        );
    `;

    console.log('Database schema definitions created');
    await supabaseAdmin.rpc('exec_sql', { sql: createUsersTable });
    await supabaseAdmin.rpc('exec_sql', { sql: createAccountsTable });
    await supabaseAdmin.rpc('exec_sql', { sql: createTransactionsTable });
}
