"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8 dark:bg-indigo-500/10 dark:border-indigo-500/20">
            <span className="flex w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-600 tracking-wide uppercase">New Version 2.0 is live</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 dark:text-white">
            Scale your business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Intelligent AI</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-zinc-600 mb-10 leading-relaxed max-w-2xl mx-auto dark:text-zinc-400">
            Automate your workflow, gain deep insights, and reach more customers with SkylineAI. The all-in-one platform built for modern enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="#get-started"
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Your Free Trial
            </Link>
            <Link
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 font-bold rounded-2xl border border-zinc-200 hover:bg-zinc-50 transition-all dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:bg-zinc-800"
            >
              Watch Demo
            </Link>
          </div>

          <div className="mt-16 pt-16 border-t border-zinc-100 dark:border-zinc-800">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50 grayscale">
              {['TechCorp', 'Stellar', 'NexGen', 'Quantum', 'Cloudly'].map((brand) => (
                <span key={brand} className="text-xl font-bold text-zinc-900 dark:text-white">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
