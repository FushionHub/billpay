# PayFlex & GiftNexus Web App

This is a fullstack Next.js web application built with the **App Router**, **Tailwind CSS v4**, and **TypeScript**. It serves as a modern financial dashboard (PayFlex) and a digital gift card marketplace (GiftNexus).

## Features

- **Dashboard:** View overall balance, quick actions (Send, Pay Bill, Top Up), and recent transactions.
- **Transactions:** Send, deposit, and withdraw money through dedicated multi-step UI flows.
- **Smart Payment Routing:** An integrated `PaymentRouter` automatically routes outbound transfers through the **AFX Business API**. If a transfer fails or isn't supported, it cascades down to **Flutterwave** and **PayPal** APIs.
- **Virtual Accounts & Cards:** Connects to AFX to dynamically provision virtual banking accounts and debit cards for users.
- **GiftCard Marketplace:** Browse and filter digital gift cards by category and price.
- **Authentication & Verification:** Designed with a mock secure login and identity (KYC) verification flow.
- **Database:** Supabase integration for logging users, virtual accounts, and transaction history.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory and add your API keys:

```env
# AFX Business API
AFX_API_URL=https://staging.afx-server.com
AFX_API_KEY=your_afx_api_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Fallback Gateways
FLUTTERWAVE_SECRET_KEY=your_flutterwave_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

- `src/app/api`: Server-side route handlers implementing API integrations.
- `src/utils/afx`: API client for the AFX Business API endpoints.
- `src/utils/router/paymentRouter.ts`: Contains the smart gateway fallback logic.
- `src/utils/supabase`: Client and Admin configurations for database insertions.
- `src/context`: React Context providers to simulate global live state (e.g. balance, transactions) across the app.
