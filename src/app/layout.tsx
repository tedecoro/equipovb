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
  title: "Equipo VB - Administración de Consorcios y Propiedades",
  description: "Administración profesional de consorcios, countries y propiedades en CABA y Provincia de Buenos Aires. Matrícula habilitada, atención 24/7 y equipo interdisciplinario.",
  keywords: ["administración de consorcios", "countries", "barrios privados", "propiedades", "CABA", "Buenos Aires", "expensas", "gestión inmobiliaria"],
  authors: [{ name: "Equipo VB" }],
  creator: "Equipo VB",
  openGraph: {
    title: "Equipo VB - Administración de Consorcios y Propiedades",
    description: "Administración profesional de consorcios, countries y propiedades. Matrícula habilitada en CABA y Provincia de Buenos Aires.",
    url: "https://equipovb.com.ar",
    siteName: "Equipo VB",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
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
        <div className="overflow-x-hidden w-full">
          {children}
          <WhatsappBtn/>
        </div>
      </body>
    </html>
  );
}
