"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-brand-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(#101330 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-100 mb-10 dark:bg-zinc-900/50 dark:border-zinc-800">
            <span className="flex w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold text-brand-black tracking-wide uppercase dark:text-zinc-300">New: Multi-node Workflow Engine</span>
          </div>
          
          <h1 className="text-5xl lg:text-[84px] font-extrabold tracking-tight text-brand-black mb-8 leading-[1.1] dark:text-white">
            Automate without <br className="hidden md:block" />
            <span className="text-primary font-black">limits</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-zinc-600 mb-12 leading-relaxed max-w-3xl mx-auto dark:text-zinc-400">
            Design powerful AI workflows in minutes. SkylineAI combines the flexibility of code with the speed of low-code.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="#get-started"
              className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-[#d43d63] transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] text-lg"
            >
              Get started for free
            </Link>
            <Link
              href="#demo"
              className="w-full sm:w-auto px-10 py-4 bg-white text-secondary font-bold rounded-full border-2 border-secondary hover:bg-secondary hover:text-white transition-all dark:bg-transparent dark:text-zinc-300 dark:border-zinc-700 dark:hover:border-primary dark:hover:text-primary text-lg"
            >
              Book a demo
            </Link>
          </div>

          <div className="mt-24 pt-16 border-t border-zinc-100 dark:border-zinc-800">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-10">Powering workflows at</p>
            <div 
              className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale contrast-125"
              aria-label="Companies using SkylineAI"
            >
              {['Discord', 'Zapier', 'PostHog', 'Retool', 'Vercel'].map((brand) => (
                <span key={brand} className="text-2xl font-black text-brand-black dark:text-white tracking-tight">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
