'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TrustBar } from '@/components/TrustBar';
import { ServicesSection } from '@/components/ServicesSection';
import { BookingWizard } from '@/components/BookingWizard';
import { AboutSection } from '@/components/AboutSection';
import { LeasingSection } from '@/components/LeasingSection';
import { StorefrontSection } from '@/components/StorefrontSection';
import { FaqSection } from '@/components/FaqSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { LegalModal } from '@/components/LegalModal';

export default function Home() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    const el = document.getElementById('buchung');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfa] text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Top Navigation */}
      <Header onOpenBooking={() => scrollToBooking()} />

      <main className="flex-1">
        {/* 1. Hero Section with Real Storefront Image */}
        <HeroSection onOpenBooking={() => scrollToBooking()} />

        {/* 2. Trust Credentials Bar */}
        <TrustBar />

        {/* 3. Services & Window Offerings */}
        <ServicesSection onSelectService={(serviceId) => scrollToBooking(serviceId)} />

        {/* 4. Interactive 3-Step Workshop Booking Wizard */}
        <BookingWizard initialServiceId={selectedServiceId} />

        {/* 5. "Über uns" - Klaus Saarholz, Heike & Dinus-Voß Tradition */}
        <AboutSection />

        {/* 6. Corporate Dienstrad-Leasing (JobRad, BusinessBike etc.) */}
        <LeasingSection onSelectLeasingService={() => scrollToBooking('leasing-inspektion')} />

        {/* 7. Storefront Invitation & Authentic Quote */}
        <StorefrontSection />

        {/* 8. Frequently Asked Questions (Accordion) */}
        <FaqSection />

        {/* 9. Contact, Directions & Opening Hours */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModal(type)}
        onOpenBooking={() => scrollToBooking()}
      />

      {/* Impressum / Datenschutz Modal */}
      {legalModal && (
        <LegalModal
          isOpen={true}
          type={legalModal}
          onClose={() => setLegalModal(null)}
        />
      )}
    </div>
  );
}
