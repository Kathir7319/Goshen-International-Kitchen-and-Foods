import React from 'react';
import { Link } from 'react-router-dom';
import { Accessibility } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 border-t border-stone-800 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6 sm:space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-stone-800 pb-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Goshen Kitchen Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 shrink-0"
            />
            <div>
              <span className="font-serif-display text-base font-bold text-white">
                Goshen International Kitchen and Foods
              </span>
              <p className="text-[11px] text-stone-500">4000 Bear Cat Way, Ste 104, Morrisville, NC 27560</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold pt-1 md:pt-0">
            <Link to="/" className="text-stone-300 hover:text-white py-1">Home</Link>
            <Link to="/menu" className="text-stone-300 hover:text-white py-1">Menu</Link>
            <Link to="/story" className="text-stone-300 hover:text-white py-1">Our Story</Link>
            <Link to="/catering" className="text-stone-300 hover:text-white py-1">Catering</Link>
            <Link to="/contact" className="text-stone-300 hover:text-white py-1">Contact</Link>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-stone-500 text-[11px]">
          <p>© 2026 Goshen International Kitchen and Foods. All content copy rights reserved.</p>
          <div className="flex items-center gap-1.5 text-stone-400">
            <Accessibility className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Wheelchair-accessible food court venue • Zero stairs</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
