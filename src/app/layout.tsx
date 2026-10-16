import type { Metadata } from 'next';
import './globals.css';
import { BUSINESS_INFO } from '@/data/business';

export const metadata: Metadata = {
  title: 'WattRad Emden • Fahrradwerkstatt & E-Bike Service | Klaus Saarholz',
  description:
    'Deine Meisterwerkstatt in der Emder Innenstadt (Brückstraße 65). Reparaturen aller Marken, E-Bike Software-Check, Dienstrad-Leasing (JobRad), BikeFitting & Sofort-Pannenhilfe.',
  keywords: [
    'Fahrradladen Emden',
    'Fahrradwerkstatt Emden',
    'E-Bike Reparatur Emden',
    'WattRad',
    'Klaus Saarholz',
    'Brückstraße Emden',
    'Dinus Voß Nachfolge',
    'JobRad Inspektion Emden',
    'BikeFitting Emden',
    'Fahrradschlauch wechseln Emden',
  ],
  authors: [{ name: 'Klaus Saarholz' }, { name: 'Samuel Sluiter' }],
  creator: 'Samuel Sluiter',
  publisher: 'WattRad Emden',
  metadataBase: new URL('https://wattrad-emden.de'),
  openGraph: {
    title: 'WattRad Emden • Fahrradwerkstatt & E-Bike Service | Klaus Saarholz',
    description:
      'Fast 25 Jahre Meister-Praxis in der Brückstraße 65. Schnelle Reparaturen aller Marken, E-Bikes, JobRad-Leasing und BikeFitting in Emden.',
    url: 'https://wattrad-emden.de',
    siteName: 'WattRad Emden',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/images/klaus_heike_wattrad_original.jpg',
        width: 1200,
        height: 675,
        alt: 'Klaus Saarholz und Heike Paulsen-Paulig vor WattRad in Emden',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BikeStore',
    name: 'WattRad Emden',
    legalName: BUSINESS_INFO.legalName,
    description:
      'Fachwerkstatt für Fahrräder und E-Bikes in der Emder Innenstadt. Reparaturen aller Marken, Leasing-Inspektionen und Zubehör.',
    image: 'https://wattrad-emden.de/images/klaus_heike_wattrad_original.jpg',
    telephone: BUSINESS_INFO.contact.phone,
    email: BUSINESS_INFO.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.coordinates.lat,
      longitude: BUSINESS_INFO.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '14:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '€€',
    paymentAccepted: 'Cash, Credit Card, EC-Card',
    founder: {
      '@type': 'Person',
      name: 'Klaus Saarholz',
      jobTitle: 'Zweiradmechaniker',
    },
  };

  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#fbfbfa] text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
