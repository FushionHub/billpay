import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { amount, currency = "NGN", email } = await req.json();

        // In a real scenario, you'd initiate a Flutterwave transaction here
        // using the flutterwave-node v3 SDK or REST API
        // https://developer.flutterwave.com/docs/collecting-payments/standard/

        const mockResponse = {
            status: "success",
            message: "Payment link generated",
            data: {
                link: "https://flutterwave.com/pay/mock_link_123"
            }
        };

        return NextResponse.json({ success: true, flutterwave: mockResponse });
    } catch (error: any) {
        console.error('Flutterwave Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
