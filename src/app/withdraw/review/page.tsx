"use client";
import { Suspense } from "react";
import Link from "next/link";

import { useSearchParams, useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
function WithdrawReviewContent() {
  const { updateBalance, addTransaction } = useUser();
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || "500.00";
  const router = useRouter();
  const handleWithdraw = async () => {
    try {
      const res = await fetch("/api/withdraw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount), destinationAccountId: "bank_5678" })
      });
      const data = await res.json();
      if (data.success) {
        alert("Withdrawal initiated successfully!");

        updateBalance(-Number(amount));
        addTransaction({
            id: String(Date.now()),
            title: 'Withdrawal to Bank',
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            type: 'Transfer',
            amount: -Number(amount),
            status: 'Success',
            icon: 'account_balance',
            iconColor: 'text-slate-500'
        });

        router.push("/");
      } else {
        alert("Mock API response error.\n" + (data.error || ""));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 lg:px-40">
          <Link href="/" className="flex items-center gap-4 text-primary">
            <div className="size-6 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">Withdraw</h2>
          </Link>
          <Link href="/" className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>close</span>
          </Link>
        </header>

        <main className="flex flex-1 justify-center py-8 lg:py-12 px-4">
          <div className="layout-content-container flex flex-col max-w-[520px] flex-1 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 lg:p-10">
            <div className="flex flex-col gap-2 mb-8 text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <h1 className="text-slate-900 dark:text-slate-100 text-2xl lg:text-3xl font-bold leading-tight">Review & Confirm</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Step 3 of 3: Please verify the details below before completing your transaction.</p>
            </div>

            <div className="space-y-1 mb-8">
              <div className="flex justify-between items-center py-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400" style={{ fontSize: "20px" }}>upload</span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Source</p>
                </div>
                <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold">Savings Account (****1234)</p>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400" style={{ fontSize: "20px" }}>download</span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Destination</p>
                </div>
                <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold">External Bank (****5678)</p>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400" style={{ fontSize: "20px" }}>payments</span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Amount</p>
                </div>
                <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold">{`${amount}`}</p>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400" style={{ fontSize: "20px" }}>receipt_long</span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Fee</p>
                </div>
                <p className="text-green-600 dark:text-green-400 text-sm font-semibold">Free</p>
              </div>
            </div>

            <div className="mb-8 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <div className="flex flex-col gap-1">
                <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-bold">Total Withdrawal Amount</p>
                <p className="text-primary tracking-tight text-4xl font-extrabold leading-tight">{`${amount}`}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button onClick={handleWithdraw} className="flex w-full cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold transition-all hover:bg-primary/90 shadow-lg shadow-primary/20">
                <span className="truncate">Confirm Withdrawal</span>
              </button>
              <Link href="/withdraw/amount" className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-transparent text-slate-600 dark:text-slate-400 text-base font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <span className="truncate">Cancel and Go Back</span>
              </Link>
            </div>

            <div className="mt-8 flex items-start gap-3 p-4 bg-blue-50 dark:bg-primary/5 rounded-lg border border-blue-100 dark:border-primary/20">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>info</span>
              <p className="text-slate-600 dark:text-slate-400 text-[12px] leading-relaxed">
                Funds will be available in your destination account within 1-3 business days. By clicking confirm, you authorize this transaction.
              </p>
            </div>
          </div>
        </main>

        <footer className="py-6 text-center text-slate-400 dark:text-slate-600 text-xs">
          © 2024 SecureBank. All transactions are encrypted and secured.
        </footer>
      </div>
    </div>
  );
}

export default function WithdrawReview() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WithdrawReviewContent />
    </Suspense>
  );
}