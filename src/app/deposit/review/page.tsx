"use client";
import { Suspense } from "react";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";

function DepositReviewContent() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-4 md:px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-10">
          <Link href="/" className="flex items-center gap-4 text-primary cursor-pointer">
            <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
              <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">PayFlex</h2>
          </Link>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </header>

        <main className="flex flex-1 justify-center py-8 px-4">
          <div className="layout-content-container flex flex-col max-w-[560px] flex-1">
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex gap-6 justify-between items-end">
                <p className="text-slate-900 dark:text-slate-100 text-base font-semibold leading-normal">Step 3 of 3</p>
                <p className="text-primary text-sm font-bold leading-normal">100%</p>
              </div>
              <div className="rounded-full bg-primary/10 h-2 w-full overflow-hidden">
                <div className="h-full rounded-full bg-primary" style={{ width: "100%" }}></div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Review & Confirm</p>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl font-extrabold leading-tight">Review & Confirm</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base">Please verify your deposit details before we process the transaction.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-primary/10 overflow-hidden mb-6">
              <div className="p-6 border-b border-primary/5">
                <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-4">Transaction Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                        <span className="material-symbols-outlined">account_balance</span>
                      </div>
                      <div>
                        <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-bold">Source</p>
                        <p className="text-slate-900 dark:text-slate-100 font-semibold">Chase Bank (•••• 4291)</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">wallet</span>
                      </div>
                      <div>
                        <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-bold">Destination</p>
                        <p className="text-slate-900 dark:text-slate-100 font-semibold">PayFlex Personal Wallet</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800/50">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Deposit Amount</p>
                    <p className="text-slate-900 dark:text-slate-100 font-medium">$1,250.00</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Processing Fee</p>
                    <p className="text-green-600 dark:text-green-400 font-medium">Free</p>
                  </div>
                  <div className="pt-3 border-t border-primary/10 flex justify-between items-center">
                    <p className="text-slate-900 dark:text-slate-100 font-bold">Total to Deposit</p>
                    <p className="text-primary text-2xl font-black">$1,250.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 dark:bg-primary/5 border border-primary/10 mb-8">
              <span className="material-symbols-outlined text-primary mt-0.5">verified_user</span>
              <div>
                <p className="text-primary font-bold text-sm">Secure Transaction</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Your funds are protected by 256-bit encryption. Transfers usually complete within 1-3 business days depending on your bank&apos;s processing time.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                <span>Confirm Deposit</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <Link href="/deposit/amount" className="w-full text-center bg-transparent hover:bg-primary/5 text-slate-500 dark:text-slate-400 font-semibold py-3 rounded-xl transition-all">
                Cancel & Go Back
              </Link>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-400 dark:text-slate-500 text-xs">
                By clicking Confirm, you authorize PayFlex to initiate a one-time transfer from your linked account.
              </p>
            </div>
          </div>
        </main>

        <BottomNav />
      </div>
    </div>
  );
}

export default function DepositReview() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DepositReviewContent />
    </Suspense>
  );
}