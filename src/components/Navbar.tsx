"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-zinc-100 py-3 shadow-sm dark:bg-brand-black/90 dark:border-zinc-800"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg">n</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-black dark:text-white">
            Skyline<span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#features" className="text-[15px] font-medium text-zinc-600 hover:text-primary transition-colors dark:text-zinc-400 dark:hover:text-primary">
            Platform
          </Link>
          <Link href="#pricing" className="text-[15px] font-medium text-zinc-600 hover:text-primary transition-colors dark:text-zinc-400 dark:hover:text-primary">
            Pricing
          </Link>
          <Link href="#about" className="text-[15px] font-medium text-zinc-600 hover:text-primary transition-colors dark:text-zinc-400 dark:hover:text-primary">
            Docs
          </Link>
          <div className="flex items-center space-x-4 ml-6">
            <Link href="#login" className="text-[15px] font-semibold text-brand-black hover:text-primary transition-colors dark:text-white">
              Log in
            </Link>
            <Link
              href="#get-started"
              className="px-6 py-2.5 bg-brand-black text-white text-sm font-bold rounded-full hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg dark:bg-white dark:text-brand-black dark:hover:bg-zinc-100"
            >
              Sign up free
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-brand-black dark:text-white"
          aria-label="Open navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
