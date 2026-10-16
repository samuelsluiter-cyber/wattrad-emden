import React from 'react';
import { WrenchIcon, CheckIcon, ShieldCheckIcon } from './Icons';

export function AboutSection() {
  return (
    <section id="ueber-uns" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Understated Section Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <WrenchIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Aus Ostfriesland • Für Ostfriesland</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Fast 25 Jahre Werkstatt-Erfahrung.{' '}
            <span className="text-emerald-700 block sm:inline">Jetzt in der eigenen Werkstatt.</span>
          </h2>
        </div>

        {/* Editorial Story Text */}
        <div className="space-y-5 text-base sm:text-lg text-stone-700 leading-relaxed">
          <p>
            Wer in Emden auf zwei Rädern pendelt oder am Deich entlangfährt, weiß: Steifer Wind, Regen und salzige Luft verlangen Rädern einiges ab. Nach fast einem Vierteljahrhundert als angestellter Zweiradmechaniker hat <strong>Klaus Saarholz</strong> im Oktober 2026 den Schritt gewagt und gemeinsam mit Partnerin <strong>Heike Paulsen-Paulig</strong> das Fahrradfachgeschäft <strong>WattRad</strong> in der Brückstraße 65 eröffnet.
          </p>

          <p>
            Mit dem wohlverdienten Ruhestand von Zweirad-Legende <strong>Dinus Voß</strong> an der Bollwerkstraße fiel ein zentraler Anlaufpunkt im Emder Fahrradleben weg. Klaus führt diese Tradition nun mit frischem Wind, moderner E-Bike-Diagnosetechnik und derselben handwerklichen Gründlichkeit fort.
          </p>

          <p className="font-medium text-stone-900 bg-white p-5 rounded-xl border border-stone-200">
            &bdquo;Bei uns gibt es keine anonyme Kundenannahme. Klaus steht selbst an der Werkbank und Heike begrüßt dich am Ingang. Wir besprechen jedes Rad persönlich.&ldquo;
          </p>
        </div>

        {/* Craftsmanship Principles */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 bg-white rounded-xl border border-stone-200">
            <div className="flex items-center gap-2 font-bold text-sm text-stone-900 mb-1">
              <CheckIcon className="w-4 h-4 text-emerald-600" />
              <span>Ehrliches Handwerk</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Ausgetauscht wird nur, was wirklich nötig ist. Kein Aufschwatzen, keine Überraschungen auf der Rechnung.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200">
            <div className="flex items-center gap-2 font-bold text-sm text-stone-900 mb-1">
              <WrenchIcon className="w-4 h-4 text-emerald-600" />
              <span>Alle Marken & Räder</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Ob Gazelle, Kalkhoff, Hollandrad, Canyon-Versandrad oder modernes E-Bike: Jedes Rad wird repariert.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200">
            <div className="flex items-center gap-2 font-bold text-sm text-stone-900 mb-1">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
              <span>Direkt vor Ort</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Mitten in der Emder Innenstadt. Schnell erreichbar für Berufspendler, Schüler und Alltagsradler.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
