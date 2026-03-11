const AFX_API_URL = process.env.AFX_API_URL || 'https://staging.afx-server.com';
const AFX_API_KEY = process.env.AFX_API_KEY || 'test-api-key-123';

export async function createAfxCustomer(email: string, fullName: string) {
    const res = await fetch(`${AFX_API_URL}/api/v1/customer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': AFX_API_KEY
        },
        body: JSON.stringify({ email, fullName })
    });
    if (!res.ok) throw new Error(`Failed to create AFX Customer: ${await res.text()}`);
    return res.json();
}

export async function getAfxOrgBalance() {
    const res = await fetch(`${AFX_API_URL}/api/v1/org/balance`, {
        method: 'GET',
        headers: {
            'x-api-key': AFX_API_KEY
        }
    });
    if (!res.ok) throw new Error(`Failed to fetch org balance: ${await res.text()}`);
    return res.json();
}

export async function createAfxPaymentMethod(data: any) {
    const res = await fetch(`${AFX_API_URL}/api/v1/payment-method`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': AFX_API_KEY
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`Failed to create payment method: ${await res.text()}`);
    return res.json();
}

export async function createAfxTransaction(data: any) {
    const res = await fetch(`${AFX_API_URL}/api/v1/transaction`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': AFX_API_KEY
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`Failed to create transaction: ${await res.text()}`);
    return res.json();
}

export async function createAfxVirtualAccount(customerId: string, currency: string = "USD") {
    const res = await fetch(`${AFX_API_URL}/api/v1/payment-method/virtual-account`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': AFX_API_KEY
        },
        body: JSON.stringify({ customerId, currency })
    });
    if (!res.ok) throw new Error(`Failed to create virtual account: ${await res.text()}`);
    return res.json();
}

export async function createAfxVirtualCard(customerId: string, currency: string = "USD") {
    // Note: The actual path might differ slightly depending on AFX specs, usually under payment-method/virtual-card or similar
    const res = await fetch(`${AFX_API_URL}/api/v1/payment-method/virtual-card`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': AFX_API_KEY
        },
        body: JSON.stringify({ customerId, currency })
    });
    if (!res.ok) throw new Error(`Failed to create virtual card: ${await res.text()}`);
    return res.json();
}
