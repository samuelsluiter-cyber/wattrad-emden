import React from 'react';
import { WrenchIcon, ShieldCheckIcon, ClockIcon, BikeIcon, SparklesIcon } from './Icons';

export function TrustBar() {
  const trustPoints = [
    {
      icon: <WrenchIcon className="w-5 h-5 text-emerald-600" />,
      title: '25 Jahre Meister-Praxis',
      desc: 'Zweirad-Fachwissen von Inhaber Klaus Saarholz',
    },
    {
      icon: <ClockIcon className="w-5 h-5 text-emerald-600" />,
      title: 'Notfall-Soforthilfe',
      desc: 'Platter Reifen? Wir schieben Notfälle direkt ein',
    },
    {
      icon: <BikeIcon className="w-5 h-5 text-emerald-600" />,
      title: 'Alle Marken & E-Bikes',
      desc: 'Bosch, Shimano, Brose, Yamaha & Bio-Bikes',
    },
    {
      icon: <ShieldCheckIcon className="w-5 h-5 text-emerald-600" />,
      title: 'Dienstrad-Leasing',
      desc: 'Zertifizierter Partner für JobRad, BusinessBike u.v.m.',
    },
    {
      icon: <SparklesIcon className="w-5 h-5 text-emerald-600" />,
      title: 'BikeFitting & Pflege',
      desc: 'Ergonomie-Anpassung & Bike Cleaning mit Versiegelung',
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-6 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="p-2 bg-slate-800 border border-slate-700/80 rounded-lg shrink-0">
                {point.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-100 leading-snug">{point.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
