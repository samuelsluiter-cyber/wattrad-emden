'use client';

import React, { useState } from 'react';
import { WORKSHOP_SERVICES } from '@/data/services';
import { WorkshopService } from '@/types';
import { CheckIcon, ClockIcon, WrenchIcon, CalendarIcon, ArrowRightIcon } from './Icons';

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
    <section id="leistungen" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <WrenchIcon className="w-3.5 h-3.5 text-emerald-700" />
            <span>Werkstatt-Aushang & Schaufenster-Preise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Transparente Werkstattleistungen & ehrliche Preise
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Keine versteckten Posten: Klaus schaut sich dein Rad vorab gemeinsam mit dir an. Was repariert werden muss, wird gemacht – was noch gut ist, bleibt dran.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services List in a Clean Workshop Menu Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-stone-50/60 rounded-2xl p-6 sm:p-7 border border-stone-200 hover:border-emerald-600/60 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Header: Name + Price */}
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-stone-200/80">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-1">
                      <ClockIcon className="w-3.5 h-3.5 text-stone-400" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <div className="text-xl font-extrabold text-emerald-800 shrink-0 text-right">
                    {service.price}
                  </div>
                </div>

                <p className="text-sm text-stone-700 mt-3 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Checklist */}
                <ul className="mt-4 space-y-2">
                  {service.includedPoints.slice(0, 4).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-600 leading-normal">
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-[11px] text-stone-500">
                  {service.recommendedFor}
                </span>
                <button
                  onClick={() => handleBooking(service)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-900 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer shrink-0"
                >
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>Anfragen</span>
                  <ArrowRightIcon className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Notfall-Leiste */}
        <div className="mt-10 p-5 rounded-xl bg-stone-100 border border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-stone-800">
            <strong>Platter Reifen oder Kette ab?</strong> Notfälle schieben wir während der Werkstattzeiten nach Möglichkeit immer sofort ein. Komm einfach in die <strong>Brückstraße 65</strong>.
          </div>
          <a
            href="tel:049219974120"
            className="shrink-0 px-4 py-2 rounded-lg bg-white border border-stone-300 text-stone-900 font-bold text-xs hover:bg-stone-200 transition-colors"
          >
            04921 99 74 120
          </a>
        </div>

      </div>
    </section>
  );
}
