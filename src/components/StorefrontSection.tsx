import React from 'react';
import { MapPinIcon, PhoneIcon } from './Icons';

// Simple coffee/mug icon
function MugIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  );
}

export function StorefrontSection() {
  return (
    <section className="py-16 sm:py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Understated Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-semibold mb-4">
          <MugIcon className="w-3.5 h-3.5 text-emerald-700" />
          <span>Ganz frisch in der Brückstraße 65</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Komm einfach auf einen Schnack vorbei.
        </h2>

        {/* Authentic Quote from Klaus */}
        <div className="mt-8 p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-xs text-left">
          <blockquote className="text-base sm:text-lg text-stone-800 leading-relaxed font-serif italic">
            &bdquo;Fahrräder sind keine Wegwerfartikel. Fast alles lässt sich reparieren, wenn man das Handwerk von Grund auf gelernt hat. Wir wollen, dass die Leute in Emden mit einem sicheren Gefühl und ohne Quietschen vom Hof radeln – egal ob altes Hollandrad oder modernes E-Bike.&ldquo;
          </blockquote>

          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
            <div>
              <div className="font-bold text-sm text-stone-900">Klaus Saarholz</div>
              <div className="text-xs text-stone-500">Inhaber & Zweiradmechaniker mit 25 Jahren Erfahrung</div>
            </div>
            <div className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
              WattRad Emden
            </div>
          </div>
        </div>

        {/* Local Invitation */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-stone-600">
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4 text-emerald-600" />
            <span>Brückstraße 65, 26725 Emden</span>
          </div>
          <span className="hidden sm:inline text-stone-300">•</span>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-4 h-4 text-emerald-600" />
            <a href="tel:049219974120" className="hover:text-emerald-700 font-semibold underline">
              04921 99 74 120
            </a>
          </div>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span className="font-medium text-stone-700">&bdquo;Ingang&ldquo; direkt an der Straße</span>
        </div>

      </div>
    </section>
  );
}
