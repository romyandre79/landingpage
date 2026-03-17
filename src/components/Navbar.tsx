"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3 shadow-sm dark:bg-zinc-950/80 dark:border-zinc-800"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Skyline<span className="text-indigo-600">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors dark:text-zinc-400 dark:hover:text-indigo-400">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors dark:text-zinc-400 dark:hover:text-indigo-400">
            Pricing
          </Link>
          <Link href="#about" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors dark:text-zinc-400 dark:hover:text-indigo-400">
            About
          </Link>
          <Link
            href="#get-started"
            className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-zinc-600 dark:text-zinc-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
