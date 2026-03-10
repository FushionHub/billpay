import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function Dashboard() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col pb-16 md:pb-0">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-8">
            <div className="max-w-5xl mx-auto flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-tight">Total Balance</p>
                      <h3 className="text-3xl font-bold mt-1">$12,450.80</h3>
                      <div className="flex items-center gap-2 mt-2 text-emerald-600 dark:text-emerald-400">
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                        <span className="text-sm font-medium">+12.5% this month</span>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Link href="/deposit" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-md inline-block">Add Funds</Link>
                      <Link href="/withdraw" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-bold border border-slate-200 dark:border-slate-700 inline-block">Withdraw</Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-800/50 p-6 flex items-center justify-center border-l border-slate-100 dark:border-slate-800">
                    <div className="relative w-full h-32 rounded-xl bg-gradient-to-br from-primary to-blue-400 p-5 text-white shadow-lg overflow-hidden group">
                      <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="flex justify-between items-start">
                          <span className="material-symbols-outlined">contactless</span>
                          <span className="font-bold italic">VISA</span>
                        </div>
                        <div>
                          <p className="text-[10px] opacity-70">PayFlex Virtual Card</p>
                          <p className="text-sm tracking-widest mt-1">**** **** **** 8842</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                  <h4 className="text-slate-900 dark:text-slate-100 font-bold mb-4">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/send" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-primary/5 transition-colors border border-slate-100 dark:border-slate-800">
                      <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
                        <span className="material-symbols-outlined">send</span>
                      </div>
                      <span className="text-xs font-bold">Send</span>
                    </Link>
                    <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-primary/5 transition-colors border border-slate-100 dark:border-slate-800">
                      <div className="size-10 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 flex items-center justify-center">
                        <span className="material-symbols-outlined">payments</span>
                      </div>
                      <span className="text-xs font-bold">Pay Bill</span>
                    </button>
                    <Link href="/giftcards" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-primary/5 transition-colors border border-slate-100 dark:border-slate-800">
                      <div className="size-10 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 flex items-center justify-center">
                        <span className="material-symbols-outlined">card_giftcard</span>
                      </div>
                      <span className="text-xs font-bold">Buy Gift</span>
                    </Link>
                    <Link href="/deposit" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-primary/5 transition-colors border border-slate-100 dark:border-slate-800">
                      <div className="size-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center">
                        <span className="material-symbols-outlined">add_circle</span>
                      </div>
                      <span className="text-xs font-bold">Top Up</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden bg-gradient-to-r from-primary to-indigo-600 p-6 text-white relative shadow-xl">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Popular Gift Cards</h3>
                    <p className="text-white/80 mt-1">Get up to 15% discount on Amazon, Netflix, and Steam gift cards this weekend.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 flex items-center gap-3">
                      <span className="material-symbols-outlined">shopping_cart</span>
                      <span className="text-sm font-bold">Amazon</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 flex items-center gap-3">
                      <span className="material-symbols-outlined">movie</span>
                      <span className="text-sm font-bold">Netflix</span>
                    </div>
                    <Link href="/giftcards" className="bg-white text-primary px-6 py-2 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors inline-block text-center pt-2.5">Shop All</Link>
                  </div>
                </div>
                <div className="absolute -right-20 -top-20 size-64 bg-white/10 rounded-full blur-3xl"></div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <h3 className="text-lg font-bold">Recent Transactions</h3>
                  <button className="text-primary text-sm font-bold hover:underline">View All</button>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <span className="material-symbols-outlined text-orange-500">bolt</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">Electric Bill Payment</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Oct 12, 2023 • Utility</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-red-500">-$84.50</p>
                      <p className="text-[10px] text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded-full font-bold uppercase">Success</p>
                    </div>
                  </div>
                  <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">download</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">Deposit from Bank</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Oct 10, 2023 • Wallet</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-emerald-500">+$500.00</p>
                      <p className="text-[10px] text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded-full font-bold uppercase">Success</p>
                    </div>
                  </div>
                  <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <span className="material-symbols-outlined text-indigo-500">shopping_bag</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">Amazon Gift Card</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Oct 08, 2023 • Purchase</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-red-500">-$25.00</p>
                      <p className="text-[10px] text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded-full font-bold uppercase">Success</p>
                    </div>
                  </div>
                  <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-500">person</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">Transfer to Sarah M.</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Oct 05, 2023 • Transfer</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-red-500">-$120.00</p>
                      <p className="text-[10px] text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded-full font-bold uppercase">Pending</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
