import React from 'react';
import { ShieldCheckIcon, CheckIcon, CalendarIcon, ArrowRightIcon } from './Icons';
import { LEASING_PARTNERS } from '@/data/business';

interface LeasingSectionProps {
  onSelectLeasingService?: () => void;
}

export function LeasingSection({ onSelectLeasingService }: LeasingSectionProps) {
  const benefits = [
    'Komplette jährliche UVV-Sicherheitsprüfung für dein Dienstrad',
    'Direkte digitale Abrechnung über dein Leasingportal – keine Vorkasse',
    'Partner für JobRad, BusinessBike, Lease a Bike, Bikeleasing & Deutsche Dienstrad',
    'Ideal für Pendler vom VW-Werk Emden, Klinikum, Stadt & Betrieben aus Ostfriesland',
    'Schnelle Abwicklung in 24 Stunden, damit du direkt wieder mobil bist',
  ];

  return (
    <section id="leasing" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Leasing Info & Benefits */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-700" />
              <span>Dienstrad-Partner in Emden</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Dienstrad-Leasing & UVV-Inspektion.{' '}
              <span className="text-emerald-700 block">Einfach, schnell & vor Ort.</span>
            </h2>

            <p className="mt-4 text-base text-stone-700 leading-relaxed max-w-xl">
              Fährst du dein Rad über das <strong>VW-Werk Emden</strong>, die Stadtverwaltung, das Klinikum oder einen Betrieb hier aus der Region? WattRad ist dein zertifizierter Servicepartner direkt in der Innenstadt.
            </p>

            <ul className="mt-6 space-y-2.5">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <CheckIcon className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onSelectLeasingService || (() => {
                  const el = document.getElementById('buchung');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                })}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Leasing-Inspektion (UVV) anfragen</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Partners Grid Box */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4 text-center">
                Unterstützte Leasing-Partner bei WattRad:
              </h3>

              <div className="grid grid-cols-2 gap-2.5">
                {LEASING_PARTNERS.map((partner) => (
                  <div
                    key={partner.name}
                    className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-sm font-bold text-stone-900">{partner.name}</span>
                    <span className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                      {partner.badge}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-center text-xs text-stone-500">
                Dein Anbieter ist nicht dabei? Klaus schaltet fast alle Portale unkompliziert frei.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
