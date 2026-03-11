import { createAfxTransaction } from '../afx/api';
import { createFlutterwaveTransfer } from '../flutterwave/api';
import { createPayPalPayout } from '../paypal/api';

/**
 * PaymentRouter automatically attempts to process an outbound transfer/withdrawal
 * using a cascading fallback strategy across our 3 supported gateways: AFX, Flutterwave, and PayPal.
 */
export async function routePayment(params: {
    userId: string,
    amount: number,
    currency: string,
    destinationId: string, // This could be an AFX id, a bank account number, or a PayPal email depending on user preference
    preferredGateway?: 'afx' | 'flutterwave' | 'paypal' // Optional hint from the frontend
}) {
    const { userId, amount, currency, destinationId, preferredGateway } = params;

    // Define the fallback order. If a preferred gateway is provided, try it first.
    const defaultOrder: ('afx' | 'flutterwave' | 'paypal')[] = ['afx', 'flutterwave', 'paypal'];
    let processingOrder = defaultOrder;

    if (preferredGateway) {
        processingOrder = [
            preferredGateway,
            ...defaultOrder.filter(g => g !== preferredGateway)
        ];
    }

    const errors: any[] = [];

    // Attempt each gateway in order
    for (const gateway of processingOrder) {
        try {
            console.log(`[PaymentRouter] Attempting outbound transfer via ${gateway}...`);

            if (gateway === 'afx') {
                const result = await createAfxTransaction({
                    customerId: userId,
                    destinationAmount: amount,
                    sourceCurrency: currency,
                    destinationCurrency: currency,
                    destinationId: destinationId
                });
                return { success: true, gateway: 'afx', transaction: result };
            }

            if (gateway === 'flutterwave') {
                const result = await createFlutterwaveTransfer(amount, currency, destinationId);
                return { success: true, gateway: 'flutterwave', transaction: result };
            }

            if (gateway === 'paypal') {
                // Note: PayPal expects an email or phone for Payouts typically.
                const result = await createPayPalPayout(amount, currency, destinationId);
                return { success: true, gateway: 'paypal', transaction: result };
            }

        } catch (error: any) {
            console.warn(`[PaymentRouter] Gateway ${gateway} failed:`, error.message);
            errors.push({ gateway, error: error.message });
            // Continue to the next gateway in the loop
        }
    }

    // If we exhaust all gateways, the transaction fails entirely.
    throw new Error(`All payment gateways failed. Details: ${JSON.stringify(errors)}`);
}
