'use client';

import React, { useEffect } from 'react';
import { XMarkIcon, ShieldCheckIcon } from './Icons';
import { BUSINESS_INFO } from '@/data/business';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'impressum' | 'datenschutz';
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-black text-slate-900">
              {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung (DSGVO)'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
          {type === 'impressum' ? (
            <>
              <h4 className="font-bold text-base text-slate-900">Angaben gemäß § 5 TMG</h4>
              <p>
                <strong>{BUSINESS_INFO.legalName}</strong><br />
                Inhaber: {BUSINESS_INFO.owner}<br />
                {BUSINESS_INFO.address.street}<br />
                {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
              </p>

              <h4 className="font-bold text-base text-slate-900 pt-2">Kontakt</h4>
              <p>
                Telefon: {BUSINESS_INFO.contact.phone}<br />
                WhatsApp: {BUSINESS_INFO.contact.whatsappFormatted}<br />
                E-Mail: {BUSINESS_INFO.contact.email}
              </p>

              <h4 className="font-bold text-base text-slate-900 pt-2">Berufsbezeichnung & Kammer</h4>
              <p>
                Berufsbezeichnung: Zweiradmechaniker (verliehen in der Bundesrepublik Deutschland)<br />
                Zuständige Kammer: Handwerkskammer für Ostfriesland, Straße des Handwerks 2, 26603 Aurich
              </p>

              <h4 className="font-bold text-base text-slate-900 pt-2">Verbraucherstreitbeilegung</h4>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h4 className="font-bold text-base text-slate-900 pt-2">Haftung für Inhalte und Links</h4>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Für externe Links übernehmen wir trotz sorgfältiger inhaltlicher Kontrolle keine Haftung.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-base text-slate-900">1. Datenschutz auf einen Blick</h4>
              <p>
                Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Diese Website arbeitet nach dem Prinzip der Datensparsamkeit:{' '}
                <strong>Keine Tracking-Cookies, keine Werbebanner, keine Weitergabe an Dritte.</strong>
              </p>

              <h4 className="font-bold text-base text-slate-900 pt-2">2. Verantwortliche Stelle</h4>
              <p>
                {BUSINESS_INFO.legalName}<br />
                Inhaber: {BUSINESS_INFO.owner}<br />
                {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}<br />
                E-Mail: {BUSINESS_INFO.contact.email}
              </p>

              <h4 className="font-bold text-base text-slate-900 pt-2">3. Datenerfassung bei Terminanfragen</h4>
              <p>
                Wenn du unser Werkstatt-Formular oder Kontaktformular nutzt, werden deine übermittelten Daten (Name, Telefonnummer, E-Mail-Adresse, Angaben zum Fahrrad) ausschließlich zur Bearbeitung und Beantwortung deiner Terminanfrage bei WattRad Emden verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>

              <h4 className="font-bold text-base text-slate-900 pt-2">4. Keine Drittanbieter-Fonts oder CDNs</h4>
              <p>
                Alle Schriftarten und Systemskripte werden lokal von unserem Server ausgeliefert. Es erfolgt keine Datenübertragung an Google Fonts oder externe CDN-Netzwerke in Drittstaaten.
              </p>

              <h4 className="font-bold text-base text-slate-900 pt-2">5. Deine Rechte</h4>
              <p>
                Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
