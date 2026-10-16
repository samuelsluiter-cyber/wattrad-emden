'use client';

import React, { useState, useEffect } from 'react';

export function LiveStatusBadge() {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    text: string;
    subtext?: string;
    variant: 'open' | 'pause' | 'closed';
  }>({
    isOpen: false,
    text: 'Öffnungszeiten prüfen...',
    variant: 'closed',
  });

  useEffect(() => {
    function computeStatus() {
      // Create date in Europe/Berlin timezone
      const now = new Date();
      const berlinerTime = new Date(
        now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' })
      );

      const day = berlinerTime.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, ..., 6 = Sat
      const hours = berlinerTime.getHours();
      const minutes = berlinerTime.getMinutes();
      const currentTime = hours * 60 + minutes;

      // Tuesday to Friday: 09:00 - 13:00 and 14:00 - 18:00
      if (day >= 2 && day <= 5) {
        if (currentTime >= 9 * 60 && currentTime < 13 * 60) {
          setStatus({
            isOpen: true,
            text: 'Jetzt geöffnet',
            subtext: 'bis 13:00 Uhr (Pause bis 14:00)',
            variant: 'open',
          });
          return;
        }
        if (currentTime >= 13 * 60 && currentTime < 14 * 60) {
          setStatus({
            isOpen: false,
            text: 'Mittagspause',
            subtext: 'öffnet wieder um 14:00 Uhr',
            variant: 'pause',
          });
          return;
        }
        if (currentTime >= 14 * 60 && currentTime < 18 * 60) {
          setStatus({
            isOpen: true,
            text: 'Jetzt geöffnet',
            subtext: 'bis 18:00 Uhr',
            variant: 'open',
          });
          return;
        }
        if (currentTime < 9 * 60) {
          setStatus({
            isOpen: false,
            text: 'Öffnet heute um 09:00 Uhr',
            subtext: 'Brückstraße 65',
            variant: 'closed',
          });
          return;
        }
        // After 18:00
        const nextDayName = day === 5 ? 'morgen (Sa) um 09:00 Uhr' : 'morgen um 09:00 Uhr';
        setStatus({
          isOpen: false,
          text: 'Geschlossen',
          subtext: `öffnet ${nextDayName}`,
          variant: 'closed',
        });
        return;
      }

      // Saturday: 09:00 - 14:00
      if (day === 6) {
        if (currentTime >= 9 * 60 && currentTime < 14 * 60) {
          setStatus({
            isOpen: true,
            text: 'Jetzt geöffnet',
            subtext: 'bis 14:00 Uhr',
            variant: 'open',
          });
          return;
        }
        if (currentTime < 9 * 60) {
          setStatus({
            isOpen: false,
            text: 'Öffnet heute um 09:00 Uhr',
            subtext: 'bis 14:00 Uhr',
            variant: 'closed',
          });
          return;
        }
        setStatus({
          isOpen: false,
          text: 'Wochenende',
          subtext: 'öffnet Dienstag um 09:00 Uhr',
          variant: 'closed',
        });
        return;
      }

      // Sunday (0)
      if (day === 0) {
        setStatus({
          isOpen: false,
          text: 'Sonntag Ruhetag',
          subtext: 'Di ab 09:00 Uhr wieder da',
          variant: 'closed',
        });
        return;
      }

      // Monday (1) - Intensive workshop day
      if (day === 1) {
        setStatus({
          isOpen: false,
          text: 'Montag Werkstatttag',
          subtext: 'Ladenverkauf öffnet Di 09:00 Uhr',
          variant: 'pause',
        });
        return;
      }
    }

    computeStatus();
    const interval = setInterval(computeStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border shadow-xs transition-colors ${
        status.variant === 'open'
          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
          : status.variant === 'pause'
          ? 'bg-amber-50 text-amber-800 border-amber-200'
          : 'bg-slate-100 text-slate-700 border-slate-200'
      }`}
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-2 w-2">
        {status.variant === 'open' && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            status.variant === 'open'
              ? 'bg-emerald-600'
              : status.variant === 'pause'
              ? 'bg-amber-500'
              : 'bg-slate-400'
          }`}
        />
      </span>
      <span className="font-semibold">{status.text}</span>
      {status.subtext && (
        <span className="text-[11px] opacity-80 hidden sm:inline">({status.subtext})</span>
      )}
    </div>
  );
}
