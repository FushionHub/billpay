import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function SendAmount() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-40 py-4">
          <Link href="/" className="flex items-center gap-4 cursor-pointer">
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined text-3xl">payments</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">PayFlex</h2>
          </Link>
          <div className="flex flex-1 justify-end gap-4">
            <Link href="/send" className="flex items-center justify-center rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 gap-2 text-sm font-semibold hover:bg-slate-200 transition-colors">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              <span>Back</span>
            </Link>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </header>

        <main className="flex flex-1 justify-center py-10 px-4">
          <div className="layout-content-container flex flex-col max-w-[480px] flex-1 bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 lg:p-8 border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-8 px-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</div>
                <div className="h-[2px] w-8 bg-primary"></div>
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold border-2 border-primary">2</div>
                <div className="h-[2px] w-8 bg-slate-200 dark:bg-slate-700"></div>
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 flex items-center justify-center text-sm font-bold">3</div>
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Step 2 of 3</span>
            </div>

            <div className="flex flex-col items-center mb-10">
              <div className="relative">
                <img className="size-24 rounded-full border-4 border-white dark:border-slate-800 shadow-md object-cover" alt="Profile photo of Sarah M. smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJNevj_KNqlfzhWwaoXDlNQmsOqVIdD4rGFqgdVtJq5bwXRI58tG7xGns_ITHZWFdmApbbab1OYTwMp-dA8HmcPZ2pRRisnq0llvHTKw0CQGJLRu3VkbzPJy_Vcp9rBRn1O2Wu0Qwz28ndvEUzf0QSF95C32xl-MBNvSFN3tkZB8bdaWSG_E-eVG-ZnWJdxswIqDuJLwJPvaNz47vE5n33-C8m7AsczWcIFkdDMicSqqIq0G7uq_UxUsGBjG-eijjrZJXNawBcA5St" />
                <div className="absolute bottom-0 right-0 size-6 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold">Sarah M.</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">sarah.m@email.com</p>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-center text-slate-500 dark:text-slate-400 text-sm font-medium mb-2 uppercase tracking-wide">Enter Amount</label>
              <div className="relative flex items-center justify-center">
                <span className="text-4xl lg:text-5xl font-bold text-slate-400 dark:text-slate-600 mr-2">$</span>
                <input className="w-full max-w-[240px] border-none bg-transparent text-center text-5xl lg:text-6xl font-bold text-primary focus:ring-0 placeholder:text-slate-200 dark:placeholder:text-slate-800 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]" min="0" placeholder="0.00" step="0.01" type="number" />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 dark:bg-primary/10 rounded-full border border-primary/10">
                  <span className="material-symbols-outlined text-primary text-sm">account_balance_wallet</span>
                  <p className="text-primary text-sm font-semibold">Balance: $4,250.50</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">category</span>
                  Transfer Category
                </label>
                <select className="form-select w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-12 text-sm" defaultValue="">
                  <option disabled value="">Select category</option>
                  <option value="friends">Friends & Family</option>
                  <option value="services">Services</option>
                  <option value="rent">Rent & Utilities</option>
                  <option value="dining">Dining & Drinks</option>
                  <option value="shopping">Shopping</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">notes</span>
                  Note (Optional)
                </label>
                <textarea className="form-textarea w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none" placeholder="What's this for?" rows={3}></textarea>
              </div>
            </div>

            <div className="mt-10 space-y-3">
              <Link href="/send/review" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                <span>Continue</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link href="/send" className="w-full block text-center bg-transparent text-slate-500 dark:text-slate-400 font-semibold py-2 hover:text-slate-700 dark:hover:text-slate-200 transition-colors text-sm">
                Cancel Transfer
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 text-slate-400 dark:text-slate-500 text-xs">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span className="uppercase font-bold tracking-widest">Secure encrypted transfer</span>
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
