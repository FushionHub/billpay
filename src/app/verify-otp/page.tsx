import Link from "next/link";

export default function VerifyOTP() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-white dark:bg-slate-900/50">
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em]">PayFlex</h2>
          </div>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
        </header>

        <main className="flex flex-1 justify-center items-center py-10 px-4">
          <div className="layout-content-container flex flex-col max-w-[480px] flex-1 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-2 mb-8 text-center">
              <div className="mx-auto size-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <span className="material-symbols-outlined text-4xl">verified_user</span>
              </div>
              <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-[-0.033em]">Verify your identity</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                We&apos;ve sent a 6-digit verification code to <span className="font-semibold text-slate-900 dark:text-slate-100">m***@example.com</span>. Please enter it below to continue.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <fieldset className="flex gap-2 sm:gap-4">
                {[...Array(6)].map((_, i) => (
                  <input key={i} className="flex h-14 w-10 sm:w-12 text-center text-xl font-bold rounded-lg border-2 border-slate-200 dark:border-slate-800 bg-transparent focus:border-primary focus:ring-0 dark:focus:border-primary transition-all text-slate-900 dark:text-white" inputMode="numeric" maxLength={1} pattern="\d*" placeholder="·" type="text" />
                ))}
              </fieldset>
            </div>

            <Link href="/verify-identity" className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mb-8">
              <span>Verify Account</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>

            <div className="flex flex-col items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
              <div className="flex gap-3">
                <div className="flex flex-col items-center min-w-16">
                  <div className="flex h-10 w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                    <p className="text-slate-900 dark:text-white text-base font-bold">01</p>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mt-1 uppercase tracking-wider">Min</p>
                </div>
                <div className="flex items-center text-slate-400 font-bold">:</div>
                <div className="flex flex-col items-center min-w-16">
                  <div className="flex h-10 w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                    <p className="text-slate-900 dark:text-white text-base font-bold">59</p>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mt-1 uppercase tracking-wider">Sec</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">Didn&apos;t receive the code?</p>
                <button className="text-primary hover:text-primary/80 text-sm font-bold underline transition-colors">
                  Resend Code
                </button>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-xs">
              <span className="material-symbols-outlined text-sm">lock</span>
              <p>Secure 256-bit encrypted verification</p>
            </div>
          </div>
        </main>

        <footer className="py-6 text-center text-slate-400 text-sm">
          <p>© 2024 PayFlex Inc. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
