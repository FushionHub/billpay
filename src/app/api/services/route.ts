import { NextResponse } from 'next/server';

// Mock function to simulate Flutterwave API call for bills, airtime, and data
async function fetchFlutterwaveServices() {
  // In a real implementation, you would use 'node-fetch' or similar to call the Flutterwave API
  // const response = await fetch('https://api.flutterwave.com/v3/bill-categories', {
  //   headers: { Authorization: `Bearer ${process.env.FLW_SECRET_KEY}` }
  // });

  return [
    { id: 'fw-1', provider: 'flutterwave', type: 'airtime', name: 'MTN Airtime', price: '$5 - $100', icon: 'phone_iphone' },
    { id: 'fw-2', provider: 'flutterwave', type: 'data', name: 'Airtel Data Bundle', price: '$10 - $50', icon: 'wifi' },
    { id: 'fw-3', provider: 'flutterwave', type: 'bill', name: 'DSTV Subscription', price: '$20 - $100', icon: 'tv' },
    { id: 'fw-4', provider: 'flutterwave', type: 'bill', name: 'Ikeja Electric', price: '$10 - $200', icon: 'bolt' },
  ];
}

// Mock function to simulate AFX API call for bills and investments
async function fetchAFXServices() {
  // const response = await fetch('https://api.afx.com/v1/services', {
  //   headers: { Authorization: `Bearer ${process.env.AFX_API_KEY}` }
  // });

  return [
    { id: 'afx-1', provider: 'afx', type: 'investment', name: 'S&P 500 Index Fund', price: 'Min $50', icon: 'trending_up' },
    { id: 'afx-2', provider: 'afx', type: 'investment', name: 'Real Estate REIT', price: 'Min $100', icon: 'real_estate_agent' },
    { id: 'afx-3', provider: 'afx', type: 'bill', name: 'Global Water Utility', price: 'Variable', icon: 'water_drop' },
  ];
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
