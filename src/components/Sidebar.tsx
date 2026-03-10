import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 p-6 gap-8 bg-white dark:bg-background-dark">
      <div className="flex items-center gap-3">
        <div className="bg-primary text-white p-2 rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined">payments</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight">PayFlex</h2>
      </div>
      <div className="flex flex-col gap-4">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-primary/10 rounded-lg group transition-colors">
          <span className="material-symbols-outlined text-slate-500 group-hover:text-primary">home</span>
          <span className="text-sm font-medium">Home</span>
        </Link>
        <Link href="/send" className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-primary/10 rounded-lg group transition-colors">
          <span className="material-symbols-outlined text-slate-500 group-hover:text-primary">credit_card</span>
          <span className="text-sm font-medium">Payments</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-primary/10 rounded-lg group transition-colors">
          <span className="material-symbols-outlined text-slate-500 group-hover:text-primary">account_balance_wallet</span>
          <span className="text-sm font-medium">Cards</span>
        </Link>
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-primary/10 rounded-lg group transition-colors">
          <span className="material-symbols-outlined text-slate-500 group-hover:text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </div>
      <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
        <Link href="/profile" className="flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 rounded-lg transition-colors cursor-pointer -mx-2">
          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
            <img className="w-full h-full object-cover" alt="User profile avatar close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa_FNWXrGDmTV3cDO7b63kOu_80C6cEjEGmQmb_8QeU6pHncj61bqDcuPP7g3dsr1ZfX3-v-nmOPSczR2OkCIgFTNbUuXU0iLJw-ge04_-R0IJ_ojpj0mRIJ-w8G0n4e8aev7XXlVJnVGvdD4i6Or0bNorq5oHC-7hgK45JJVtYnY9635LWEZEE8WqohbYxSEI5CEocES6dT3LgUzfL8f1Af2yZ2bH2OrBpf0iosJet8wLyPqt9F55QjYsDQKWEUFiFt6IfQ_jYngb"/>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold truncate">Alex Morgan</p>
            <p className="text-xs text-slate-500">Premium Account</p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
