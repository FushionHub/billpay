import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { amount, currency = "USD" } = await req.json();

        const PAYPAL_API_URL = 'https://api-m.sandbox.paypal.com/v1'; // or live
        const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
        const PAYPAL_SECRET = process.env.PAYPAL_SECRET;

        if (!PAYPAL_CLIENT_ID || !PAYPAL_SECRET) {
            throw new Error('PayPal credentials are not configured.');
        }

        // Get Access Token
        const authString = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString('base64');
        const tokenResponse = await fetch(`${PAYPAL_API_URL}/oauth2/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authString}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials'
        });

        if (!tokenResponse.ok) throw new Error('Failed to get PayPal access token');
        const tokenData = await tokenResponse.json();

        // Create Order
        const orderPayload = {
            intent: "CAPTURE",
            purchase_units: [{
                amount: {
                    currency_code: currency,
                    value: amount.toFixed(2)
                }
            }]
        };

        const orderResponse = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${tokenData.access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderPayload)
        });

        if (!orderResponse.ok) {
             const errorData = await orderResponse.json().catch(() => ({}));
             throw new Error(`Failed to create PayPal order: ${errorData.message}`);
        }

        const data = await orderResponse.json();

        return NextResponse.json({ success: true, paypal: data });
    } catch (error: any) {
        console.error('PayPal Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
