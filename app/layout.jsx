import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// Font configurations
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadata configuration
export const metadata = {
  metadataBase: new URL('https://windaypvc.pt'),
  title: {
    default: "Winday - Especialistas em Janelas Cortizo | Instalação Profissional",
    template: "%s | Winday"
  },
  description: "Especialistas na venda e instalação de janelas de metaloplástico Cortizo. Oferecemos soluções inovadoras e eficientes para residências e empresas em Portugal.",
  keywords: [
    "janelas Cortizo",
    "metaloplástico",
    "instalação de janelas",
    "eficiência energética",
    "janelas residenciais",
    "janelas comerciais",
    "Winday"
  ],
  authors: [{ name: "Winday" }],
  creator: "Winday",
  publisher: "Winday",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Winday - Especialistas em Janelas Cortizo",
    description: "Soluções inovadoras em janelas de metaloplástico Cortizo para sua casa ou negócio. Especialistas em instalação e eficiência energética.",
    url: 'https://windaypvc.pt',
    siteName: 'Winday',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: '/WindayKolyaOG.jpg',
        width: 1200,
        height: 630,
        alt: 'Winday - Especialistas em Janelas Cortizo',
      }
    ],
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
  alternates: {
    canonical: 'https://windaypvc.pt',
  },
  manifest: '/manifest.json',
};

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Winday',
  description: 'Especialistas na venda e instalação de janelas de metaloplástico Cortizo',
  image: '/logo.png',
  '@id': 'https://windaypvc.pt',
  url: 'https://windaypvc.pt',
  telephone: '+351932825464',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Manuel de Almeida e Vasconcelos Quinta do Barão 55',
    addressLocality: 'Carcavelos',
    postalCode: '2775-713',
    addressCountry: 'PT'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '38.68562',
    longitude: '-9.33891'
  },
  priceRange: '€€',
  areaServed: 'Portugal'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#344CB7" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}