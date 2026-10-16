'use client';

import React, { useState } from 'react';
import { BUSINESS_INFO, OPENING_HOURS } from '@/data/business';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
  ClockIcon,
  CheckIcon,
  ArrowRightIcon,
} from './Icons';

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPinIcon className="w-3.5 h-3.5" />
            <span>Mitten in der Emder Innenstadt</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Anfahrt, Öffnungszeiten & Kontakt
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Wir freuen uns auf deinen Besuch in der Brückstraße 65 – ob mit Voranmeldung oder für den schnellen Platten zwischendurch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Address, Opening Hours & Direct Contact */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Opening Hours Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 font-bold text-lg text-slate-900 mb-6">
                <ClockIcon className="w-5 h-5 text-emerald-600" />
                <span>Werkstatt- & Ladenzeiten</span>
              </div>

              <div className="space-y-3">
                {OPENING_HOURS.map((oh) => (
                  <div
                    key={oh.day}
                    className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm py-2 border-b border-slate-100 last:border-0"
                  >
                    <span className="font-bold text-slate-800">{oh.day}</span>
                    <span
                      className={`mt-0.5 sm:mt-0 font-medium ${
                        oh.isWorkshopOnly ? 'text-amber-700 font-semibold' : 'text-slate-600'
                      }`}
                    >
                      {oh.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-50 text-[11px] text-slate-500 leading-relaxed border border-slate-100">
                <strong>Hinweis:</strong> Montags arbeitet Klaus konzentriert an anspruchsvollen Reparaturen in der Werkstatt. Ab Dienstag 09:00 Uhr ist der Laden wieder regulär für Publikumsverkehr geöffnet.
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <PhoneIcon className="w-4 h-4 text-emerald-600" />
                  <span>Telefon</span>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                  className="text-base font-black text-slate-900 hover:text-emerald-700 transition-colors block"
                >
                  {BUSINESS_INFO.contact.phone}
                </a>
                <span className="text-[11px] text-slate-500 mt-1 block">Direkter Draht zu Klaus</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </div>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-black text-emerald-700 hover:text-emerald-800 transition-colors block"
                >
                  {BUSINESS_INFO.contact.whatsappFormatted}
                </a>
                <span className="text-[11px] text-slate-500 mt-1 block">Fotos & Terminanfragen</span>
              </div>

            </div>

            {/* Address & Navigation */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">WattRad Emden</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Br%C3%BCckstra%C3%9Fe+65,+26725+Emden"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shrink-0 transition-colors"
              >
                <span>Route planen</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs h-full flex flex-col justify-between">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
                  <MailIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Nachricht schreiben</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Fragen zu Reparatur oder Neurad?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Schreib uns dein Anliegen ganz unkompliziert. Klaus oder Heike melden sich schnellstmöglich persönlich bei dir zurück.
                </p>

                {formSubmitted ? (
                  <div className="my-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in zoom-in-95">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckIcon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base text-slate-900">Nachricht erfolgreich versendet!</h4>
                    <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                      Vielen Dank, {formData.name || 'lieber Radler'}! Klaus hat deine Nachricht erhalten und meldet sich in Kürze bei dir.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 text-xs font-semibold text-emerald-700 underline"
                    >
                      Weitere Nachricht senden
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="contactName" className="block text-xs font-bold text-slate-800 mb-1">
                        Dein Name *
                      </label>
                      <input
                        id="contactName"
                        type="text"
                        required
                        placeholder="z. B. Hajo Peters"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contactPhone" className="block text-xs font-bold text-slate-800 mb-1">
                          Telefonnummer (für Rückruf)
                        </label>
                        <input
                          id="contactPhone"
                          type="tel"
                          placeholder="z. B. 04921 ..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="contactEmail" className="block text-xs font-bold text-slate-800 mb-1">
                          E-Mail-Adresse *
                        </label>
                        <input
                          id="contactEmail"
                          type="email"
                          required
                          placeholder="z. B. hajo@gmx.de"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contactMessage" className="block text-xs font-bold text-slate-800 mb-1">
                        Deine Nachricht oder Frage *
                      </label>
                      <textarea
                        id="contactMessage"
                        required
                        rows={4}
                        placeholder="Wie können wir dir und deinem Fahrrad weiterhelfen?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors shadow-sm cursor-pointer"
                    >
                      Nachricht jetzt absenden
                    </button>
                  </form>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 text-[11px] text-slate-400 text-center">
                Direkt per Post oder persönlich: WattRad • Brückstraße 65 • 26725 Emden
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
