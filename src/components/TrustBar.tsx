import React from 'react';
import { WrenchIcon, ShieldCheckIcon, ClockIcon, BikeIcon } from './Icons';

export function TrustBar() {
  const points = [
    {
      icon: <WrenchIcon className="w-4 h-4 text-emerald-700 shrink-0" />,
      title: 'Fast 25 Jahre Meister-Praxis',
      desc: 'Zweirad-Erfahrung von Klaus Saarholz',
    },
    {
      icon: <ClockIcon className="w-4 h-4 text-emerald-700 shrink-0" />,
      title: 'Notfall-Soforthilfe',
      desc: 'Platten? Schieben wir direkt ein',
    },
    {
      icon: <BikeIcon className="w-4 h-4 text-emerald-700 shrink-0" />,
      title: 'Alle Marken & E-Bikes',
      desc: 'Bosch, Shimano, Brose & Bio-Bikes',
    },
    {
      icon: <ShieldCheckIcon className="w-4 h-4 text-emerald-700 shrink-0" />,
      title: 'JobRad & Dienstrad Partner',
      desc: 'Digitale UVV-Jahresinspektion',
    },
  ];

  return (
    <section className="bg-stone-100 py-6 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {points.map((pt, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg border border-stone-200 shadow-2xs">
                {pt.icon}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-stone-900 leading-tight">
                  {pt.title}
                </div>
                <div className="text-[11px] sm:text-xs text-stone-600 mt-0.5">
                  {pt.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
