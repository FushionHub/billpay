"use client";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import Link from "next/link";

export default function WithdrawAmount() {
  const { balance } = useUser();
  const [amount, setAmount] = useState("");
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5 sm:px-4 md:px-20 lg:px-40">
          <div className="layout-content-container flex flex-col max-w-[560px] flex-1 bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center p-2 rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">Withdraw - Enter Amount</h2>
              </div>
              <Link href="/" className="flex items-center justify-center rounded-full h-8 w-8 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-sm">close</span>
              </Link>
            </header>

            <div className="p-8 flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
                <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
                <div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-800"></div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight">How much?</p>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Current balance:</span>
                <span className="text-primary text-sm font-bold leading-normal">${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="flex flex-col gap-3">
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Amount to withdraw</p>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                      <span className="material-symbols-outlined">attach_money</span>
                    </div>
                    <input className="form-input w-full rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 h-16 pl-10 pr-4 text-2xl font-bold transition-all placeholder:text-slate-300 dark:placeholder:text-slate-700" placeholder="0.00" type="number"/>
                  </div>
                </label>
                <div className="flex justify-between items-center px-1">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Min: $10.00 • Max: $5,000.00</p>
                  <button className="text-primary text-xs font-bold hover:underline">Withdraw All</button>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-5 border border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">source</span>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Source</p>
                      <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold">Investment Portfolio</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800 w-full"></div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm text-primary">account_balance</span>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Destination</p>
                      <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold">Primary Wallet (**** 4242)</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <Link href={`/withdraw/review?amount=${amount}`} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                  <span>Continue to Review</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link href="/withdraw" className="w-full text-center bg-transparent text-slate-500 dark:text-slate-400 font-semibold py-2 px-6 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                  Cancel Transaction
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/50 p-4 border-t border-slate-200 dark:border-slate-800 text-center">
              <p className="text-slate-400 dark:text-slate-500 text-xs flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[14px]">lock</span>
                Secure encrypted transaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
