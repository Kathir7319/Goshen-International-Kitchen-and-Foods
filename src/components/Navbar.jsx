import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/story' },
    { name: 'Catering & Events', path: '/catering' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Cute Logo & Brand */}
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="relative shrink-0">
              <img
                src="/logo.svg"
                alt="Goshen Kitchen & Foods Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300 drop-shadow-xs"
              />
            </div>
            <div className="min-w-0">
              <span className="font-serif-display text-lg sm:text-xl font-bold tracking-tight text-stone-900 group-hover:text-orange-600 transition-colors block truncate">
                Goshen <span className="text-orange-600 font-sans text-sm sm:text-base font-normal">Kitchen & Foods</span>
              </span>
              <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium tracking-wide truncate">
                Morrisville, NC • A World of Flavors
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-orange-600 bg-orange-50 font-bold'
                      : 'text-stone-700 hover:text-orange-600 hover:bg-stone-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:9195592586"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-orange-600 text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>(919) 559-2586</span>
            </a>
          </div>

          {/* Mobile Right Controls: Quick Call & Hamburger */}
          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href="tel:9195592586"
              className="p-2 text-stone-700 hover:text-orange-600 rounded-lg hover:bg-stone-100 flex items-center justify-center cursor-pointer"
              aria-label="Call Kitchen"
              title="Call (919) 559-2586"
            >
              <Phone className="w-5 h-5 text-orange-600" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-700 hover:text-orange-600 rounded-lg hover:bg-stone-100 cursor-pointer flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-1.5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? 'text-orange-600 bg-orange-50 font-bold'
                    : 'text-stone-700 hover:bg-stone-50 active:bg-stone-100'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-stone-100">
            <a
              href="tel:9195592586"
              className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-xl text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 text-amber-200" />
              <span>Call to Order: (919) 559-2586</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
