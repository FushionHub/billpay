import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
      <div className="flex items-center gap-4 text-primary">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
            <span className="material-symbols-outlined">account_balance_wallet</span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">PayFlex</h2>
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-4 items-center">
        <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800">
            <div className="text-slate-500 flex items-center justify-center pl-4">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-slate-500 px-4 pl-2 text-sm font-normal"
              placeholder="Search transactions..."
              defaultValue=""
            />
          </div>
        </label>
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <Link href="/settings" className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </Link>
        </div>
        <Link href="/profile" className="h-10 w-10 rounded-full bg-primary/20 border-2 border-primary overflow-hidden cursor-pointer block">
          <img
            className="w-full h-full object-cover"
            alt="User profile avatar of a smiling man"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLs0xAZmCRzi0TjY7fnD7T8Yr-wZDj2Cc48m8N68m-t2AmC4lsDsLkgcg1c7dXKSqlC2P2czHVruAEhYW7XK2FBJBKT5nPovvJOKtfxSrMQjUtmSmic3KBozl_doehhQanA6eVdz1KxDPk_KubYBEF8bNBkxTLXrp_hlC0mj7GHrAuBw-wOEy1_0Of_7oCjq7c0BGzFjAv3QnqooGY46YtAKIszg91jwySXNd-vhVxgvrocBCx-WrTO02gYmXqxCLRGKn8x02Ghetx"
          />
        </Link>
      </div>
    </header>
  );
}
