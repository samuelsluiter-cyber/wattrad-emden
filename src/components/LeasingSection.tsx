import React from 'react';
import { ShieldCheckIcon, CheckIcon, CalendarIcon, ArrowRightIcon } from './Icons';
import { LEASING_PARTNERS } from '@/data/business';

interface LeasingSectionProps {
  onSelectLeasingService?: () => void;
}

export function LeasingSection({ onSelectLeasingService }: LeasingSectionProps) {
  const benefits = [
    'Komplette jährliche UVV-Sicherheitsprüfung nach DGUV',
    'Direkte digitale Abrechnung über dein Leasingportal – 0 € Vorkasse',
    'Partner aller großen Anbieter: JobRad, BusinessBike, Lease a Bike u.v.m.',
    'Perfekt für Mitarbeiter vom VW-Werk Emden, Klinikum, Stadt & Handwerk',
    'Schnelle Abwicklung in 24 Stunden damit du am nächsten Tag wieder pendelst',
  ];

  return (
    <section id="leasing" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Leasing Info & Benefits */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheckIcon className="w-3.5 h-3.5" />
              <span>Dienstrad-Zentrum Emden</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Dienstrad-Leasing & UVV-Inspektion.{' '}
              <span className="text-emerald-400 block">Einfach, schnell & digital.</span>
            </h2>

            <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl">
              Egal ob du dein Rad über das <strong>VW-Werk Emden</strong>, die Stadtverwaltung, das Klinikum oder einen lokalen Betrieb geleast hast: WattRad ist dein zertifizierter Servicepartner vor Ort in der Brückstraße.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onSelectLeasingService || (() => {
                  const el = document.getElementById('buchung');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Leasing-Inspektion (UVV) anfragen</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-400 text-center sm:text-left">
                Kostenlos bei inkludiertem Servicepaket deines Arbeitgebers.
              </span>
            </div>

          </div>

          {/* Right Column: Partners Grid Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 backdrop-blur-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
                Unterstützte Leasing-Partner bei WattRad:
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {LEASING_PARTNERS.map((partner) => (
                  <div
                    key={partner.name}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 flex flex-col items-center justify-center text-center transition-all hover:border-emerald-500/50"
                  >
                    <span className="text-sm font-black text-white">{partner.name}</span>
                    <span className="text-[11px] text-emerald-400 font-semibold mt-1">
                      {partner.badge}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/80 text-center">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dein Leasinganbieter ist nicht aufgelistet? Sprich uns einfach an – wir schalten die Abrechnung unkompliziert für dich frei.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
