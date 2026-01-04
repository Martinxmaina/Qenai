import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QENAI - Enterprise AI Solutions for African Businesses",
  description: "Enterprise-grade AI automation and intelligent solutions tailored for African businesses. From workflow audits to custom AI deployment, we turn operational challenges into competitive advantages.",
  keywords: ["AI", "Enterprise AI", "Machine Learning", "AI Readiness", "AI Audit", "African AI", "East Africa", "Nairobi", "workflow automation", "AI automation", "AI consulting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
