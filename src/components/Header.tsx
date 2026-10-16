'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { LiveStatusBadge } from './LiveStatusBadge';
import { PhoneIcon, CalendarIcon, MenuIcon, XMarkIcon } from './Icons';
import { BUSINESS_INFO } from '@/data/business';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Leistungen & Preise', href: '#leistungen' },
    { label: 'Werkstatt-Termin', href: '#buchung' },
    { label: 'Über Klaus & Team', href: '#ueber-uns' },
    { label: 'Dienstrad-Leasing', href: '#leasing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Anfahrt & Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      {/* Top Banner with Local Status & Store Address */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg">
            <Logo variant="full" />
          </a>

          {/* Desktop Live Badge & Direct Call */}
          <div className="hidden lg:flex items-center gap-4">
            <LiveStatusBadge />

            <div className="h-6 w-px bg-slate-200" aria-hidden="true" />

            <a
              href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 transition-colors py-1.5 px-3 rounded-full bg-slate-50 border border-slate-200/60"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span>{BUSINESS_INFO.contact.phone}</span>
            </a>

            <button
              onClick={onOpenBooking || (() => {
                const el = document.getElementById('buchung');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              })}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <CalendarIcon className="w-4 h-4" />
              <span>Termin buchen</span>
            </button>
          </div>

          {/* Mobile Actions: Live badge + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
              className="p-2 text-slate-700 hover:text-emerald-600 rounded-lg bg-slate-100"
              aria-label="Klaus anrufen"
            >
              <PhoneIcon className="w-4 h-4 text-emerald-600" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-600 rounded-lg bg-slate-100 focus:outline-none"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Secondary Navigation Bar */}
        <nav className="hidden lg:flex items-center justify-between border-t border-slate-100 mt-2.5 pt-2">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-emerald-600 transition-colors py-1 block text-xs tracking-wide uppercase font-semibold text-slate-600 hover:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="text-xs text-slate-500 font-medium">
            Brückstraße 65, 26725 Emden • Inhaber Klaus Saarholz
          </span>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
          <div className="pb-3 border-b border-slate-100">
            <LiveStatusBadge />
          </div>

          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) {
                  onOpenBooking();
                } else {
                  const el = document.getElementById('buchung');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
            >
              <CalendarIcon className="w-4 h-4" />
              <span>Werkstatt-Termin vereinbaren</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg"
            >
              <PhoneIcon className="w-4 h-4 text-emerald-600" />
              <span>{BUSINESS_INFO.contact.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
