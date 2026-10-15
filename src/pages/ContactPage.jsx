import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Accessibility, CheckCircle2, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-12">
      
      {/* Headline from Blueprint */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
          Contact & Location
        </span>
        <h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
          We Can't Wait to Welcome You!
        </h1>
        <p className="text-stone-600 text-xs sm:text-sm">
          Visit our Morrisville kitchen or send our team a quick note below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left Column: Location, Parking & Direct Line */}
        <div className="md:col-span-5 space-y-4 sm:space-y-6">
          
          {/* Find Us Here */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2 text-stone-900 font-serif-display font-bold text-base">
              <MapPin className="w-5 h-5 text-orange-600 shrink-0" />
              <span>Physical Address</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              <strong>Goshen International Kitchen & Foods</strong><br />
              4000 Bear Cat Way, Suite 104<br />
              Morrisville, North Carolina 27560<br />
              United States
            </p>
            <a
              href="https://share.google/24AaEKdONjLmrta51"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-orange-600 hover:underline font-bold inline-flex items-center gap-1 pt-1"
            >
              <span>View in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Parking & Accessibility from Blueprint */}
          <div className="bg-amber-50 rounded-2xl p-5 sm:p-6 border border-amber-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-serif-display font-bold text-base">
              <Accessibility className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>Parking & Accessibility</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              Expansive, free on-site parking lot with designated wheelchair-accessible bays directly adjacent to our front entrance. Zero stairs for effortless mobility.
            </p>
          </div>

          {/* Get In Touch */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-2xs space-y-3 text-xs sm:text-sm">
            <h3 className="font-serif-display font-bold text-stone-900 text-base">
              Get In Touch
            </h3>
            
            <div className="space-y-2 text-stone-700">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Telephone: <a href="tel:9195592586" className="font-bold text-stone-900 hover:underline">(919) 559-2586</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="truncate">info@gosheninternationalkitchen.com</span>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-stone-100">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-900">Mon–Thu: 7:00 AM – 6:00 PM</p>
                  <p className="font-semibold text-stone-900">Fri: 11:30 AM – 3:00 PM</p>
                  <p className="text-[11px] text-stone-500">Sat-Sun: Catering & Private Orders</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form & Map */}
        <div className="md:col-span-7 space-y-6">
          
          {/* Interactive Form with Blueprint Field Spec */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 border border-stone-200 shadow-2xs space-y-4">
            <h3 className="font-serif-display font-bold text-xl text-stone-900">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 rounded-xl p-5 sm:p-6 text-center border border-emerald-200 space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-950 text-sm">Message Received</h4>
                <p className="text-xs text-emerald-800">
                  Thank you, {formData.fullName}. We will get back to you shortly at {formData.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    className="w-full p-3 rounded-xl border border-stone-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full p-3 rounded-xl border border-stone-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 555-5555"
                      className="w-full p-3 rounded-xl border border-stone-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Inquiry Type Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Inquiry Type *</label>
                  <select
                    value={formData.inquiryType}
                    onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-200 bg-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Catering Request">Catering Request</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                {/* Your Message / Catering Details */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Your Message / Catering Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please share details regarding your event date, estimated headcount, or general question..."
                    className="w-full p-3 rounded-xl border border-stone-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl transition-colors cursor-pointer text-sm shadow-xs"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Embedded Google Map */}
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-2xs h-56 sm:h-64">
            <iframe
              title="Goshen Location"
              src="https://maps.google.com/maps?q=4000+Bear+Cat+Way,+Morrisville,+NC+27560&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>

      </div>

    </div>
  );
}
