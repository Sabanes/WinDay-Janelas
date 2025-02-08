import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';

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

// OpenWidget configuration
const openWidgetConfig = `
  window.__ow = window.__ow || {};
  window.__ow.organizationId = "f6353c6b-ad3f-4a2a-b586-9959984bb5c7";
  window.__ow.integration_name = "manual_share_page";
  window.__ow.product_name = "openwidget";   
  ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
`;

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
        <Script id="openwidget-config" strategy="afterInteractive">
          {openWidgetConfig}
        </Script>
        <noscript>
          You need to <a href="https://www.openwidget.com/enable-javascript" rel="noopener nofollow">
            enable JavaScript
          </a> to use the communication tool powered by{' '}
          <a href="https://www.openwidget.com/" rel="noopener nofollow" target="_blank">
            OpenWidget
          </a>
        </noscript>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}