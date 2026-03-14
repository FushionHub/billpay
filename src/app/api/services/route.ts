import { NextResponse } from 'next/server';

async function fetchFlutterwaveServices() {
  const FLUTTERWAVE_SECRET_KEY = process.env.FLUTTERWAVE_SECRET_KEY;
  if (!FLUTTERWAVE_SECRET_KEY) return [];

  try {
    const response = await fetch('https://api.flutterwave.com/v3/bill-categories?biller_code=AIRTIME', {
      headers: { Authorization: `Bearer ${FLUTTERWAVE_SECRET_KEY}` },
    });

    if (!response.ok) return [];

    const data = await response.json();
    return data.data.slice(0, 4).map((item: any) => ({
      id: `fw-${item.id}`,
      provider: 'flutterwave',
      type: item.biller_name.toLowerCase().includes('data') ? 'data' : 'airtime',
      name: item.biller_name,
      price: item.amount > 0 ? `$${item.amount}` : 'Variable',
      icon: item.biller_name.toLowerCase().includes('data') ? 'wifi' : 'phone_iphone'
    }));
  } catch (error) {
    console.error("Flutterwave API error:", error);
    return [];
  }
}

async function fetchAFXServices() {
  const AFX_API_URL = process.env.AFX_API_URL || 'https://prod.afx-server.com';
  const AFX_API_KEY = process.env.AFX_API_KEY;

  if (!AFX_API_KEY) return [];

  try {
    const response = await fetch(`${AFX_API_URL}/api/v1/services`, {
      headers: { 'x-api-key': AFX_API_KEY },
    });

    if (!response.ok) return [];

    const data = await response.json();
    return data.services.map((item: any) => ({
      id: `afx-${item.id}`,
      provider: 'afx',
      type: item.type || 'investment',
      name: item.name,
      price: item.price || 'Variable',
      icon: item.type === 'investment' ? 'trending_up' : 'water_drop'
    }));
  } catch (error) {
    console.error("AFX API error:", error);
    return [];
  }
}

export async function GET() {
  try {
    const [flutterwaveServices, afxServices] = await Promise.all([
      fetchFlutterwaveServices(),
      fetchAFXServices()
    ]);

    const services = [...flutterwaveServices, ...afxServices];

    return NextResponse.json({ success: true, services });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json({ success: false, error: 'Failed to fetch services' }, { status: 500 });
  }
}
