import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const siteTitle = "QENAI | AI Automation Agency Kenya";
const siteDescription =
  "QENAI helps businesses across Kenya and East Africa save time, cut costs, and scale faster with custom AI systems and workflow automation, built on our Audit, Build, Integrate approach.";

export const metadata: Metadata = {
  metadataBase: new URL("https://qenai.com"),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qenai.com",
    siteName: "QENAI",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/qenai-logo.png",
        width: 500,
        height: 500,
        alt: "QENAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/qenai-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} bg-slate-900 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
