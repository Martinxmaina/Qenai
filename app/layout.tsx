import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidgetWrapper } from "@/components/ChatWidgetWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "QENAI - AI Automation Agency Kenya | Workflow Automation & Custom AI Models",
  description: "Kenya's premier AI automation agency. We deliver AI workflow automation, AI readiness audits, and custom AI models for African businesses. Transform your operations with business process automation AI.",
  keywords: [
    "AI automation agency Kenya",
    "AI workflow automation",
    "AI readiness audit",
    "Custom AI models Africa",
    "Business process automation AI",
    "Enterprise AI Kenya",
    "AI consulting Nairobi",
    "workflow automation Africa",
    "AI solutions East Africa",
    "machine learning Kenya"
  ],
  authors: [{ name: "QENAI Technologies" }],
  creator: "QENAI",
  publisher: "QENAI Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://qenai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "QENAI - AI Automation Agency Kenya",
    description: "Kenya's premier AI automation agency. Transform your business with AI workflow automation, readiness audits, and custom AI models.",
    url: "https://qenai.com",
    siteName: "QENAI",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QENAI - AI Automation Agency Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QENAI - AI Automation Agency Kenya",
    description: "Transform your business with AI workflow automation, readiness audits, and custom AI models.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

// Organization Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "QENAI",
  alternateName: "QENAI Technologies",
  description: "AI automation agency in Kenya specializing in workflow automation, AI readiness audits, and custom AI models for African businesses.",
  url: "https://qenai.com",
  logo: "https://qenai.com/favicon.svg",
  sameAs: [
    "https://linkedin.com/company/qenai",
    "https://twitter.com/qenai"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE"
  },
  areaServed: [
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -1.2921,
        longitude: 36.8219
      },
      geoRadius: "5000"
    },
    "Africa",
    "East Africa",
    "Kenya"
  ],
  foundingDate: "2023",
  slogan: "Quest for the Next AI",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Workflow Automation",
    "Business Process Automation",
    "AI Consulting",
    "Custom AI Models"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Readiness Audit",
          description: "Comprehensive assessment of your organization's AI readiness"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Workflow Automation",
          description: "Automate business processes using AI technology"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom AI Models",
          description: "Bespoke AI model development for African businesses"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6Y5EHT3TSR"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6Y5EHT3TSR');
            `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <Header />
        {children}
        <Footer />
        <ChatWidgetWrapper />
      </body>
    </html>
  );
}
