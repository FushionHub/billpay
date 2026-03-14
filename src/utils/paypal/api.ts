// PayPal Payouts API
const PAYPAL_API_URL = 'https://api-m.sandbox.paypal.com/v1'; // or live
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_SECRET = process.env.PAYPAL_SECRET;

export async function createPayPalPayout(amount: number, currency: string, destinationEmail: string) {
    console.log(`[PayPal] Initiating payout of ${amount} ${currency} to ${destinationEmail}`);

    if (!PAYPAL_CLIENT_ID || !PAYPAL_SECRET) {
        throw new Error('PayPal credentials are not configured.');
    }

    // Step 1: Get Access Token
    const authString = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString('base64');
    const tokenResponse = await fetch(`${PAYPAL_API_URL}/oauth2/token`, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${authString}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials'
    });

    if (!tokenResponse.ok) {
        throw new Error('Failed to get PayPal access token');
    }
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Step 2: Create Payout
    const payoutPayload = {
        sender_batch_header: {
            sender_batch_id: `paypal_${Date.now()}`,
            email_subject: "You have a payment from PayFlex!"
        },
        items: [
            {
                recipient_type: "EMAIL",
                amount: {
                    value: amount.toFixed(2),
                    currency: currency
                },
                receiver: destinationEmail,
                note: "Thank you for using PayFlex."
            }
        ]
    };

    const payoutResponse = await fetch(`${PAYPAL_API_URL}/payments/payouts`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payoutPayload)
    });

    if (!payoutResponse.ok) {
        const errorData = await payoutResponse.json().catch(() => ({}));
        throw new Error(`PayPal payout failed: ${errorData.message || payoutResponse.statusText}`);
    }

    const data = await payoutResponse.json();

    return {
        batch_header: data.batch_header,
        gateway: 'paypal',
        status: 'SUCCESS'
    };
}
