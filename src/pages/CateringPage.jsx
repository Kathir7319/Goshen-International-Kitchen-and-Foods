import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CATERING_MODALITIES } from '../data/cateringData';

export default function CateringPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    modality: 'Office & Corporate Lunches',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-12">
      
      {/* Header from Blueprint */}
      <div className="text-center space-y-2.5 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
          Catering & Group Events
        </span>
        <h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
          Elevate Your Next Event with Goshen's Global Flavors.
        </h1>
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
          No matter the size of your gathering, Goshen International Kitchen and Foods brings professional catering expertise and vibrant culinary spreads directly to you. From corporate luncheons within the Research Triangle Park (RTP) area to family reunions, religious milestone celebrations, and intimate home gatherings, our tailored menus leave a lasting impression.
        </p>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden shadow-sm border border-stone-200">
        <img
          src="/images/catering-spread.jpg"
          alt="Goshen Catering Buffet"
          className="w-full h-52 sm:h-72 md:h-80 object-cover"
          loading="lazy"
        />
      </div>

      {/* 3 Modalities Cards from Blueprint */}
      <div className="space-y-4">
        <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-stone-900 text-center">
          Our Catering Modalities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {CATERING_MODALITIES.map((mod) => (
            <div key={mod.id} className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-2xs space-y-2.5">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md inline-block">
                {mod.tag}
              </span>
              <h3 className="font-serif-display font-bold text-base sm:text-lg text-stone-900">
                {mod.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {mod.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Catering Request Form */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-stone-200 shadow-sm max-w-xl mx-auto space-y-5">
        <div className="text-center space-y-1">
          <h3 className="font-serif-display text-lg sm:text-xl font-bold text-stone-900">
            Request Catering Availability
          </h3>
          <p className="text-xs text-stone-500">
            Tell us about your upcoming date or call our kitchen at (919) 559-2586.
          </p>
        </div>

        {formSubmitted ? (
          <div className="bg-emerald-50 rounded-xl p-5 sm:p-6 text-center border border-emerald-200 space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-emerald-950 text-sm">Request Submitted!</h4>
            <p className="text-xs text-emerald-800">
              Thank you, {formData.fullName}. We will review your event date and get back to you promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full p-3 rounded-xl border border-stone-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full p-3 rounded-xl border border-stone-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(919) 000-0000"
                  className="w-full p-3 rounded-xl border border-stone-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Event Date *</label>
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={e => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full p-3 rounded-xl border border-stone-200 bg-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Guest Count *</label>
                <input
                  type="number"
                  min="5"
                  required
                  value={formData.guestCount}
                  onChange={e => setFormData({ ...formData, guestCount: e.target.value })}
                  placeholder="e.g. 25"
                  className="w-full p-3 rounded-xl border border-stone-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Catering Modality</label>
              <select
                value={formData.modality}
                onChange={e => setFormData({ ...formData, modality: e.target.value })}
                className="w-full p-3 rounded-xl border border-stone-200 bg-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="Office & Corporate Lunches">Office & Corporate Lunches</option>
                <option value="Cultural & Festive Celebrations">Cultural & Festive Celebrations</option>
                <option value="Custom Buffet Configurations">Custom Buffet Configurations</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Event Details / Dietary Needs</label>
              <textarea
                rows={3}
                value={formData.details}
                onChange={e => setFormData({ ...formData, details: e.target.value })}
                placeholder="Share details regarding timing, delivery location in RTP/Morrisville, or special requests..."
                className="w-full p-3 rounded-xl border border-stone-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl transition-colors cursor-pointer text-sm shadow-xs"
            >
              Submit Catering Request
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
