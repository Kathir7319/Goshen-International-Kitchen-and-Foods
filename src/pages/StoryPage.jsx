import React from 'react';
import { Sun, Accessibility, Heart } from 'lucide-react';

export default function StoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-12">
      
      {/* Title */}
      <div className="text-center space-y-2.5">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
          Our Story & Hospitality Mission
        </span>
        <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
          Bringing the World's Best Comfort Food to Morrisville.
        </h1>
      </div>

      {/* Featured Photo */}
      <div className="rounded-2xl overflow-hidden shadow-sm border border-stone-200">
        <img
          src="/images/goshen-interior.jpg"
          alt="Goshen International Kitchen Dining Room"
          className="w-full h-56 sm:h-80 md:h-96 object-cover"
          loading="lazy"
        />
      </div>

      {/* Narrative Story Cards */}
      <div className="bg-white rounded-2xl p-5 sm:p-10 border border-stone-200 space-y-5 sm:space-y-6 text-stone-700 text-xs sm:text-base leading-relaxed">
        
        {/* Goshen Meaning Callout */}
        <div className="bg-amber-50 rounded-xl p-4 sm:p-5 border border-amber-200 flex items-start gap-3">
          <Sun className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-stone-800 text-xs sm:text-sm">
            <strong>The Meaning of Goshen:</strong> The word 'Goshen' historically symbolizes a <em>land of plenty, comfort, and light</em>—and that is exactly the atmosphere we strive to cultivate the moment you cross our threshold.
          </p>
        </div>

        {/* Story Text verbatim from Blueprint */}
        <p>
          Goshen International Kitchen and Foods was born from a singular, powerful vision: creating an open-table environment where people of all geographic backgrounds could gather over authentic, uncompromised comfort foods. The word 'Goshen' historically symbolizes a land of plenty, comfort, and light—and that is exactly the atmosphere we strive to cultivate the moment you cross our threshold.
        </p>

        <p>
          What began as a passion project to introduce authentic West African pastries (like our highly praised Naija Buns) and complex traditional stews to North Carolina has blossomed into a multi-faceted food-court destination. We understood early on that a true community hub must cater to all rhythms of life. That is why we balanced our menu, ensuring a busy professional can grab a classic hot lunch or a customizable morning egg plate, while international food lovers can indulge in deeply layered native soups.
        </p>

        <p>
          Accessibility and community are woven directly into our architecture. We intentionally established our physical space to feature completely wheelchair-friendly walkways, vast parking structures, and wide, configurable seating areas. We don't just feed body; we support local groups, celebrate distinct cultures, and serve every plate with an uncompromising standard of warmth.
        </p>

        {/* 3 Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-stone-100">
          <div className="space-y-1 bg-stone-50 p-3.5 rounded-xl border border-stone-100">
            <span className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Land of Plenty</span>
            </span>
            <p className="text-xs text-stone-500">Nourishing ingredients and generous portions.</p>
          </div>
          <div className="space-y-1 bg-stone-50 p-3.5 rounded-xl border border-stone-100">
            <span className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
              <Accessibility className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero Stairs</span>
            </span>
            <p className="text-xs text-stone-500">100% wheelchair-accessible walkways and entry.</p>
          </div>
          <div className="space-y-1 bg-stone-50 p-3.5 rounded-xl border border-stone-100">
            <span className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-red-600 shrink-0" />
              <span>True Hospitality</span>
            </span>
            <p className="text-xs text-stone-500">Welcoming every guest as family.</p>
          </div>
        </div>

      </div>

    </div>
  );
}
