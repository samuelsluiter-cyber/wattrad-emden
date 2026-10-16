import React from 'react';
import Image from 'next/image';
import { WrenchIcon, ShieldCheckIcon, CheckIcon } from './Icons';

export function AboutSection() {
  return (
    <section id="ueber-uns" className="py-20 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Workshop and Craftsman Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Workshop Action */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3 sm:aspect-1">
                <Image
                  src="/images/hero-workshop.jpg"
                  alt="Klaus Saarholz in der Werkstatt von WattRad Emden"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Overlapping Badge: Tradition & Local Heritage */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl max-w-xs border border-slate-800">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  Tradition fortführen
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Nach dem Ruhestand von Zweirad-Legende <strong>Dinus Voß</strong> schließt Klaus die Lücke in der Emder Innenstadt.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <WrenchIcon className="w-3.5 h-3.5" />
              <span>Wer wir sind • Klaus Saarholz & Heike</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Fast 25 Jahre Meister-Praxis.{' '}
              <span className="text-emerald-700 block">Jetzt in der eigenen Werkstatt.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                Wer in Emden auf zwei Rädern unterwegs ist, kennt das Gefühl: Gegenwind am Deich, feuchtes Nordseeklima und raue Straßen fordern Material und Mensch. Nach fast 25 Jahren als angestellter Zweiradmechaniker hat sich Inhaber <strong>Klaus Saarholz</strong> seinen Lebenstraum erfüllt und gemeinsam mit Partnerin <strong>Heike Paulsen-Paulig</strong> das Fachgeschäft <strong>WattRad</strong> in der Brückstraße 65 eröffnet.
              </p>

              <p>
                Mit der Schließung des traditionsreichen Betriebs von Dinus Voß an der Bollwerkstraße stand Emden plötzlich ohne zentralen Reparatur-Anlaufpunkt da. Genau diese Lücke füllt WattRad nun mit frischer Energie, modernster E-Bike-Diagnosetechnik und der bewährten Verlässlichkeit ostfriesischen Handwerks.
              </p>

              <p className="font-medium text-slate-800">
                Bei uns gibt es keine anonymen Callcenter: Klaus steht selbst an der Werkbank und Heike begrüßt dich am &bdquo;Ingang&ldquo;.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-1">
                  <CheckIcon className="w-4 h-4 text-emerald-600" />
                  <span>Ehrliche Beratung</span>
                </div>
                <p className="text-xs text-slate-600">
                  Wir tauschen nur aus, was wirklich verschlissen ist. Transparenz vor Reparaturstart.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-1">
                  <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
                  <span>Echte Meisterqualität</span>
                </div>
                <p className="text-xs text-slate-600">
                  Zertifiziert für Bosch, Shimano und Brose E-Bikes sowie modernste Drehmomenttechnik.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
