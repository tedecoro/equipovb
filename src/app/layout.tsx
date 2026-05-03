import type { Metadata } from "next";
import { Manrope } from 'next/font/google'
import './assets/scss/tailwind.scss'
import './assets/css/material.css'
import WhatsappBtn from "./components/whatsapp-btn";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})


export const metadata: Metadata = {
  title: {
    default: "Equipo VB - Administración de Consorcios y Propiedades",
    template: "%s | Equipo VB"
  },
  description: "Administración profesional de consorcios, countries y propiedades en CABA y Provincia de Buenos Aires. Matrícula habilitada, atención 24/7 y equipo interdisciplinario.",
  keywords: [
    "administración de consorcios",
    "countries",
    "barrios privados",
    "propiedades",
    "CABA",
    "Buenos Aires",
    "expensas",
    "gestión inmobiliaria",
    "administrador de consorcios",
    "liquidación de expensas",
    "mantenimiento de edificios",
    "Zona Oeste",
    "Vicente López",
    "Villa Crespo",
    "Caballito",
    "Olivos"
  ],
  authors: [{ name: "Equipo VB" }],
  creator: "Equipo VB",
  publisher: "Equipo VB",
  metadataBase: new URL("https://equipovb.com.ar"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Equipo VB - Administración de Consorcios y Propiedades",
    description: "Administración profesional de consorcios, countries y propiedades. Matrícula habilitada en CABA y Provincia de Buenos Aires. Atención 24/7.",
    url: "https://equipovb.com.ar",
    siteName: "Equipo VB",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo VB - Administración de Consorcios",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipo VB - Administración de Consorcios y Propiedades",
    description: "Administración profesional de consorcios y propiedades. Matrícula habilitada en CABA y Provincia de Buenos Aires.",
    images: ["/images/og-image.jpg"],
    creator: "@equipovb",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Real Estate",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#059669',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Equipo VB",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  itunes: {
    appId: "",
    appArgument: "",
  },
  other: {
    'msapplication-TileColor': '#059669',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#059669',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light scroll-smooth overflow-x-hidden" dir="ltr">
      <body
        className={`${manrope.variable} font-manrope text-base text-slate-900 dark:text-white dark:bg-slate-900 overflow-x-hidden w-full`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://equipovb.com.ar/#organization",
                  name: "Equipo VB",
                  url: "https://equipovb.com.ar",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://equipovb.com.ar/favicon.svg",
                    width: 512,
                    height: 512,
                  },
                  sameAs: [
                    "https://wa.me/5491140487780",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+54-9-11-4048-7780",
                    contactType: "customer service",
                    areaServed: "AR",
                    availableLanguage: ["Spanish"],
                  },
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://equipovb.com.ar/#localbusiness",
                  name: "Equipo VB - Administración de Consorcios",
                  image: "https://equipovb.com.ar/images/og-image.jpg",
                  url: "https://equipovb.com.ar",
                  telephone: "+54-9-11-4048-7780",
                  email: "info@equipovb.com.ar",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Padilla 869 4C",
                    addressLocality: "Villa Crespo",
                    addressRegion: "CABA",
                    postalCode: "C1414",
                    addressCountry: "AR",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -34.59828,
                    longitude: -58.43852,
                  },
                  openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "09:00",
                    closes: "18:00",
                  },
                  priceRange: "$$",
                  areaServed: {
                    "@type": "City",
                    name: "Buenos Aires",
                  },
                  serviceType: [
                    "Administración de consorcios",
                    "Gestión de propiedades",
                    "Administración de countries",
                    "Barrios privados",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://equipovb.com.ar/#website",
                  url: "https://equipovb.com.ar",
                  name: "Equipo VB",
                  description: "Administración profesional de consorcios y propiedades",
                  publisher: {
                    "@id": "https://equipovb.com.ar/#organization",
                  },
                },
              ],
            }),
          }}
        />
        <div className="overflow-x-hidden w-full">
          {children}
          <WhatsappBtn/>
        </div>
      </body>
    </html>
  );
}
