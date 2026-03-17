"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";

export default function Navbar({ dict }: { dict: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang } = useParams();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'id' : 'en';
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`);
    window.location.href = newPathname;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-zinc-800/50 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center space-x-2 group">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg">n</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Skyline<span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#features" className="text-[15px] font-medium text-zinc-400 hover:text-primary transition-colors">
            {dict.navbar.platform}
          </Link>
          <Link href="#pricing" className="text-[15px] font-medium text-zinc-400 hover:text-primary transition-colors">
            {dict.navbar.pricing}
          </Link>
          <Link href="#about" className="text-[15px] font-medium text-zinc-400 hover:text-primary transition-colors">
            {dict.navbar.docs}
          </Link>
          <div className="flex items-center space-x-4 ml-6">
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-md border border-zinc-800 text-xs font-bold text-zinc-400 hover:border-primary hover:text-primary transition-all uppercase"
            >
              {lang}
            </button>
            <Link href="#login" className="text-[15px] font-semibold text-white hover:text-primary transition-colors">
              {dict.navbar.login}
            </Link>
            <Link
              href="#get-started"
              className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-100 transition-all shadow-md hover:shadow-lg"
            >
              {dict.navbar.signup}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white"
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
