"use client";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import Link from "next/link";

export default function DepositAmount() {
  const { balance } = useUser();
  const [amount, setAmount] = useState("");
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-4 md:px-10 py-3 bg-white dark:bg-slate-900">
          <Link href="/" className="flex items-center gap-4 text-primary cursor-pointer">
            <div className="size-6">
              <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">PayFlex</h2>
          </Link>
          <Link href="/deposit" className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
            <span className="material-symbols-outlined">close</span>
          </Link>
        </header>

        <main className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[520px] flex-1 px-4">
            <div className="flex flex-col gap-3 py-4">
              <div className="flex gap-6 justify-between items-end">
                <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold uppercase tracking-wider">Step 2 of 3</p>
                <p className="text-primary text-sm font-bold">66%</p>
              </div>
              <div className="rounded-full bg-slate-200 dark:bg-slate-800 h-2 overflow-hidden">
                <div className="h-full rounded-full bg-primary" style={{ width: "66%" }}></div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Enter Amount</p>
            </div>

            <div className="flex flex-col gap-2 pt-6 pb-4">
              <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight">Deposit - Enter Amount</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal">How much would you like to add to your PayFlex account?</p>
            </div>

            <div className="flex flex-col items-center justify-center py-10 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex flex-col items-center gap-1 w-full px-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-400">$</span>
                  <input autoFocus className="w-full max-w-[280px] bg-transparent border-none text-slate-900 dark:text-slate-100 text-6xl font-bold text-center focus:ring-0 placeholder:text-slate-200 dark:placeholder:text-slate-700" placeholder="0.00" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="mt-4 flex flex-col items-center gap-1">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Current Balance</p>
                  <p className="text-slate-900 dark:text-slate-100 text-lg font-bold">${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <label className="text-slate-900 dark:text-slate-100 font-semibold text-sm px-1">Deposit From</label>
              <button className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center overflow-hidden">
                    <img className="w-8 h-auto" alt="Visa logo with blue background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCww1gFv0TvD4V8YsR087OAVi5T5weGbKJZ1cI4C20tk2ceuOvJL9aBRbXaKNs2MHQbhFI-TAeihF4Bw5SuLJnVhyHkTR_T-cDgW-pFi7PQvKmxesWGMvXAbJXq7JdYXct6pDvay9PE16-US-eQlkTDuPBnOg7-nfJ3p_T6ArZpU6IZUye_NstdjYqOmPfottdSW-BUBXszUP8gE_rPbOBEXvLc9vJjU75F_1EqCNsNpI_sV-g7fuK4TrEhXc5g-lGxdB87g-7f0IJf" />
                  </div>
                  <div className="text-left">
                    <p className="text-slate-900 dark:text-slate-100 font-bold text-sm">Chase Bank •••• 4242</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">Available: $12,450.00</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">expand_more</span>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-6">
              <button className="py-2 px-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30">+$50</button>
              <button className="py-2 px-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30">+$100</button>
              <button className="py-2 px-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30">+$500</button>
              <button className="py-2 px-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30">Max</button>
            </div>

            <div className="mt-10 mb-8">
              <Link href={`/deposit/review?amount=${amount}`} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                <span>Continue to Review</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <p className="text-center text-slate-400 text-xs mt-4 px-6">
                Funds will be available immediately. Transaction limits apply based on your account level.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
