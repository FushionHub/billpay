import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { amount, currency = "NGN", email } = await req.json();

        // Initiate a Flutterwave standard payment link
        const FLUTTERWAVE_SECRET_KEY = process.env.FLUTTERWAVE_SECRET_KEY;
        if (!FLUTTERWAVE_SECRET_KEY) throw new Error('FLUTTERWAVE_SECRET_KEY is missing');

        const tx_ref = `flw_link_${Date.now()}`;
        const payload = {
            tx_ref,
            amount,
            currency,
            redirect_url: "https://your-redirect-url.com", // Replace with actual redirect
            customer: {
                email,
                phonenumber: "08012345678", // Would come from user profile
                name: "PayFlex User"
            },
            customizations: {
                title: "PayFlex Deposit",
                logo: "https://example.com/logo.png"
            }
        };

        const response = await fetch("https://api.flutterwave.com/v3/payments", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${FLUTTERWAVE_SECRET_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`Failed to generate Flutterwave link: ${errorData.message}`);
        }

        const data = await response.json();

        return NextResponse.json({ success: true, flutterwave: data });
    } catch (error: any) {
        console.error('Flutterwave Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
