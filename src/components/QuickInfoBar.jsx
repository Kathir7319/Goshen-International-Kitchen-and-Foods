import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { getStoreStatus } from '../utils/hoursHelper';

export default function QuickInfoBar() {
  const [status] = useState(getStoreStatus());

  return (
    <div className="bg-stone-900 text-stone-300 text-xs py-2 px-3 sm:px-4 border-b border-stone-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        
        {/* Address with Map Link */}
        <div className="flex items-center gap-1.5 min-w-0">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate text-[11px] sm:text-xs">
            4000 Bear Cat Way, Ste 104, Morrisville, NC
          </span>
          <a
            href="https://share.google/24AaEKdONjLmrta51"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-0.5 shrink-0 ml-0.5 text-[10px] sm:text-xs"
            title="Open in Google Maps"
          >
            <span>Map</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Schedule & Phone */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 text-stone-400">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Mon–Thu 7AM–6PM | Fri 11:30AM–3PM</span>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${status.isOpen ? 'bg-emerald-900/80 text-emerald-300' : 'bg-stone-800 text-stone-400'}`}>
              {status.isOpen ? 'Open' : 'Closed'}
            </span>
          </div>

          <a
            href="tel:9195592586"
            className="font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 text-[11px] sm:text-xs bg-stone-800/80 hover:bg-stone-800 px-2 py-1 rounded-md border border-stone-700/60"
          >
            <Phone className="w-3 h-3 text-amber-400 shrink-0" />
            <span>(919) 559-2586</span>
          </a>
        </div>

      </div>
    </div>
  );
}
