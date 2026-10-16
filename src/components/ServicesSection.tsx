'use client';

import React, { useState } from 'react';
import { WORKSHOP_SERVICES } from '@/data/services';
import { WorkshopService } from '@/types';
import { CheckIcon, ClockIcon, WrenchIcon, SparklesIcon, CalendarIcon, ArrowRightIcon } from './Icons';

interface ServicesSectionProps {
  onSelectService?: (serviceId: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Alle Leistungen' },
    { id: 'inspection', label: 'Inspektion & BikeFitting' },
    { id: 'ebike', label: 'E-Bike Service' },
    { id: 'repair', label: 'Reparatur & Cleaning' },
    { id: 'tires', label: 'Pannenhilfe & Reifen' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? WORKSHOP_SERVICES
      : WORKSHOP_SERVICES.filter(
          (service) => service.category === activeCategory || service.category === 'all'
        );

  const handleBooking = (service: WorkshopService) => {
    if (onSelectService) {
      onSelectService(service.id);
    } else {
      const el = document.getElementById('buchung');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="leistungen" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <WrenchIcon className="w-3.5 h-3.5" />
            <span>Werkstatt • Service • Schaufenster-Leistungen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparente Werkstattleistungen & faire Preise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Keine versteckten Kosten, keine bösen Überraschungen: Klaus prüft dein Rad vorab und bespricht jeden Handgriff persönlich mit dir.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-200 hover:shadow-lg ${
                service.popular
                  ? 'border-emerald-500/80 shadow-emerald-500/5 ring-1 ring-emerald-500/20'
                  : 'border-slate-200 shadow-xs'
              }`}
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {service.popular ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider">
                      <SparklesIcon className="w-3 h-3" />
                      Empfohlen
                    </span>
                  ) : (
                    <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                      Fachservice
                    </span>
                  )}

                  <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                    <ClockIcon className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Service Name & Pricing */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                  {service.name}
                </h3>
                
                <div className="mt-2 text-2xl font-black text-emerald-700">
                  {service.price}
                </div>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Checklist of included points */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Inkludierte Leistungen:
                  </div>
                  <ul className="space-y-2.5">
                    {service.includedPoints.slice(0, 4).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                        <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleBooking(service)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-300/80 hover:border-emerald-600 transition-all cursor-pointer group"
                >
                  <CalendarIcon className="w-4 h-4 text-emerald-700 group-hover:text-white transition-colors" />
                  <span>Diesen Service anfragen</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Notice Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <WrenchIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Akuter Notfall? Platter Reifen, Kette gerissen oder Bremse versagt?
              </h4>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Komm einfach direkt während der Werkstattzeiten in die <strong>Brückstraße 65</strong>. Notfallreparaturen schieben wir nach Möglichkeit immer sofort oder taggleich ein!
              </p>
            </div>
          </div>

          <a
            href="tel:049219974120"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition-colors"
          >
            <span>Jetzt Notfall melden: 04921 99 74 120</span>
          </a>
        </div>

      </div>
    </section>
  );
}
