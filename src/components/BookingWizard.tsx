'use client';

import React, { useState, useEffect } from 'react';
import { WORKSHOP_SERVICES } from '@/data/services';
import { BUSINESS_INFO } from '@/data/business';
import { BookingFormData, ConfirmedBooking, BikeType } from '@/types';
import {
  CalendarIcon,
  ClockIcon,
  CheckIcon,
  WhatsAppIcon,
  DownloadIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
  AlertCircleIcon,
} from './Icons';

interface BookingWizardProps {
  initialServiceId?: string;
}

export function BookingWizard({ initialServiceId }: BookingWizardProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: initialServiceId || WORKSHOP_SERVICES[0].id,
    bikeType: 'ebike-pedelec',
    bikeBrand: '',
    bikeModel: '',
    issueDescription: '',
    date: '',
    timeSlot: '09:00 - 11:00 Uhr',
    fullName: '',
    email: '',
    phone: '',
    notes: '',
    privacyAgreed: false,
  });

  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Sync initialServiceId when provided
  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  // Load existing booking from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wattrad_last_booking');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.bookingId) {
          setConfirmedBooking(parsed);
        }
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const [availableDates, setAvailableDates] = useState<{ dateStr: string; label: string; weekday: string }[]>([]);

  // Compute next available workshop days (Tue - Sat) on client
  useEffect(() => {
    const dates: { dateStr: string; label: string; weekday: string }[] = [];
    const today = new Date();

    for (let i = 1; i <= 21 && dates.length < 10; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayOfWeek = d.getDay(); // 0 = Sun, 1 = Mon

      // WattRad is open for customer drop-offs Tuesday (2) through Saturday (6)
      if (dayOfWeek >= 2 && dayOfWeek <= 6) {
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;

        const weekdays = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
        const weekday = weekdays[dayOfWeek];
        const label = `${weekday}, ${day}.${month}.${year}`;

        dates.push({ dateStr, label, weekday });
      }
    }
    setAvailableDates(dates);
    if (dates.length > 0) {
      setFormData((prev) => (prev.date ? prev : { ...prev, date: dates[0].dateStr }));
    }
  }, []);

  const selectedService =
    WORKSHOP_SERVICES.find((s) => s.id === formData.serviceId) || WORKSHOP_SERVICES[0];

  const bikeTypeOptions: { type: BikeType; label: string; icon: string }[] = [
    { type: 'ebike-pedelec', label: 'E-Bike / Pedelec (Bosch, Shimano etc.)', icon: '⚡' },
    { type: 'city-trekking', label: 'City- & Trekkingrad (Bio-Bike)', icon: '🚲' },
    { type: 'mountainbike', label: 'Mountainbike (Hardtail / Fully)', icon: '🚵' },
    { type: 'gravel-road', label: 'Gravelbike / Rennrad', icon: '🏁' },
    { type: 'cargo-kids', label: 'Lastenrad / Kinderfahrrad', icon: '📦' },
  ];

  const timeSlots = [
    { id: '09:00 - 11:00 Uhr', label: 'Vormittag (09:00 – 11:00 Uhr)' },
    { id: '11:00 - 13:00 Uhr', label: 'Mittag (11:00 – 13:00 Uhr)' },
    { id: '14:00 - 16:00 Uhr', label: 'Nachmittag (14:00 – 16:00 Uhr)' },
    { id: '16:00 - 18:00 Uhr', label: 'Spätnachmittag (16:00 – 18:00 Uhr)' },
  ];

  const validateStep1 = () => {
    if (!formData.serviceId) {
      setErrorMsg('Bitte wähle eine Werkstattleistung aus.');
      return false;
    }
    setErrorMsg(null);
    return true;
  };

  const validateStep2 = () => {
    if (!formData.date) {
      setErrorMsg('Bitte wähle einen Wunschtermin aus.');
      return false;
    }
    if (!formData.timeSlot) {
      setErrorMsg('Bitte wähle ein Zeitfenster für die Abgabe aus.');
      return false;
    }
    setErrorMsg(null);
    return true;
  };

  const validateStep3 = () => {
    if (!formData.fullName.trim()) {
      setErrorMsg('Bitte gib deinen vollständigen Namen ein.');
      return false;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMsg('Bitte gib mindestens eine Telefonnummer oder E-Mail-Adresse für Rückfragen an.');
      return false;
    }
    if (!formData.privacyAgreed) {
      setErrorMsg('Bitte bestätige kurz die Datenschutzerklärung.');
      return false;
    }
    setErrorMsg(null);
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) setCurrentStep(2);
    else if (currentStep === 2 && validateStep2()) setCurrentStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    // Generate random booking ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const bookingId = `WATT-${new Date().getFullYear()}-${randomSuffix}`;

    const confirmed: ConfirmedBooking = {
      ...formData,
      bookingId,
      createdAt: new Date().toISOString(),
      serviceName: selectedService.name,
      servicePrice: selectedService.price,
      serviceDuration: selectedService.duration,
      status: 'confirmed',
    };

    setConfirmedBooking(confirmed);
    try {
      localStorage.setItem('wattrad_last_booking', JSON.stringify(confirmed));
    } catch {
      // Ignore storage errors
    }
    setCurrentStep(4);
  };

  // Generate WhatsApp message URL
  const getWhatsAppUrl = () => {
    if (!confirmedBooking) return '#';
    const text = `Moin Klaus! Hier ist ${confirmedBooking.fullName}.
Ich habe soeben einen Werkstatt-Termin für WattRad Emden angefragt:

📋 Buchungs-Nr.: ${confirmedBooking.bookingId}
🛠️ Leistung: ${confirmedBooking.serviceName} (${confirmedBooking.servicePrice})
🚲 Fahrrad: ${confirmedBooking.bikeBrand || 'Rad'} ${confirmedBooking.bikeModel || ''} (${confirmedBooking.bikeType})
📅 Wunschtermin: ${confirmedBooking.date} um ${confirmedBooking.timeSlot}
📞 Tel: ${confirmedBooking.phone || '–'}
💬 Notiz: ${confirmedBooking.issueDescription || confirmedBooking.notes || 'Keine Notiz'}

Passt der Termin bei euch in der Werkstatt? Beste Grüße!`;

    const phoneClean = BUSINESS_INFO.contact.whatsapp.replace(/[^0-9]/g, '');
    return `https://wa.me/${phoneClean}?text=${encodeURIComponent(text)}`;
  };

  // Generate .ics calendar download
  const downloadIcsFile = () => {
    if (!confirmedBooking) return;
    const [year, month, day] = confirmedBooking.date.split('-');
    const startDateStr = `${year}${month}${day}T090000`;
    const endDateStr = `${year}${month}${day}T100000`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//WattRad Emden//Werkstatt Termin//DE',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${confirmedBooking.bookingId}@wattrad-emden.de`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${startDateStr}`,
      `DTEND:${endDateStr}`,
      `SUMMARY:Fahrrad-Abgabe bei WattRad Emden (${confirmedBooking.serviceName})`,
      `DESCRIPTION:Werkstatt-Termin bei Klaus Saarholz für ${confirmedBooking.serviceName}. Buchungs-Nr: ${confirmedBooking.bookingId}. Bei Fragen: 04921 99 74 120`,
      'LOCATION:WattRad, Brückstraße 65, 26725 Emden',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `wattrad-termin-${confirmedBooking.bookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="buchung" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Werkstatt-Termin online anfragen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            In 3 einfachen Schritten zum Werkstatt-Termin
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Wähle deine Leistung, einen passenden Abgabetag und schicke deine Anfrage direkt zu Klaus in die Werkstatt.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
          
          {/* Step Progress Indicator (when not yet confirmed) */}
          {currentStep < 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-between max-w-md mx-auto">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                      currentStep >= 1
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    1
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 mt-1.5">Leistung & Rad</span>
                </div>

                <div
                  className={`flex-1 h-1 mx-2 rounded-full transition-colors ${
                    currentStep >= 2 ? 'bg-emerald-600' : 'bg-slate-200'
                  }`}
                />

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                      currentStep >= 2
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    2
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 mt-1.5">Termin</span>
                </div>

                <div
                  className={`flex-1 h-1 mx-2 rounded-full transition-colors ${
                    currentStep >= 3 ? 'bg-emerald-600' : 'bg-slate-200'
                  }`}
                />

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                      currentStep >= 3
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    3
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 mt-1.5">Kontaktdaten</span>
                </div>

              </div>
            </div>
          )}

          {/* Validation Error Message */}
          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-800 text-xs sm:text-sm animate-in fade-in">
              <AlertCircleIcon className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* ================= STEP 1: SERVICE & BIKE ================= */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  1. Gewünschte Werkstattleistung wählen:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WORKSHOP_SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceId: s.id })}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        formData.serviceId === s.id
                          ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-600/20'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900">{s.name}</span>
                        <span className="text-xs font-black text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">
                          {s.price}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{s.shortDescription}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  2. Fahrradtyp auswählen:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {bikeTypeOptions.map((opt) => (
                    <button
                      key={opt.type}
                      type="button"
                      onClick={() => setFormData({ ...formData, bikeType: opt.type })}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                        formData.bikeType === opt.type
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span className="text-base">{opt.icon}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bikeBrand" className="block text-xs font-bold text-slate-800 mb-1">
                    Marke (z. B. Gazelle, Kalkhoff, Cube, Canyon)
                  </label>
                  <input
                    id="bikeBrand"
                    type="text"
                    placeholder="z. B. Gazelle"
                    value={formData.bikeBrand}
                    onChange={(e) => setFormData({ ...formData, bikeBrand: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="bikeModel" className="block text-xs font-bold text-slate-800 mb-1">
                    Modell / Besonderheit (optional)
                  </label>
                  <input
                    id="bikeModel"
                    type="text"
                    placeholder="z. B. Arroyo C7 HMB"
                    value={formData.bikeModel}
                    onChange={(e) => setFormData({ ...formData, bikeModel: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="issueDesc" className="block text-xs font-bold text-slate-800 mb-1">
                  Was macht das Rad? Gibt es Auffälligkeiten? (optional)
                </label>
                <textarea
                  id="issueDesc"
                  rows={2}
                  placeholder="z. B. Hinterradbremse quietscht, Kette springt im 4. Gang ab, E-Bike Display zeigt Fehlercode..."
                  value={formData.issueDescription}
                  onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all cursor-pointer shadow-sm"
                >
                  <span>Weiter zu Schritt 2: Wunschtermin</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 2: DATE & TIME ================= */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Wähle deinen bevorzugten Abgabetag in der Brückstraße:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {availableDates.map((item) => (
                    <button
                      key={item.dateStr}
                      type="button"
                      onClick={() => setFormData({ ...formData, date: item.dateStr })}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.date === item.dateStr
                          ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-[11px] uppercase font-bold tracking-wider opacity-80">
                        {item.weekday}
                      </div>
                      <div className="text-base font-black mt-0.5">
                        {item.dateStr.split('-')[2]}.{item.dateStr.split('-')[1]}
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 mt-2">
                  Montags ist reiner Werkstatttag ohne Publikumsverkehr. Samstags 09:00 – 14:00 Uhr geöffnet.
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Bevorzugtes Zeitfenster zur Abgabe:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeSlot: slot.id })}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        formData.timeSlot === slot.id
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-600/20'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <ClockIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-xs sm:text-sm">{slot.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-emerald-900 text-xs leading-relaxed flex items-start gap-3">
                <CheckIcon className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Ausgewählte Leistung:</strong> {selectedService.name} ({selectedService.price})<br />
                  <strong>Dauer:</strong> {selectedService.duration} – Klaus prüft das Rad bei Abgabe und hält dich auf dem Laufenden.
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold"
                >
                  Zurück
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all cursor-pointer shadow-sm"
                >
                  <span>Weiter zu Schritt 3: Kontaktdaten</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 3: CONTACT DATA ================= */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold text-slate-800 mb-1">
                  Dein vollständiger Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="z. B. Max Mustermann"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-800 mb-1">
                    Telefon- / Mobilnummer (für WhatsApp & Rückfragen) *
                  </label>
                  <div className="relative">
                    <PhoneIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="z. B. 0171 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-800 mb-1">
                    E-Mail-Adresse (für Bestätigung)
                  </label>
                  <div className="relative">
                    <MailIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      id="email"
                      type="email"
                      placeholder="z. B. max@example.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-bold text-slate-800 mb-1">
                  Zusätzliche Wünsche oder Anmerkungen (optional)
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  placeholder="z. B. Bitte auch Licht prüfen, brauche mein Rad bis Freitag..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Privacy Consent */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.privacyAgreed}
                    onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs text-slate-600 leading-normal">
                    Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Terminanfrage verarbeitet werden. Keine Werbung, keine Weitergabe an Dritte.
                  </span>
                </label>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold"
                >
                  Zurück
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all cursor-pointer shadow-md shadow-emerald-600/20"
                >
                  <CheckIcon className="w-5 h-5" />
                  <span>Termin verbindlich anfragen</span>
                </button>
              </div>
            </form>
          )}

          {/* ================= STEP 4: CONFIRMATION ================= */}
          {currentStep === 4 && confirmedBooking && (
            <div className="text-center py-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Vielen Dank, {confirmedBooking.fullName}!
              </h3>
              <p className="text-slate-600 text-sm mt-1 max-w-md mx-auto">
                Deine Terminanfrage für <strong>WattRad Emden</strong> ist erfolgreich eingegangen.
              </p>

              {/* Booking Reference Box */}
              <div className="my-6 p-5 rounded-2xl bg-white border border-slate-200 text-left max-w-md mx-auto shadow-xs">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-xs text-slate-500">Deine Buchungs-Nr.:</span>
                  <span className="font-mono font-bold text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-800">
                    {confirmedBooking.bookingId}
                  </span>
                </div>
                <div className="py-2.5 space-y-1.5 text-xs text-slate-700">
                  <div>
                    <span className="text-slate-500">Leistung:</span> <strong>{confirmedBooking.serviceName}</strong> ({confirmedBooking.servicePrice})
                  </div>
                  <div>
                    <span className="text-slate-500">Wunschtermin:</span> <strong>{confirmedBooking.date}</strong> ({confirmedBooking.timeSlot})
                  </div>
                  <div>
                    <span className="text-slate-500">Ort:</span> <strong>WattRad, Brückstraße 65, 26725 Emden</strong>
                  </div>
                </div>
              </div>

              {/* Direct Actions: WhatsApp & Calendar Download */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Direkt per WhatsApp bestätigen</span>
                </a>

                <button
                  onClick={downloadIcsFile}
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <DownloadIcon className="w-4 h-4 text-slate-600" />
                  <span>In Kalender (.ics)</span>
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setConfirmedBooking(null);
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium underline"
                >
                  Weiteren Termin buchen
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
