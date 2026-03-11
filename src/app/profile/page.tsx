"use client";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function Profile() {
  const generateVirtualAccount = async () => {
    try {
      const res = await fetch("/api/virtual-account", { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ currency: "USD" }) });
      const data = await res.json();
      if(data.success) alert("Virtual Account created!"); else alert("Error: " + data.error);
    } catch (e) { console.error(e); }
  };

  const generateVirtualCard = async () => {
    try {
      const res = await fetch("/api/virtual-card", { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ currency: "USD" }) });
      const data = await res.json();
      if(data.success) alert("Virtual Card created!"); else alert("Error: " + data.error);
    } catch (e) { console.error(e); }
  };
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <div className="md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 pb-16 md:pb-0">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 py-4">
              <div className="flex items-center gap-4 text-primary">
                <Link href="/" className="size-8 flex items-center justify-center bg-primary/10 rounded-lg cursor-pointer">
                  <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                </Link>
                <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">PayFlex Profile</h2>
              </div>
              <Link href="/settings" className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined">settings</span>
              </Link>
            </header>

            <div className="flex flex-col gap-8 p-6">
              <div className="flex w-full flex-col gap-6 items-center py-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="flex gap-4 flex-col items-center">
                  <div className="relative group">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-primary/20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsCYrcO0gjxM7lC5ONXxA-dEoaZQSyNFbtchITeWCooLrSjoHhu3DJQzQ4ZQZSLMda9wwpkqs4SQagzAfOXMhVPWNgtFa6Llsj_HoC5uj2fiK91pOBnXP8jYKrngpyhD6_VGRzw359cmIgnBr4m1W0BMcklO8RupqxZYMA2doaTLXBU1KbPKQDLNgB74BcU-jxAQpTZJXyKjA_SZ6WqNhMYio5_HvFacozTxLpJ00zEnPZfcloYeNq0TsEVtu4exOUVHWQ4Yn01oWH')" }}>
                    </div>
                    <div className="absolute bottom-0 right-0 p-1.5 bg-primary text-white rounded-full border-2 border-white dark:border-slate-900 cursor-pointer">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight text-center">Alex Payflex</p>
                    <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal text-center">alex.payflex@email.com</p>
                    <div className="mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider">
                      Personal Account
                    </div>
                  </div>
                </div>
              </div>

              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Linked Accounts</h3>
                  <div className="flex gap-2"><button onClick={generateVirtualAccount} className="text-primary text-sm font-semibold hover:underline">Add Virtual Account</button><button onClick={generateVirtualCard} className="text-primary text-sm font-semibold hover:underline">Add Virtual Card</button></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                      <span className="material-symbols-outlined">account_balance</span>
                    </div>
                    <div className="flex flex-col flex-1">
                      <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Chase Bank</h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Checking •••• 8829</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                      <span className="material-symbols-outlined">credit_card</span>
                    </div>
                    <div className="flex flex-col flex-1">
                      <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Visa Signature</h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Debit •••• 1024</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight mb-4">Personal Information</h3>
                <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</span>
                      <span className="text-slate-900 dark:text-white font-medium">Alex Payflex</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">edit</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Number</span>
                      <span className="text-slate-900 dark:text-white font-medium">+1 (555) 012-3456</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">edit</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Address</span>
                      <span className="text-slate-900 dark:text-white font-medium">123 Financial District, NY 10001</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">edit</span>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight mb-4">Security</h3>
                <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-500">lock</span>
                      <span className="text-slate-900 dark:text-white font-medium">Change Password</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-500">fingerprint</span>
                      <div className="flex flex-col">
                        <span className="text-slate-900 dark:text-white font-medium">Biometric Login</span>
                        <span className="text-xs text-slate-500">Face ID & Touch ID</span>
                      </div>
                    </div>
                    <label className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out">
                      <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                      <input checked className="invisible absolute peer" type="checkbox" readOnly/>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-500">shield_person</span>
                      <span className="text-slate-900 dark:text-white font-medium">Two-Factor Authentication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-green-500 uppercase">On</span>
                      <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>
                  </div>
                </div>
              </section>

              <div className="flex flex-col gap-4 mt-4">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors shadow-sm">
                  <span className="material-symbols-outlined">help</span>
                  Help & Support
                </button>
                <Link href="/login" className="flex w-full items-center justify-center gap-2 rounded-xl h-14 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 font-bold hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors border border-red-100 dark:border-red-900/30">
                  <span className="material-symbols-outlined">logout</span>
                  Log Out
                </Link>
              </div>

              <div className="text-center py-6">
                <p className="text-slate-400 text-xs">PayFlex v2.4.0 • Made with security in mind</p>
              </div>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
