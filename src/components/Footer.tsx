"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Footer({ dict }: { dict: any }) {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const { lang } = useParams();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-black border-t border-zinc-900 pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <Link href={`/${lang}`} className="flex items-center space-x-2 mb-8 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">n</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Skyline<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-[15px] font-medium leading-relaxed">
              {dict.footer.description}
            </p>
          </div>
          
          <nav>
            <h5 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">{dict.footer.platform}</h5>
            <ul className="space-y-5 text-[15px] font-medium text-zinc-500">
              <li><Link href="#features" className="hover:text-primary transition-colors">{dict.navbar.platform}</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">{dict.navbar.pricing}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Integrations</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Templates</Link></li>
            </ul>
          </nav>
          
          <nav>
            <h5 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">{dict.footer.developer}</h5>
            <ul className="space-y-5 text-[15px] font-medium text-zinc-500">
              <li><Link href="#" className="hover:text-primary transition-colors">{dict.navbar.docs}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Self-hosting</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Node Creator</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">GitHub</Link></li>
            </ul>
          </nav>
          
          <div role="contentinfo" aria-label="Social media links">
            <h5 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">{dict.footer.connect}</h5>
            <div className="flex space-x-5">
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-zinc-500 text-sm font-medium">
            &copy; {currentYear || '2026'} SkylineAI. {dict.footer.rights}
          </p>
          <div className="flex space-x-10 text-sm font-medium text-zinc-500">
            <Link href="#" className="hover:text-primary transition-colors">{dict.footer.privacy}</Link>
            <Link href="#" className="hover:text-primary transition-colors">{dict.footer.terms}</Link>
            <Link href="#" className="hover:text-primary transition-colors">{dict.footer.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
