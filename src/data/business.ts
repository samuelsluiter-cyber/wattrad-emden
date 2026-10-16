import { OpeningHourDay } from '@/types';

export const BUSINESS_INFO = {
  name: 'WattRad',
  legalName: 'WattRad Emden – Klaus Saarholz',
  owner: 'Klaus Saarholz',
  coPartner: 'Heike Paulsen-Paulig',
  tagline: 'Dein Fahrrad in Meisterhand – Mitten in Emden.',
  subline: 'Aus Liebe zum Rad. Vom Deich bis in die Innenstadt.',
  address: {
    street: 'Brückstraße 65',
    zip: '26725',
    city: 'Emden',
    country: 'Deutschland',
    region: 'Ostfriesland',
  },
  contact: {
    phone: '04921 99 74 120',
    phoneRaw: '+4949219974120',
    whatsapp: '+4915159048231', // WhatsApp Service-Nummer
    whatsappFormatted: '0151 590 48 231',
    email: 'moin@wattrad-emden.de',
  },
  coordinates: {
    lat: 53.3668,
    lng: 7.2062,
  },
  openingHoursFormatted: 'Di–Fr: 09:00–13:00 & 14:00–18:00 Uhr | Sa: 09:00–14:00 Uhr',
  emergencyInfo: 'Platter Reifen oder Kette gerissen? Komm einfach direkt in die Brückstraße – Notfallreparaturen schieben wir nach Möglichkeit sofort ein!',
};

export const OPENING_HOURS: OpeningHourDay[] = [
  {
    day: 'Montag',
    dayShort: 'Mo',
    hours: 'Reiner Werkstatttag (kein Ladenverkauf)',
    isOpen: false,
    isWorkshopOnly: true,
  },
  {
    day: 'Dienstag',
    dayShort: 'Di',
    hours: '09:00 – 13:00 & 14:00 – 18:00 Uhr',
    isOpen: true,
    morning: '09:00 - 13:00',
    afternoon: '14:00 - 18:00',
  },
  {
    day: 'Mittwoch',
    dayShort: 'Mi',
    hours: '09:00 – 13:00 & 14:00 – 18:00 Uhr',
    isOpen: true,
    morning: '09:00 - 13:00',
    afternoon: '14:00 - 18:00',
  },
  {
    day: 'Donnerstag',
    dayShort: 'Do',
    hours: '09:00 – 13:00 & 14:00 – 18:00 Uhr',
    isOpen: true,
    morning: '09:00 - 13:00',
    afternoon: '14:00 - 18:00',
  },
  {
    day: 'Freitag',
    dayShort: 'Fr',
    hours: '09:00 – 13:00 & 14:00 – 18:00 Uhr',
    isOpen: true,
    morning: '09:00 - 13:00',
    afternoon: '14:00 - 18:00',
  },
  {
    day: 'Samstag',
    dayShort: 'Sa',
    hours: '09:00 – 14:00 Uhr',
    isOpen: true,
    morning: '09:00 - 14:00',
  },
  {
    day: 'Sonntag',
    dayShort: 'So',
    hours: 'Geschlossen (Radeln am Deich)',
    isOpen: false,
  },
];

export const LEASING_PARTNERS = [
  {
    name: 'JobRad',
    badge: 'Offizieller Premium Partner',
    description: 'Das beliebteste Dienstrad-Leasing in Deutschland. Bis zu 40% sparen.',
  },
  {
    name: 'Bikeleasing-Service',
    badge: 'Zertifizierter Fachhändler',
    description: 'Einfache digitale Abwicklung mit erstklassigem Rundum-Schutz.',
  },
  {
    name: 'Lease a Bike',
    badge: 'Partnerbetrieb',
    description: 'Unkompliziertes E-Bike Leasing für Großunternehmen und KMU in Ostfriesland.',
  },
  {
    name: 'BusinessBike',
    badge: 'Service Partner',
    description: 'Volle Mobilität ohne Aufwand – inklusive jährlicher UVV-Inspektion bei uns.',
  },
  {
    name: 'Deutsche Dienstrad',
    badge: 'Partner',
    description: 'Nachhaltige Firmenmobilität und steuerbegünstigte Gehaltsumwandlung.',
  },
  {
    name: 'eurorad',
    badge: 'Service Point',
    description: 'Komfortables Dienstrad-Leasing inklusive umfassender Garantie-Optionen.',
  },
];
