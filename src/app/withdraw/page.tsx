import Link from "next/link";

export default function WithdrawMethod() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 md:px-10">
          <Link href="/" className="flex items-center gap-4 cursor-pointer">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">PayFlex</h2>
          </Link>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="hidden md:flex items-center gap-2 px-2 py-1 bg-primary/10 rounded-lg">
              <span className="text-primary text-xs font-bold">VERIFIED</span>
            </div>
          </div>
        </header>

        <main className="flex flex-1 justify-center py-8">
          <div className="layout-content-container flex flex-col max-w-[640px] flex-1 px-4">
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-xs font-semibold text-primary">Step 1 of 3</span>
                <span className="text-xs font-medium text-slate-500">Method Selection</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-1/3"></div>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight">Withdraw - Select Method</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base">Choose where you&apos;d like to receive your funds. Transfers to bank accounts typically take 1-3 business days.</p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider">Saved Methods</h3>

              <label className="group relative flex cursor-pointer items-center justify-between rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 transition-all hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <input defaultChecked className="hidden peer" name="withdrawal_method" type="radio" value="chase"/>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-primary">
                    <span className="material-symbols-outlined text-2xl">account_balance</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 dark:text-slate-100 font-semibold">Chase Bank ****4321</span>
                    <span className="text-slate-500 text-sm">Linked Bank Account</span>
                  </div>
                </div>
                <div className="h-6 w-6 rounded-full border-2 border-slate-200 dark:border-slate-700 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
              </label>

              <label className="group relative flex cursor-pointer items-center justify-between rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 transition-all hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <input className="hidden peer" name="withdrawal_method" type="radio" value="wellsfargo"/>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-primary">
                    <span className="material-symbols-outlined text-2xl">account_balance</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 dark:text-slate-100 font-semibold">Wells Fargo ****8890</span>
                    <span className="text-slate-500 text-sm">Linked Bank Account</span>
                  </div>
                </div>
                <div className="h-6 w-6 rounded-full border-2 border-slate-200 dark:border-slate-700 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
              </label>

              <label className="group relative flex cursor-pointer items-center justify-between rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 transition-all hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <input className="hidden peer" name="withdrawal_method" type="radio" value="visa"/>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-primary">
                    <span className="material-symbols-outlined text-2xl">credit_card</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 dark:text-slate-100 font-semibold">Visa Debit ****1122</span>
                    <span className="text-slate-500 text-sm">Instant Withdrawal Available</span>
                  </div>
                </div>
                <div className="h-6 w-6 rounded-full border-2 border-slate-200 dark:border-slate-700 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
              </label>
            </div>

            <button className="mt-6 flex w-full items-center justify-between rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500">
                  <span className="material-symbols-outlined">add</span>
                </div>
                <span className="text-slate-600 dark:text-slate-400 font-medium">Add a new bank account or card</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </button>

            <div className="mt-12 flex flex-col gap-4">
              <Link href="/withdraw/amount" className="flex h-14 w-full items-center justify-center rounded-xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 transition-transform active:scale-[0.98]">
                Continue to Amount
              </Link>
              <Link href="/" className="flex h-12 w-full items-center justify-center rounded-xl text-slate-500 font-medium transition-colors hover:text-slate-700 dark:hover:text-slate-300">
                Cancel Withdrawal
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span className="text-xs font-medium">Secure SSL Encrypted Transaction</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
