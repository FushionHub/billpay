"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type ServiceItem = {
  id: string;
  provider: string;
  type: string;
  name: string;
  price: string;
  icon: string;
};

export default function GiftCards() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch('/api/services');
        const data = await res.json();
        if (data.success) {
          setServices(data.services);
        }
      } catch (e) {
        console.error("Failed to load dynamic services", e);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
          <Link href="/" className="flex items-center gap-4 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
              <span className="material-symbols-outlined">card_giftcard</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">GiftNexus</h2>
          </Link>
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <label className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <span className="material-symbols-outlined text-xl">search</span>
              </span>
              <input className="w-full rounded-lg border-none bg-slate-100 dark:bg-slate-800 py-2.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-primary/50 placeholder:text-slate-500" placeholder="Search brands or categories..." type="text" />
            </label>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <Link href="/profile" className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">person</span>
            </Link>
            <button className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </header>

        <main className="flex-1 px-6 md:px-20 py-8">
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Featured Deals</h3>
              <Link className="text-sm font-semibold text-primary hover:underline" href="#">View all offers</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-xl bg-primary/10 p-1">
                <div className="relative h-48 w-full overflow-hidden rounded-lg bg-white dark:bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">10% OFF</div>
                  <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                      <img className="w-10 h-10 object-contain" alt="Amazon logo brand icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCEPFES0WUQf6rJn3WwGWg36EnQjoOGbzXeZylkhPik7TCMdOyl33BICmbYTrYwi-IOhql2gP1yJ1lf9qsnQk_p63T25adjOkYeN7jn9RNYYhsVridR1vA78Vu0obxGS6lQtdBbmYoOxZw2C0pYELeRWA9WKjmsH1pGkvjdzwD8xK_WqRRYIY0pfTI9hojT6RmJMmmYtMzJtP51odAXls2EdyX71zPZMOV5pcAFE6tRlRJu4DTualUUrPCbIyb3agZKc-OKh-8ionm" />
                    </div>
                    <h4 className="text-lg font-bold">Amazon Shopping</h4>
                    <p className="text-sm text-slate-500">Perfect for anything</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-orange-500/10 p-1">
                <div className="relative h-48 w-full overflow-hidden rounded-lg bg-white dark:bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">HOT</div>
                  <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                      <img className="w-10 h-10 object-contain" alt="Steam gaming platform logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9VI20j-bpb9O2bQU03jAKbUR3_5u7JZcAbGEeQkfvp90gdhAM5OiUzXkmGCvyP5m-RaBDYCMtyL6l7bEct2ETHwgL4B04bWI3i5LLo_GCZjw2QIiDFfMLX230UltteoBC14ah1vMUNkVFsHfPCU1EKCDtMvqp0wUAIGZi9m6mmzRff4dl3NsNOVvPAwYmLNp3xMVRw3AFQwaK0ny2fecJrLa2aqJrLahhTA1qKVm7NjdHmEe72db0pJcMG-CyJFBCjiPIRtOGPjQ5" />
                    </div>
                    <h4 className="text-lg font-bold">Steam Wallet</h4>
                    <p className="text-sm text-slate-500">Level up your library</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-purple-500/10 p-1">
                <div className="relative h-48 w-full overflow-hidden rounded-lg bg-white dark:bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 rounded-full bg-purple-500 px-3 py-1 text-xs font-bold text-white">NEW</div>
                  <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                      <img className="w-10 h-10 object-contain" alt="iTunes apple services logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTZNBPHER5esFvlLBkyAA_nYsUVFlRySx86wUKn0s81H7xa7NmBFgrvvXx_bK9b5gjxlOeh9c-xd8nruH0DVKDkDmGDR-cOPsM2PIiDRc-ExQBgk2aDyHT_aOHjN7etxi2KMzzz5la9Vd1iRWG6AZFk2ObK04mLf2QypxHQ52hNldmbGSS49EZUA-d_evA5uQo_UtcAw6k_To6-GGr7rtTqPgMWX7XDNENRAGkzWhpGmfIeqs5jWcWaMwGJhUI7RITuHyHIC_U3YmY" />
                    </div>
                    <h4 className="text-lg font-bold">Apple Gift Card</h4>
                    <p className="text-sm text-slate-500">Music, apps, and more</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-bold text-white">
                <span className="material-symbols-outlined text-lg">apps</span>
                All
              </button>
              <button className="flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-6 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-lg">bolt</span>
                Bills
              </button>
              <button className="flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-6 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-lg">phone_iphone</span>
                Airtime & Data
              </button>
              <button className="flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-6 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-lg">trending_up</span>
                Investments
              </button>
            </div>
          </section>

          <section>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold">Explore Marketplace & Services</h3>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>Sort by:</span>
                <select className="bg-transparent border-none focus:ring-0 font-bold text-slate-900 dark:text-slate-100 cursor-pointer">
                  <option>Popularity</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">Loading dynamic services...</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {/* Dynamically fetched services */}
                {services.map((service) => (
                  <Link href="/send/amount" key={service.id} className="flex flex-col group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center justify-center transition-all hover:shadow-xl hover:-translate-y-1">
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 mb-4 text-primary">
                        <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{service.type}</span>
                    </div>
                    <div className="mt-3">
                      <h5 className="font-bold truncate" title={service.name}>{service.name}</h5>
                      <p className="text-sm text-slate-500">{service.price}</p>
                    </div>
                  </Link>
                ))}

                {/* Legacy static gift cards */}
                {[
                  { name: 'Google Play', price: '$10 - $200', tag: 'Gaming', img: 'AB6AXuB0G7Jyhr5UnqCPK3SpLTlEGnA5eTtKujm5ls3KsVRDUbBoGKgLVeDHDfe_kfpV85zFTROlGj3tjJb54--Ds4hbvGE_-B_oSLvfJhwX22uglfEK-tpQacLZ9vMlBgBfovjAf8JKViZ0SgXMLhR5mcUumFeLVoUTAe0AMuOvO1-LLMkIU-Jj2XZXBTMMeO-TqUl0oGAoIDoILpycU0K73pMwD16oSpr-jCaleGCqk4MaGZaqVyveWc4tf7QawPh5yjwsl66uEOZMxdyo' },
                  { name: 'Netflix', price: '$15 - $100', tag: 'Lifestyle', img: 'AB6AXuB68xPWPvmt2ViABq1Rg5YvwzLBXl2Gig9RquYvI24Gro6Ze3OF8iykW05OTuQNjRPUTi2JsxDaNVXJkzGB2ayelZge1yPYZDVhs2Gvc5R8gRsYi0EDrOfeeBSk0XGUYuDscdLLwd4NqZ8TlOBdqLWJj51uUGhZbxUq0vi1dyelQGLtkozSbpCuWFjmpyR_D2q6_WVylHJNT3NqtNw3bVuJDIdfW4AJ9htkGBlSn_jPLQ6vNscFFrocsStuNvSp6BfILhAlrscmS1HM' },
                  { name: 'Spotify', price: '$10 - $60', tag: 'Lifestyle', img: 'AB6AXuDTcSuwjO7Ogw868zecEqQgG9-Qbqxs_KpBjzPJHxvboaQC2tjybAGm-MBtwJAwfujhLMwkvNcI31NTW_AW9oDfTlbEIPbdQocIlmywYqzZ7pCwCEp_72OSeAZketd2_wkjRHjsnqaIX0v7EqFAmA1tAx2YOeircR144ty0YMe32tKGpkGFk2Cl0ijO6qiLzLv-J2ILd1bHj96uDPnR0Rka8R6l_kIw0Ztq44VIAKwvcnG8ZBJ98i_wCIBde7WJLMRLAZpStbD5C4Rz' },
                  { name: 'Roblox', price: '$10 - $100', tag: 'Gaming', img: 'AB6AXuAKIQ_Aidi6orzoli-28eA0BmQcxKbd3H_QNY_4jeAhhtvQYaIvkbqTJU-5DhjbPO_rfLaA3Ro1XCJNCZKmob_BOE5u-QBleCZ7Qs-bJduDbgd7-JVQVFeOLN9BwuHXaHMI1L_zPvHFwPvA_wlrceDd4Hn7FJtGyxepiw9JN_7KT1AJX5Y2ZF6XQOJT-4SLmZymtb_BYBa-zatjH1HrvZvNfupZ1T6BF3LWggXXjJRz7II-HpUCR9Jl9vmYm2U5EN59_cFOAy03EG4g' },
                  { name: 'Starbucks', price: '$5 - $100', tag: 'Dining', img: 'AB6AXuD8_EBYgGbr3R1z6djPfCZ6rdarf1Ge8HkeAZY7A96OZc_reGRikS_i586pk7y7RvJ80vJVaAZjIyTyRXu0EC78qUSmcJ1PA8f_XoqaxGzZkpuEuPM2Lmz_P2teT9aWI9gmiEGbRfgRkCsjVYw8Dmgz6Rz4uncqNmkuiHBeySd9yoeqy7Jwtd9tcnexsPMqO04XP2xAvcfcd-JuDYDbbaJz0KCwI0_px8DDbG78bqfi-O_MB-rdM8VJP_PS-04pZ-4LwH5dHvppj3Tl' }
                ].map((card, i) => (
                  <Link href="/send/amount" key={i} className="flex flex-col group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center justify-center transition-all hover:shadow-xl hover:-translate-y-1">
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
                      <img className="w-16 h-16 object-contain mb-4" alt={`${card.name} brand`} src={`https://lh3.googleusercontent.com/aida-public/${card.img}`} />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{card.tag}</span>
                    </div>
                    <div className="mt-3">
                      <h5 className="font-bold truncate">{card.name}</h5>
                      <p className="text-sm text-slate-500">{card.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-12 flex justify-center">
              <button className="rounded-lg border border-slate-200 dark:border-slate-800 px-8 py-3 text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Load More Brands
              </button>
            </div>
          </section>
        </main>

        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex justify-around items-center z-50">
          <Link href="/" className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold">Home</span>
          </Link>
          <Link href="/giftcards" className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined">grid_view</span>
            <span className="text-[10px] font-bold">Browse</span>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">account_balance_wallet</span>
            <span className="text-[10px] font-bold">Wallet</span>
          </Link>
          <Link href="/settings" className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-bold">Account</span>
          </Link>
        </div>

        <footer className="mt-12 bg-slate-100 dark:bg-slate-900/50 px-6 md:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                  <span className="material-symbols-outlined text-sm">card_giftcard</span>
                </div>
                <h2 className="text-lg font-bold">GiftNexus</h2>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">The ultimate destination for digital gift cards. Safe, secure, and instant delivery every time.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Marketplace</h4>
              <ul className="text-sm text-slate-500 space-y-2">
                <li><Link className="hover:text-primary transition-colors" href="#">Best Sellers</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Gift Card Deals</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">New Brands</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Promotions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="text-sm text-slate-500 space-y-2">
                <li><Link className="hover:text-primary transition-colors" href="#">Help Center</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Redeem Guide</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Contact Us</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-sm text-slate-500 mb-4">Get the latest deals in your inbox.</p>
              <div className="flex gap-2">
                <input className="flex-1 rounded-lg border-none bg-white dark:bg-slate-800 px-3 py-2 text-sm focus:ring-1 focus:ring-primary" placeholder="Email address" type="email" />
                <button className="bg-primary px-4 py-2 rounded-lg text-white font-bold text-sm">Join</button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">© 2024 GiftNexus Marketplace. All rights reserved.</p>
            <div className="flex gap-6">
              <Link className="text-xs text-slate-400 hover:text-primary" href="#">Privacy Policy</Link>
              <Link className="text-xs text-slate-400 hover:text-primary" href="#">Terms of Service</Link>
              <Link className="text-xs text-slate-400 hover:text-primary" href="#">Cookie Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
