import Link from "next/link";

export default function BottomNav() {
  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex justify-around items-center z-50">
      <Link href="/" className="flex flex-col items-center gap-1 text-primary">
        <span className="material-symbols-outlined">home</span>
        <span className="text-[10px] font-bold">Home</span>
      </Link>
      <Link href="/send" className="flex flex-col items-center gap-1 text-slate-400">
        <span className="material-symbols-outlined">swap_horiz</span>
        <span className="text-[10px] font-bold">Activity</span>
      </Link>
      <Link href="#" className="flex flex-col items-center gap-1 text-slate-400">
        <span className="material-symbols-outlined">credit_card</span>
        <span className="text-[10px] font-bold">Cards</span>
      </Link>
      <Link href="/settings" className="flex flex-col items-center gap-1 text-slate-400">
        <span className="material-symbols-outlined">settings</span>
        <span className="text-[10px] font-bold">Settings</span>
      </Link>
    </footer>
  );
}
