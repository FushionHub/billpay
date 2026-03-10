import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function SendMoney() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col pb-16 md:pb-0">
        <Header />
        <main className="flex flex-1 flex-col lg:flex-row px-4 md:px-10 lg:px-40 py-8 gap-8">
          <Sidebar />
          <div className="flex-1 max-w-3xl">
            <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
              <div className="flex flex-col gap-1">
                <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">Send Money</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Step 1: Select Recipient</p>
              </div>
              <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined mr-2 text-sm">help_outline</span>
                Help
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-6">
                <div className="relative mb-8">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary text-base" placeholder="Search name, email, or phone" type="text" />
                </div>

                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Recent Recipients</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { name: "Sarah Jenkins", img: "AB6AXuBO64AANIKjMt1lBfdZ6LzV562LUvP1yDP6fMOkj38jA633R9KXpaAwcgDKw_Sydms3DwQQHyBY21_QktzmhPDPU2gI7h_B2wuudMV1jBGKYlmNv15j4GMN69GdIBNSzKQu7bVZAHAq_I5jjHcCFZtXmX6MuBZrVdqHL6g6aMtiGnMR-ApiRuN0nwNE3oC3TrytOQBq4xuYSK7INpcTIGly44i0faaNwhaNIuA3LM8XKAkENn57GR9zOakYA05EsbklDWjLZeOuCGP8" },
                        { name: "Alex Rivera", img: "AB6AXuCB_CEihqjgJI7ne2nLMY8cXVKUSovODarObUodi6b8rCCXieA_rrCBjwf77gvuv8E8pXY9LgzxIpcFV25FlEIjRbkaY6ZkyORkDre1Tb9vOLrEN3hb9uPAc0GoQuhSxu5IbK6TbJbR2ntoZdGI-TG6dikxLCrihAcGPF2INMI2i6RXkvp_3XCyuXRZ5XDGw5rTL9xGndLkz1mXmQxdV9KfFzwCAK1tGVyhSa57i2VhLZcflcM487yBw-gc3rvsFMzh458a6n9DGOL2" },
                        { name: "Jordan Lee", img: "AB6AXuBx_KhnRG5fuyob3Xs71_KZaMdPnF4hUBEFBDPlmB5Nh4QWnOJk3ND-jGbX5Um5fofhjpwolC1gAL7CivyUOW337cmEonEo7Pf-efN3nx9sn1VNVvdmOoFViDsGGsuokLIh7DFGNUpjIWyhsPYhyohjMC8CrYjKjIG9Om4XMhM3Z7k5KJNEyncIaUfxXNJguIlCN7aWj71kP4I0wiAlCXOaqwxIC8odeWd4LmtpfMUPNUHC6wqTVUSbkUhy1sj05C5vJBzX5BERQpZH" },
                        { name: "Maria Garcia", img: "AB6AXuAkGelFermLlk1RwsBosYmV4Py57BqPtAyeZTabWiZOaq3t441Aer0r-83YkpT0C6DMLq9X4TqnTCfaHnOxxePdOKqRApdegYFmHGppz9s8fvkyVtLz4Ln0FCIe9-r7OvUaTFnMPHnjhcwAg9TZiVHkNF-oKYZMbBQu4bEVf2E_NMjrYJhZHEJp-oBLxxik7OXoy69VWeVNx_xAKVgCg-Xllee6YpC1tbFfMXyrfBLjD-btgSf5ty7kxPbzV_8X5wbg9so1V7DcUwm5" }
                      ].map((rec, i) => (
                        <Link href="/send/amount" key={i} className="flex flex-col items-center gap-3 p-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 cursor-pointer transition-all">
                          <div className="size-16 rounded-full bg-center bg-cover border-2 border-white dark:border-slate-800 shadow-sm" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/${rec.img}')` }}></div>
                          <p className="text-sm font-semibold text-center text-slate-800 dark:text-slate-200">{rec.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Actions</h3>
                    <button className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-primary hover:bg-primary/5 transition-all group">
                      <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">person_add</span>
                      </div>
                      <div className="flex flex-col text-left">
                        <p className="text-base font-semibold text-slate-900 dark:text-white">Add New Recipient</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Enter a new name, email or phone number</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <Link href="/send/amount" className="px-8 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Continue
                </Link>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Secure Transfers</h4>
                  <p className="text-xs text-slate-500">Bank-level encryption for every transaction.</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-lg">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Instant Delivery</h4>
                  <p className="text-xs text-slate-500">Funds usually arrive within minutes.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
