import Link from "next/link";

export default function DepositMethod() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <div className="md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4">
              <Link href="/" className="flex items-center gap-4 text-slate-900 dark:text-slate-100 cursor-pointer">
                <div className="flex items-center text-primary">
                  <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
                </div>
                <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">PayFlex</h2>
              </Link>
              <div className="flex items-center gap-4">
                <button className="flex items-center justify-center rounded-lg h-10 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 gap-2 text-sm font-bold px-4">
                  <span className="material-symbols-outlined text-lg">shield</span>
                  <span className="hidden sm:inline">Secure</span>
                </button>
              </div>
            </header>

            <div className="flex flex-col gap-3 p-6 md:px-10">
              <div className="flex gap-6 justify-between items-end">
                <div className="flex flex-col">
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Step 1 of 3</p>
                  <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl font-bold leading-tight mt-1">Deposit - Select Method</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal mt-1">Choose your preferred funding source</p>
                </div>
                <p className="text-primary text-sm font-bold leading-normal">33%</p>
              </div>
              <div className="rounded-full bg-slate-200 dark:bg-slate-800 h-2.5 w-full overflow-hidden">
                <div className="h-full rounded-full bg-primary" style={{ width: "33%" }}></div>
              </div>
            </div>

            <div className="px-6 md:px-10 py-4">
              <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Linked Bank Accounts</h3>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-primary cursor-pointer hover:border-primary transition-all shadow-sm">
                  <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
                    <span className="material-symbols-outlined text-2xl">account_balance</span>
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <p className="text-slate-900 dark:text-slate-100 text-base font-semibold leading-normal">Chase Bank ****8821</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">Instant deposit available</p>
                  </div>
                  <div className="shrink-0">
                    <input defaultChecked className="h-5 w-5 border-slate-300 text-primary focus:ring-primary" name="deposit-method" type="radio" />
                  </div>
                </label>

                <label className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-transparent cursor-pointer hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm">
                  <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 size-12">
                    <span className="material-symbols-outlined text-2xl">account_balance</span>
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <p className="text-slate-900 dark:text-slate-100 text-base font-semibold leading-normal">Wells Fargo ****4492</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">1-3 business days</p>
                  </div>
                  <div className="shrink-0">
                    <input className="h-5 w-5 border-slate-300 text-primary focus:ring-primary" name="deposit-method" type="radio" />
                  </div>
                </label>
              </div>
            </div>

            <div className="px-6 md:px-10 py-4">
              <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Debit & Credit Cards</h3>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-transparent cursor-pointer hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm">
                  <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 size-12">
                    <span className="material-symbols-outlined text-2xl">credit_card</span>
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <p className="text-slate-900 dark:text-slate-100 text-base font-semibold leading-normal">Visa Corporate ****1234</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">Instant deposit · 2.5% fee</p>
                  </div>
                  <div className="shrink-0">
                    <input className="h-5 w-5 border-slate-300 text-primary focus:ring-primary" name="deposit-method" type="radio" />
                  </div>
                </label>
              </div>
            </div>

            <div className="px-6 md:px-10 py-4 mb-8">
              <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Other Options</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined text-primary">add_circle</span>
                  <span className="text-slate-900 dark:text-slate-100 font-medium">Link new bank</span>
                </button>
                <button className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined text-primary">add_card</span>
                  <span className="text-slate-900 dark:text-slate-100 font-medium">Add new card</span>
                </button>
              </div>
            </div>

            <div className="mt-auto px-6 md:px-10 py-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center gap-4">
              <Link href="/" className="text-slate-600 dark:text-slate-400 font-bold px-6 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                Cancel
              </Link>
              <Link href="/deposit/amount" className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-3 rounded-lg flex items-center gap-2">
                <span>Continue</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
