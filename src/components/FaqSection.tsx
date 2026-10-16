'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/data/faq';
import { ChevronDownIcon, AlertCircleIcon } from './Icons';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <AlertCircleIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Häufige Fragen & Antworten</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Alles, was du vor deinem Besuch wissen möchtest
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Schnelle Antworten zu Reparaturablauf, Notfällen, E-Bike-Updates und Parkmöglichkeiten.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-600/60 bg-emerald-50/20 shadow-xs'
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact fallback */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <p className="text-sm text-slate-700">
            Deine Frage ist nicht dabei? Ruf Klaus einfach kurz an:{' '}
            <a
              href="tel:049219974120"
              className="font-bold text-emerald-700 hover:text-emerald-800 underline ml-1"
            >
              04921 99 74 120
            </a>{' '}
            oder schreib per WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
}
