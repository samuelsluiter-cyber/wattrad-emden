import React from 'react';
import Image from 'next/image';
import { CalendarIcon, PhoneIcon, WhatsAppIcon, WrenchIcon, ClockIcon } from './Icons';
import { BUSINESS_INFO } from '@/data/business';

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="bg-white pt-8 pb-14 sm:py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Story & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Local Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Neu in der Brückstraße 65, Emden • Inhaber Klaus Saarholz</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] mb-5">
              Dein Fahrrad in Meisterhand.{' '}
              <span className="text-emerald-700 block sm:inline">Mitten in Emden.</span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-6 max-w-xl">
              Vom schnellen Schlauchwechsel bis zur E-Bike-Diagnose: Klaus Saarholz bringt fast 25 Jahre Werkstatt-Erfahrung direkt in die Emder Innenstadt. Ehrliches Handwerk, faire Preise und persönliche Beratung.
            </p>

            {/* Real Store Slogans */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs text-stone-600">
              <span className="bg-stone-100 text-stone-800 font-medium px-2.5 py-1 rounded border border-stone-200">
                &bdquo;Ich dreh am Rad&ldquo;
              </span>
              <span>•</span>
              <span className="bg-stone-100 text-stone-800 font-medium px-2.5 py-1 rounded border border-stone-200">
                &bdquo;Ingang&ldquo; Brückstraße 65
              </span>
              <span>•</span>
              <span className="bg-stone-100 text-stone-800 font-medium px-2.5 py-1 rounded border border-stone-200">
                &bdquo;Hätte, hätte Fahrradkette&ldquo;
              </span>
            </div>

            {/* Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <button
                onClick={onOpenBooking || (() => {
                  const el = document.getElementById('buchung');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                })}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Werkstatt-Termin anfragen</span>
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Moin Klaus! Ich brauche einen Werkstatt-Termin für mein Fahrrad.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 active:bg-stone-300 border border-stone-300 rounded-xl transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp an Klaus</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-3 py-3.5 text-sm font-semibold text-stone-700 hover:text-emerald-800 transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-emerald-700" />
                <span>{BUSINESS_INFO.contact.phone}</span>
              </a>
            </div>

            {/* Quick Guarantees (Simple textual checklist, no noisy card icons) */}
            <div className="pt-4 border-t border-stone-200 text-xs text-stone-600 flex flex-wrap gap-x-6 gap-y-2">
              <div className="flex items-center gap-1.5">
                <ClockIcon className="w-3.5 h-3.5 text-emerald-700" />
                <span>Notfall-Hilfe ohne Termin</span>
              </div>
              <div className="flex items-center gap-1.5">
                <WrenchIcon className="w-3.5 h-3.5 text-emerald-700" />
                <span>Reparatur aller Marken & E-Bikes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>📍 Brückstraße 65, 26725 Emden</span>
              </div>
            </div>

          </div>

          {/* Right Column: Genuine Photo of Klaus & Heike */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/images/klaus_heike_wattrad_original.jpg"
                  alt="Klaus Saarholz und Heike Paulsen-Paulig vor ihrem neuen Fahrradgeschäft WattRad in der Brückstraße 65 in Emden"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Clean, editorial photo caption */}
              <div className="p-4 bg-white border-t border-stone-200">
                <div className="text-sm font-bold text-stone-900">
                  Klaus Saarholz & Heike Paulsen-Paulig
                </div>
                <div className="text-xs text-stone-500 mt-0.5">
                  Vor dem Geschäft in der Brückstraße 65, Emden • Foto: NWZ / Emder Zeitung
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
