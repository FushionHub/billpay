import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function SendReview() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 py-3 sticky top-0 z-50">
          <Link href="/" className="flex items-center gap-4 text-primary cursor-pointer">
            <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-primary text-2xl">account_balance_wallet</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">PayFlex</h2>
          </Link>
          <div className="flex flex-1 justify-end gap-4 md:gap-8">
            <div className="flex items-center">
              <Link className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium leading-normal flex items-center gap-1" href="/send/amount">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                <span>Back</span>
              </Link>
            </div>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
              <span className="material-symbols-outlined text-xl">help</span>
            </button>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-[640px] px-4 py-8">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex items-center text-primary">
                <span className="text-sm font-medium">Recipient</span>
                <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
              </div>
              <div className="flex items-center text-primary">
                <span className="text-sm font-medium">Amount</span>
                <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
              </div>
              <div className="flex items-center text-slate-900 dark:text-slate-100">
                <span className="text-sm font-bold">Review</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight mb-2">Review & Confirm</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base">Verify the transaction details before sending.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden mb-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-4 border-b border-slate-200 dark:border-slate-800">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
                  <img className="h-full w-full object-cover" alt="Profile picture of Alex Johnson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJNevj_KNqlfzhWwaoXDlNQmsOqVIdD4rGFqgdVtJq5bwXRI58tG7xGns_ITHZWFdmApbbab1OYTwMp-dA8HmcPZ2pRRisnq0llvHTKw0CQGJLRu3VkbzPJy_Vcp9rBRn1O2Wu0Qwz28ndvEUzf0QSF95C32xl-MBNvSFN3tkZB8bdaWSG_E-eVG-ZnWJdxswIqDuJLwJPvaNz47vE5n33-C8m7AsczWcIFkdDMicSqqIq0G7uq_UxUsGBjG-eijjrZJXNawBcA5St"/>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5">Recipient</p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Sarah M.</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">sarah.m@email.com</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Transfer Amount</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold">$250.00</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Category</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-primary">home</span>
                    <span className="text-slate-900 dark:text-slate-100 font-medium text-sm">Rent & Utilities</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Transaction Fee</span>
                  <span className="text-green-600 dark:text-green-400 font-medium text-sm">Free</span>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-slate-900 dark:text-slate-100 font-bold text-lg">Total to Send</span>
                  <span className="text-primary font-extrabold text-2xl tracking-tight">$250.00</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/10 mb-8">
              <span className="material-symbols-outlined text-primary text-xl mt-0.5">lock</span>
              <div className="text-sm leading-relaxed">
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-semibold">Secure Transaction:</span> Your payment is protected by 256-bit bank-grade encryption. The recipient will receive the funds instantly.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">send</span>
                Confirm & Send $250.00
              </button>
              <Link href="/send" className="w-full text-center bg-transparent border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold py-3 px-6 rounded-xl transition-all">
                Cancel Transaction
              </Link>
            </div>

            <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">
              By confirming, you agree to PayFlex&apos;s <Link className="underline hover:text-primary" href="#">Terms of Service</Link> and <Link className="underline hover:text-primary" href="#">Privacy Policy</Link>.
            </p>
          </div>
        </main>

        <BottomNav />
      </div>
    </div>
  );
}
