'use client';

import React from 'react';
import { Logo } from './Logo';
import { PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon } from './Icons';
import { BUSINESS_INFO } from '@/data/business';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
  onOpenBooking?: () => void;
}

export function Footer({ onOpenLegal, onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="full" lightText={true} />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Deine verlässliche Fahrradwerkstatt & E-Bike Service im Herzen von Emden. Fast 25 Jahre Meister-Praxis von Klaus Saarholz – ehrlich, nah und bodenständig.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-block px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400 font-semibold">
                &bdquo;Ingang&ldquo; Brückstraße 65
              </span>
              <span>•</span>
              <span className="inline-block px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-semibold">
                &bdquo;Ich dreh am Rad&ldquo;
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#leistungen" className="hover:text-emerald-400 transition-colors">
                  Leistungen & Schaufenster-Preise
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking || (() => {
                    const el = document.getElementById('buchung');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  })}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Werkstatt-Termin anfragen (3 Schritte)
                </button>
              </li>
              <li>
                <a href="#ueber-uns" className="hover:text-emerald-400 transition-colors">
                  Über Klaus, Heike & Dinus-Voß-Tradition
                </a>
              </li>
              <li>
                <a href="#leasing" className="hover:text-emerald-400 transition-colors">
                  Dienstrad-Leasing (JobRad, BusinessBike)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Häufige Fragen (FAQ)
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-emerald-400 transition-colors">
                  Anfahrt & Werkstattzeiten
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Hours */}
          <div className="lg:col-span-4 space-y-3 text-xs text-slate-400">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Werkstatt vor Ort
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Brückstraße 65, 26725 Emden (Innenstadt)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.contact.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {BUSINESS_INFO.contact.whatsappFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MailIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-900 text-[11px] text-slate-500 leading-normal">
              Di–Fr: 09:00–13:00 & 14:00–18:00 Uhr<br />
              Sa: 09:00–14:00 Uhr • Mo: Reiner Werkstatttag
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Samuel Portfolio Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 WattRad Emden – Inhaber Klaus Saarholz. Alle Rechte vorbehalten.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Datenschutz (DSGVO)
            </button>
          </div>

          {/* Samuel Portfolio Credit */}
          <div className="text-[11px] text-slate-400">
            Website konzipiert & realisiert von{' '}
            <span className="text-emerald-400 font-semibold">Samuel Sluiter</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
