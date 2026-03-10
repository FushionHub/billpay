import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function Settings() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <div className="mx-auto w-full max-w-[1200px] flex flex-1">
            <Sidebar />

            <main className="flex-1 flex flex-col min-w-0">
              <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-10">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold">Settings</h1>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                  </button>
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">search</span>
                  </button>
                </div>
              </header>

              <div className="flex-1 p-6 space-y-8 max-w-4xl">
                <section>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">General Preferences</h3>
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
                    <div className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">language</span>
                        </div>
                        <div>
                          <p className="font-medium">Language & Region</p>
                          <p className="text-xs text-slate-500">English (US), USD ($)</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>

                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined">dark_mode</span>
                        </div>
                        <div>
                          <p className="font-medium">Dark Mode</p>
                          <p className="text-xs text-slate-500">Switch between light and dark themes</p>
                        </div>
                      </div>
                      <label className="relative flex h-[28px] w-[50px] cursor-pointer items-center rounded-full border-none bg-slate-200 dark:bg-slate-700 p-1 transition-colors has-[:checked]:bg-primary">
                        <div className="h-5 w-5 rounded-full bg-white shadow-md transform transition-transform translate-x-0 peer-checked:translate-x-full"></div>
                        <input defaultChecked className="invisible absolute peer" type="checkbox" />
                      </label>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Notifications</h3>
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                          <span className="material-symbols-outlined">notifications_active</span>
                        </div>
                        <p className="font-medium">Push Notifications</p>
                      </div>
                      <label className="relative flex h-[28px] w-[50px] cursor-pointer items-center rounded-full border-none bg-slate-200 dark:bg-slate-700 p-1 has-[:checked]:bg-primary">
                        <div className="h-5 w-5 rounded-full bg-white shadow-md"></div>
                        <input defaultChecked className="invisible absolute peer" type="checkbox" />
                      </label>
                    </div>

                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                          <span className="material-symbols-outlined">mail</span>
                        </div>
                        <p className="font-medium">Email Alerts</p>
                      </div>
                      <label className="relative flex h-[28px] w-[50px] cursor-pointer items-center rounded-full border-none bg-slate-200 dark:bg-slate-700 p-1 has-[:checked]:bg-primary">
                        <div className="h-5 w-5 rounded-full bg-white shadow-md"></div>
                        <input className="invisible absolute peer" type="checkbox" />
                      </label>
                    </div>

                    <div className="p-4 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                          <span className="material-symbols-outlined">sms</span>
                        </div>
                        <p className="font-medium">SMS Notifications</p>
                      </div>
                      <label className="relative flex h-[28px] w-[50px] cursor-pointer items-center rounded-full border-none bg-slate-200 dark:bg-slate-700 p-1 has-[:checked]:bg-primary">
                        <div className="h-5 w-5 rounded-full bg-white shadow-md"></div>
                        <input defaultChecked className="invisible absolute peer" type="checkbox" />
                      </label>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Privacy & Security</h3>
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
                    <div className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-red-50 dark:bg-red-900/30 flex items-center justify-center text-red-600">
                          <span className="material-symbols-outlined">lock</span>
                        </div>
                        <div>
                          <p className="font-medium">Two-Factor Authentication</p>
                          <p className="text-xs text-slate-500">Secure your account with 2FA</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">Enabled</span>
                    </div>

                    <div className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600">
                          <span className="material-symbols-outlined">visibility_off</span>
                        </div>
                        <div>
                          <p className="font-medium">Privacy Settings</p>
                          <p className="text-xs text-slate-500">Manage who can see your activity</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Help & Support</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center gap-4 hover:border-primary transition-colors cursor-pointer group">
                      <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <span className="material-symbols-outlined">help</span>
                      </div>
                      <div>
                        <p className="font-bold">Help Center</p>
                        <p className="text-xs text-slate-500">FAQs and documentation</p>
                      </div>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center gap-4 hover:border-primary transition-colors cursor-pointer group">
                      <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <span className="material-symbols-outlined">chat_bubble</span>
                      </div>
                      <div>
                        <p className="font-bold">Contact Support</p>
                        <p className="text-xs text-slate-500">24/7 Live chat support</p>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="pt-10 flex flex-col items-center gap-4">
                  <button className="w-full max-w-sm py-3 px-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                    Save All Changes
                  </button>
                  <Link href="/login" className="text-red-600 font-medium hover:underline">
                    Log out of PayFlex
                  </Link>
                  <p className="text-xs text-slate-500">Version 2.4.1 (Build 890)</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
