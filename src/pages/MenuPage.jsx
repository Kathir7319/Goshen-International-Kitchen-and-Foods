import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

export default function MenuPage() {
  const [selectedCat, setSelectedCat] = useState('all');

  const filtered = selectedCat === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === selectedCat);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-10">
      
      {/* Intro Header from Blueprint */}
      <div className="text-center space-y-2.5 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
          Complete Menu Architecture
        </span>
        <h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
          Cross-Continental Culinary Selections
        </h1>
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
          Every recipe tells a distinct story. Use the tabs below to explore our cross-continental culinary selections. Available for dine-in, streamlined takeout, or swift neighborhood delivery.
        </p>
      </div>

      {/* Category Tabs: Mobile Swipe Friendly */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 sm:justify-center sm:flex-wrap no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {MENU_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
              selectedCat === cat.id
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Dish Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-2xs flex flex-col sm:flex-row gap-4 items-start"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full sm:w-28 h-44 sm:h-28 object-cover rounded-xl shrink-0"
              loading="lazy"
            />
            <div className="flex-1 space-y-1.5 w-full">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif-display font-bold text-base text-stone-900 leading-snug">
                  {item.name}
                </h3>
                <span className="text-sm font-bold text-orange-600 shrink-0">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                {item.description}
              </p>
              {item.tags && (
                <div className="pt-1 flex flex-wrap gap-1">
                  {item.tags.map(t => (
                    <span key={t} className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Order Bar */}
      <div className="bg-amber-50 rounded-2xl p-5 sm:p-6 border border-amber-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-serif-display font-bold text-stone-900 text-base">
            Ready to order for dine-in or pickup?
          </h4>
          <p className="text-stone-600 text-xs">
            Call our kitchen directly at 4000 Bear Cat Way, Ste 104, Morrisville, NC.
          </p>
        </div>
        <a
          href="tel:9195592586"
          className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-3 px-5 rounded-xl transition-colors shrink-0 shadow-xs"
        >
          <Phone className="w-4 h-4" />
          <span>Call: (919) 559-2586</span>
        </a>
      </div>

    </div>
  );
}
