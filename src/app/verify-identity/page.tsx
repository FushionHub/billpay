import Link from "next/link";

export default function VerifyIdentity() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-primary/10 px-6 py-4 lg:px-40 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">PayFlex</h2>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/verify-otp" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              Back
            </Link>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">help</span>
            </button>
          </div>
        </header>

        <main className="flex flex-1 justify-center py-8 px-4 lg:px-0">
          <div className="w-full max-w-[800px] space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Verify your identity</h1>
              <p className="text-slate-500 dark:text-slate-400">Please upload a valid government-issued document to complete your KYC and unlock all features.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-semibold mb-2 block">Issuing Country</span>
                  <div className="relative">
                    <select className="form-select w-full rounded-lg border-primary/20 bg-background-light dark:bg-background-dark py-3 pl-4 pr-10 focus:border-primary focus:ring-primary/20 transition-all appearance-none" defaultValue="us">
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="de">Germany</option>
                      <option value="fr">France</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-slate-400">expand_more</span>
                  </div>
                </label>

                <div className="space-y-3">
                  <span className="text-sm font-semibold block">Document Type</span>

                  <label className="flex items-center justify-between p-4 rounded-lg border-2 border-primary bg-primary/5 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">travel</span>
                      <div>
                        <p className="font-medium">Passport</p>
                        <p className="text-xs text-slate-500">Global travel document</p>
                      </div>
                    </div>
                    <input defaultChecked className="w-5 h-5 text-primary border-primary/30 focus:ring-primary/20" name="doc_type" type="radio" />
                  </label>

                  <label className="flex items-center justify-between p-4 rounded-lg border-2 border-transparent bg-background-light dark:bg-background-dark hover:border-primary/30 cursor-pointer transition-all">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-500">badge</span>
                      <div>
                        <p className="font-medium">ID Card</p>
                        <p className="text-xs text-slate-500">National identity card</p>
                      </div>
                    </div>
                    <input className="w-5 h-5 text-primary border-primary/30 focus:ring-primary/20" name="doc_type" type="radio" />
                  </label>

                  <label className="flex items-center justify-between p-4 rounded-lg border-2 border-transparent bg-background-light dark:bg-background-dark hover:border-primary/30 cursor-pointer transition-all">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-500">drive_eta</span>
                      <div>
                        <p className="font-medium">Driver&apos;s License</p>
                        <p className="text-xs text-slate-500">State-issued permit</p>
                      </div>
                    </div>
                    <input className="w-5 h-5 text-primary border-primary/30 focus:ring-primary/20" name="doc_type" type="radio" />
                  </label>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 flex flex-col justify-center">
                <h3 className="text-primary font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">info</span>
                  Upload Requirements
                </h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex gap-2">
                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                    Ensure all 4 corners are visible
                  </li>
                  <li className="flex gap-2">
                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                    Information must be clear and readable
                  </li>
                  <li className="flex gap-2">
                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                    Document must be valid (not expired)
                  </li>
                  <li className="flex gap-2">
                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                    File format: JPEG, PNG or PDF (Max 10MB)
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold">Document Photos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group relative flex flex-col items-center justify-center border-2 border-dashed border-primary/20 rounded-xl p-10 bg-white dark:bg-slate-900 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                  <div className="mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">Front Side</p>
                    <p className="text-sm text-slate-400">Drag & drop or click to upload</p>
                  </div>
                  <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                </div>

                <div className="group relative flex flex-col items-center justify-center border-2 border-dashed border-primary/20 rounded-xl p-10 bg-white dark:bg-slate-900 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                  <div className="mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">Back Side</p>
                    <p className="text-sm text-slate-400">Drag & drop or click to upload</p>
                  </div>
                  <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/" className="flex flex-1 bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 justify-center">
                Submit for Verification
              </Link>
              <Link href="/login" className="px-8 py-4 text-slate-500 dark:text-slate-400 font-semibold hover:text-primary transition-colors text-center">
                Cancel
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs py-8">
              <span className="material-symbols-outlined text-sm">lock</span>
              Your data is encrypted and processed securely. We never share your personal documents.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
