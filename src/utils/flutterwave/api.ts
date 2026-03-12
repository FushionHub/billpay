// Flutterwave Transfer API
const FLUTTERWAVE_API_URL = 'https://api.flutterwave.com/v3';
const FLUTTERWAVE_SECRET_KEY = process.env.FLUTTERWAVE_SECRET_KEY;

export async function createFlutterwaveTransfer(amount: number, currency: string, destinationId: string) {
    console.log(`[Flutterwave] Initiating transfer of ${amount} ${currency} to ${destinationId}`);

    if (!FLUTTERWAVE_SECRET_KEY) {
        throw new Error('Flutterwave secret key is not configured.');
    }

    const payload = {
        account_bank: "044", // Example: target bank code
        account_number: destinationId,
        amount: amount,
        currency: currency,
        narration: "PayFlex Transfer",
        reference: `flw_${Date.now()}`
    };

    const response = await fetch(`${FLUTTERWAVE_API_URL}/transfers`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${FLUTTERWAVE_SECRET_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Flutterwave transfer failed: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();

    return {
        id: data.data.id.toString(),
        status: data.status === 'success' ? 'SUCCESS' : 'PENDING',
        gateway: 'flutterwave',
        message: data.message,
        data: data.data
    };
}
