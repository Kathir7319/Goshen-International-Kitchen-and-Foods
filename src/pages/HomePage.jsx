import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Flame, 
  ShieldCheck, 
  HeartHandshake, 
  Navigation,
  Accessibility,
  Phone,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';

// Background scenes that rotate dynamically with Ken Burns effect
const LIVE_SCENES = [
  {
    image: '/images/goshen-interior.jpg',
    tag: 'Morrisville Food Court Venue',
    headline: 'Family-First Hospitality & Community Seating'
  },
  {
    image: '/images/naija-buns.jpg',
    tag: 'Authentic West African Roots',
    headline: 'Hand-Kneaded Crispy Golden Naija Buns'
  },
  {
    image: '/images/efo-riro.jpg',
    tag: 'Slow-Simmered Traditional Soup',
    headline: 'Rich Efo Riro Stew with Tender Assorted Meats'
  },
  {
    image: '/images/breakfast-platter.jpg',
    tag: 'Daily Breakfast Grille',
    headline: 'Made-to-Order Farm Eggs & Buttered Artisanal Toast'
  },
  {
    image: '/images/continental-chicken.jpg',
    tag: 'Continental Comfort Dishes',
    headline: 'Deep-Marinated Roasted Chicken Pots with Herbs'
  }
];

export default function HomePage() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const popularDishes = MENU_ITEMS.filter(item => item.popular).slice(0, 4);

  // Auto-rotate background scenes
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentScene(prev => (prev + 1) % LIVE_SCENES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextScene = () => {
    setCurrentScene(prev => (prev + 1) % LIVE_SCENES.length);
  };

  const prevScene = () => {
    setCurrentScene(prev => (prev - 1 + LIVE_SCENES.length) % LIVE_SCENES.length);
  };

  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      
      {/* LIVE CINEMATIC HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-stone-950 text-white overflow-hidden py-16 sm:py-24">
        
        {/* Dynamic Living Background Crossfade Slideshow */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {LIVE_SCENES.map((scene, index) => {
            const isActive = index === currentScene;
            return (
              <div
                key={scene.image}
                className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={scene.image}
                  alt={scene.headline}
                  className={`w-full h-full object-cover filter brightness-[0.38] contrast-[1.08] ${
                    isActive ? 'animate-kenburns' : ''
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}

          {/* Warm Dark Vignette & Gradient Overlays for High Legibility */}
          <div className="absolute inset-0 z-10 bg-linear-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
          <div className="absolute inset-0 z-10 bg-radial from-transparent via-stone-950/40 to-stone-950/90" />

          {/* Floating Atmospheric Steam & Ember Particles */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <span className="live-particle w-2 h-2 left-[15%] bottom-[10%]" style={{ animationDuration: '8s', animationDelay: '0s' }} />
            <span className="live-particle w-3 h-3 left-[28%] bottom-[15%]" style={{ animationDuration: '11s', animationDelay: '2s' }} />
            <span className="live-particle w-1.5 h-1.5 left-[45%] bottom-[8%]" style={{ animationDuration: '7s', animationDelay: '4s' }} />
            <span className="live-particle w-2.5 h-2.5 left-[62%] bottom-[12%]" style={{ animationDuration: '9s', animationDelay: '1s' }} />
            <span className="live-particle w-2 h-2 left-[80%] bottom-[18%]" style={{ animationDuration: '10s', animationDelay: '3s' }} />
            <span className="live-particle w-3 h-3 left-[88%] bottom-[5%]" style={{ animationDuration: '12s', animationDelay: '5s' }} />
          </div>
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-7">
          
          {/* Cute Logo Emblem */}
          <div className="flex justify-center mb-1">
            <img
              src="/logo.svg"
              alt="Goshen Kitchen Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-xl hover:rotate-12 transition-transform duration-300"
            />
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[11px] sm:text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
            <span>4000 Bear Cat Way, Ste 104, Morrisville, NC</span>
          </div>

          {/* Main Headline (H1) from Blueprint */}
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-md">
            A World of Flavors, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-orange-400 to-amber-200">
              Served with True Hospitality.
            </span>
          </h1>

          {/* Sub-headline from Blueprint */}
          <p className="text-stone-200 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-xs px-2 font-normal">
            From comforting American breakfast staples to authentic international delicacies, we bring fresh, rich flavors straight to your table in Morrisville.
          </p>

          {/* Primary CTA Buttons from Blueprint */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-sm sm:max-w-none mx-auto">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 active:from-orange-700 active:to-amber-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-900/30 transform hover:-translate-y-0.5"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://share.google/24AaEKdONjLmrta51"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-stone-900/80 hover:bg-stone-800 active:bg-stone-950 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-stone-700/80 hover:border-amber-400/50 backdrop-blur-md transition-all shadow-md"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Quick Call Direct Line */}
          <div className="text-xs text-stone-300 flex flex-wrap items-center justify-center gap-2 pt-1">
            <span>Call to order:</span>
            <a href="tel:9195592586" className="text-amber-300 font-bold hover:underline inline-flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>(919) 559-2586</span>
            </a>
            <span className="hidden sm:inline text-stone-500">•</span>
            <span>Dine-in & Streamlined Takeout</span>
          </div>

          {/* Live Background Interactive Pill & Controller */}
          <div className="pt-4 sm:pt-6">
            <div className="inline-flex items-center gap-3 bg-stone-900/80 border border-stone-800/90 backdrop-blur-md px-3.5 py-2 rounded-2xl text-[11px] text-stone-300 shadow-xl max-w-full">
              
              {/* Pulsing Live Dot */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span className="font-bold uppercase tracking-wider text-[10px] text-stone-400">
                  Live View
                </span>
              </div>

              <span className="hidden sm:inline text-stone-600">|</span>

              {/* Current Scene Caption */}
              <span className="text-amber-300 font-medium truncate max-w-[200px] sm:max-w-xs">
                {LIVE_SCENES[currentScene].headline}
              </span>

              {/* Prev / Next & Pause Controls */}
              <div className="flex items-center gap-1 shrink-0 ml-auto border-l border-stone-800 pl-2">
                <button
                  onClick={prevScene}
                  className="p-1 text-stone-400 hover:text-white rounded hover:bg-stone-800 transition-colors cursor-pointer"
                  aria-label="Previous scene"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 text-stone-400 hover:text-amber-400 rounded hover:bg-stone-800 transition-colors cursor-pointer"
                  aria-label={isPlaying ? "Pause live rotation" : "Resume live rotation"}
                  title={isPlaying ? "Pause rotation" : "Play rotation"}
                >
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-amber-400" />}
                </button>
                <button
                  onClick={nextScene}
                  className="p-1 text-stone-400 hover:text-white rounded hover:bg-stone-800 transition-colors cursor-pointer"
                  aria-label="Next scene"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* WELCOME & INTRODUCTION SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-5 sm:p-10 border border-stone-200 shadow-2xs space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="md:col-span-5 rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/goshen-interior.jpg"
                alt="Goshen Food Court Dining Area"
                className="w-full h-52 sm:h-64 object-cover"
                loading="lazy"
              />
            </div>

            <div className="md:col-span-7 space-y-3 sm:space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Welcome to Goshen
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                Where Food Meets Family-First Hospitality
              </h2>
              
              {/* Copywriting verbatim from Blueprint */}
              <div className="text-stone-600 text-xs sm:text-sm leading-relaxed space-y-3">
                <p>
                  Welcome to Goshen International Kitchen and Foods, where food meets family-first hospitality. Nestled in the heart of Morrisville, our kitchen bridges cultural horizons.
                </p>
                <p>
                  Whether you are stepping in for a perfectly turned, made-to-order breakfast egg, standard midday sandwich wraps, or our signature traditional West African comfort bowls, we focus on nourishing ingredients and generous portions. Our spacious, wheelchair-accessible food court venue is meticulously tailored for buzzing lunch groups, active families, and solo foodies seeking a satisfying culinary getaway.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-stone-700 bg-stone-50 p-3 rounded-xl border border-stone-100">
                <Accessibility className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>100% Wheelchair Accessible • Zero Stairs • Free Front Parking</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE GOSHEN? - TRIPLE CORE PILLAR COPY */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-6 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Our Standard
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-stone-900">
            Why Choose Goshen?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-2xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-base sm:text-lg font-bold text-stone-900">
              1. Authenticity Without Compromise
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We prepare our global dishes using time-honored recipes, genuine imported herbs, and culinary traditions that taste exactly like home.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-2xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-base sm:text-lg font-bold text-stone-900">
              2. Daily Fresh Prep
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              From our morning breakfast grid to our slow-simmered lunchtime soups, your food is crafted fresh on-site every single day.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-2xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-base sm:text-lg font-bold text-stone-900">
              3. Radical Hospitality
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We believe dining should be an expansive, easy experience. Our space is wide, inclusive, child-friendly, and open to groups of all sizes.
            </p>
          </div>

        </div>
      </section>

      {/* POPULAR DISH HIGHLIGHTS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Fresh Daily
            </span>
            <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-stone-900">
              Signature Specialties
            </h2>
          </div>
          <Link to="/menu" className="text-xs font-bold text-orange-600 hover:underline">
            View All Dishes →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularDishes.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-2xs flex flex-col justify-between">
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 sm:h-36 object-cover"
                  loading="lazy"
                />
                <div className="p-4 space-y-1.5">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="font-serif-display font-bold text-sm text-stone-900">
                      {item.name}
                    </h3>
                    <span className="text-xs font-bold text-orange-600 shrink-0">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-stone-500 text-[11px] line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <a
                  href="tel:9195592586"
                  className="w-full block text-center bg-stone-100 hover:bg-orange-600 hover:text-white text-stone-800 text-xs font-semibold py-2 rounded-lg transition-colors"
                >
                  Call to Order
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK VISIT STRIP */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-stone-100 rounded-2xl p-5 sm:p-6 border border-stone-200 text-xs text-stone-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-bold text-stone-900 text-sm">Visit Goshen in Morrisville</p>
            <p className="text-stone-600 text-xs">4000 Bear Cat Way, Ste 104, Morrisville, NC 27560</p>
            <p className="text-stone-500 text-[11px]">Mon–Thu 7:00 AM – 6:00 PM | Fri 11:30 AM – 3:00 PM</p>
          </div>
          <a
            href="tel:9195592586"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-3 px-5 rounded-xl text-center shrink-0 shadow-xs"
          >
            Call to Order: (919) 559-2586
          </a>
        </div>
      </section>

    </div>
  );
}
