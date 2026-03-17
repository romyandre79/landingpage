"use client";

import Link from "next/link";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
      {/* Background Polish */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#101330 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-black tracking-widest uppercase mb-10 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>{dict.hero.badge}</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-white mb-10 tracking-tight leading-[0.9]">
            {dict.hero.title} <span className="text-primary italic font-serif lowercase pr-4">{dict.hero.highlight}</span>
          </h1>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            {dict.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-black rounded-2xl hover:bg-[#d43d63] transition-all shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95">
              {dict.hero.cta_primary}
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white font-black rounded-2xl border border-zinc-800 hover:bg-zinc-800 transition-all">
              {dict.hero.cta_secondary}
            </button>
          </div>

          <div className="mt-24 pt-16 border-t border-zinc-800">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-10">{dict.hero.trusted_by}</p>
            <div 
              className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale contrast-125"
              aria-label="Companies using SkylineAI"
            >
              {['Discord', 'Zapier', 'PostHog', 'Retool', 'Vercel'].map((brand) => (
                <span key={brand} className="text-2xl font-black text-white tracking-tight">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
