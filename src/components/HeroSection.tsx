import React from 'react';
import Image from 'next/image';
import { CalendarIcon, PhoneIcon, WhatsAppIcon, ShieldCheckIcon, ClockIcon, WrenchIcon } from './Icons';
import { BUSINESS_INFO } from '@/data/business';

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-8 pb-16 lg:py-20 overflow-hidden">
      {/* Decorative background grid subtle */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Story & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Local Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Neu in Emden • Brückstraße 65 • Inhaber Klaus Saarholz</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              Dein Fahrrad in Meisterhand.{' '}
              <span className="text-emerald-600 block sm:inline">Mitten in Emden.</span>
            </h1>

            {/* Subline & Story */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
              Vom schnellen Schlauchwechsel bis zur digitalen E-Bike-Systemdiagnose:{' '}
              <strong>Klaus Saarholz</strong> bringt fast 25 Jahre Werkstatterfahrung direkt in die Emder Innenstadt.{' '}
              Ehrliches Handwerk, faire Preise und persönliche Betreuung für jedes Rad.
            </p>

            {/* Slogan Pill from Real Storefront */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-medium text-slate-600">
              <span className="bg-slate-100 text-slate-800 font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                &bdquo;Ich dreh am Rad&ldquo;
              </span>
              <span className="text-slate-400">•</span>
              <span className="bg-slate-100 text-slate-800 font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                &bdquo;Ingang&ldquo; Brückstraße 65
              </span>
              <span className="text-slate-400">•</span>
              <span className="bg-slate-100 text-slate-800 font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                &bdquo;Hätte, hätte Fahrradkette&ldquo;
              </span>
            </div>

            {/* Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={onOpenBooking || (() => {
                  const el = document.getElementById('buchung');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                })}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md shadow-emerald-600/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <CalendarIcon className="w-5 h-5" />
                <span>Werkstatt-Termin anfragen</span>
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Moin Klaus! Ich brauche einen Werkstatt-Termin für mein Fahrrad.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 rounded-xl shadow-xs transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp an Klaus</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-emerald-600" />
                <span>{BUSINESS_INFO.contact.phone}</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 w-full max-w-lg">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium">Notfälle ohne Termin</span>
              </div>
              <div className="flex items-center gap-2">
                <WrenchIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium">Reparatur aller Marken</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium">JobRad & Leasing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Storefront Photo with Authentic Overlay Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame with subtle shadow */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
                <Image
                  src="/images/klaus_heike_wattrad_original.jpg"
                  alt="Klaus Saarholz und Heike Paulsen-Paulig vor ihrem neuen Fahrradgeschäft WattRad in der Brückstraße 65 in Emden"
                  fill
                  priority
                  className="object-cover object-top hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                
                {/* Storefront Caption */}
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                  <p className="font-bold text-sm">Klaus Saarholz & Heike Paulsen-Paulig</p>
                  <p className="text-slate-300 text-[11px]">Vor dem Ladenlokal in der Brückstraße 65, Emden</p>
                </div>
              </div>

              {/* Floating Badge: Ingang & Öffnung */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white font-extrabold flex flex-col items-center justify-center text-[10px] leading-tight">
                  <span>WATT</span>
                  <span>RAD</span>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">
                    Neueröffnung
                  </div>
                  <div className="text-xs font-medium text-emerald-700">
                    Innenstadt Emden
                  </div>
                </div>
              </div>

              {/* Floating Badge: 25 Jahre Erfahrung */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-slate-900 text-white p-3.5 rounded-xl shadow-xl border border-slate-800 flex items-center gap-3">
                <div className="p-2 bg-emerald-600/20 text-emerald-400 rounded-lg">
                  <WrenchIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-100">Fast 25 Jahre</div>
                  <div className="text-[11px] text-slate-400">Handwerks-Erfahrung</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
