# 🚲 WattRad Emden – Offizielle Website & Buchungssystem

> **Dein Fahrrad in Meisterhand. Mitten in Emden.**  
> Offizieller Webauftritt für das Fachgeschäft **WattRad** in der Brückstraße 65, 26725 Emden (Inhaber: Klaus Saarholz & Heike Paulsen-Paulig).

---

## 🌟 Highlights & Features

- **Echte Schaufenster-Identität:**
  - Originales Signalgrün/Graphit-Branding mit echtem Logo-Badge (`WATT RAD`).
  - Schaufenster-Leistungen: *Leasing & Leasing-Inspektion, Verkauf, Vermittlung, BikeFitting, Wartung & Reparatur, Bike Cleaning mit Versiegelung*.
  - Echte Emder Zitate & Humor: *„Ich dreh am Rad“*, *„Ingang“* (Plattdeutsch), *„Hätte, hätte Fahrradkette“*.
  - Echtes Eröffnungsfoto von Klaus Saarholz und Heike vor dem Laden in der Brückstraße.
- **Interaktiver 3-Schritte-Werkstatt-Assistent (`BookingWizard`):**
  - Schritt 1: Leistung & Fahrradtyp wählen (E-Bike, Trekkingrad, MTB, Gravel, Lastenrad) + Problembeschreibung.
  - Schritt 2: Abgabetag (Dienstag bis Samstag) & Zeitfenster wählen.
  - Schritt 3: Kontaktdaten angeben & verbindlich anfragen.
  - **Direkte WhatsApp-Übergabe:** Ein Klick erzeugt eine vorformatierte Nachricht mit Buchungs-Nr. direkt an Klaus.
  - **Kalenderexport:** Sofortiger Download einer standardkonformen `.ics`-Kalenderdatei.
  - **Persistenz:** Gespeichert im Browser (`localStorage`).
- **Live-Öffnungszeiten-Badge (`LiveStatusBadge`):**
  - Dynamischer Status in Echtzeit (*„Jetzt geöffnet bis 18:00 Uhr“*, *„Mittagspause“*, *„Öffnet morgen um 09:00 Uhr“*, *„Mo: Reiner Werkstatttag“*).
- **Dienstrad-Leasing:**
  - Vollständige Integration aller Anbieter (JobRad, BusinessBike, Lease a Bike, Bikeleasing-Service, Deutsche Dienstrad).
- **Lokales SEO & Datenschutz (DSGVO):**
  - Vollständiges `LocalBusiness` / `BikeStore` Schema (JSON-LD) für Google Maps & Local SEO in Emden.
  - 100 % DSGVO-konform: Keine externen Font-CDNs, keine Tracking-Cookies, kein nerviges Cookie-Banner erforderlich.
  - Vollständiges Impressum & Datenschutzerklärung als modales Overlay.

---

## 🛠️ Tech-Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19 + Tailwind CSS v4
- **Sprache:** TypeScript
- **Deployment:** Vercel / Cloudflare Pages ready (Zero Config)

---

## 🚀 Entwicklung & Start

```bash
# Abhängigkeiten installieren
npm install

# Lokalen Entwicklungsserver starten
npm run dev

# Produktions-Build testen
npm run build

# Code-Linting prüfen
npm run lint
```

Im Browser öffnen: [http://localhost:3000](http://localhost:3000)

---

## 👤 Credits

Konzipiert, gestaltet und programmiert von **Samuel Sluiter** für das Fachgeschäft WattRad in Emden.
