import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fungalia Lab - Mushroom Science for Sustainability",
  description: "Leading mushroom research and cultivation for sustainable solutions. Scientific study and innovation in fungal biotechnology.",
  keywords: [
    "mushroom biotechnology",
    "sustainable science", 
    "mycelium research",
    "fungal biotechnology",
    "sustainable materials",
    "mushroom cultivation",
    "biotechnology innovation",
    "fungalia lab",
    "sustainable products",
    "mushroom science"
  ],
  authors: [{ name: "Fungalia Lab" }],
  creator: "Fungalia Lab",
  publisher: "Fungalia Lab",
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
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'pt_BR',
    url: 'https://fungalia.lab',
    siteName: 'Fungalia Lab',
    title: 'Fungalia Lab - Mushroom Science for Sustainability',
    description: 'Leading mushroom research and cultivation for sustainable solutions. Scientific study and innovation in fungal biotechnology.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fungalia Lab - Mushroom Biotechnology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fungalia Lab - Mushroom Science for Sustainability',
    description: 'Leading mushroom research and cultivation for sustainable solutions.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://fungalia.lab',
    languages: {
      'en': 'https://fungalia.lab?lang=en',
      'pt': 'https://fungalia.lab?lang=pt',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://fungalia.lab" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Fungalia Lab",
              "description": "Leading mushroom research and cultivation for sustainable solutions",
              "url": "https://fungalia.lab",
              "logo": "https://fungalia.lab/logo.png",
              "sameAs": [
                "https://www.instagram.com/fungalia.lab/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@fungalia.lab"
              },
              "areaServed": "Worldwide",
              "knowsAbout": [
                "Mushroom Biotechnology",
                "Sustainable Science",
                "Mycelium Research",
                "Fungal Biotechnology"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
