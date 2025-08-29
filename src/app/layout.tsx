import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JUSTWYNN - Launch → Play → Holders Win",
  description: "The gamified launchpad where every launch fuels The House—and every milestone becomes a community win.",
  keywords: "DeFi, Solana, token launch, launchpad, gaming, casino, jackpots, crypto",
  authors: [{ name: "JUSTWYNN" }],
  openGraph: {
    title: "JUSTWYNN - Launch → Play → Holders Win",
    description: "The gamified launchpad where every launch fuels The House—and every milestone becomes a community win.",
    type: "website",
    siteName: "JUSTWYNN",
  },
  twitter: {
    card: "summary_large_image",
    title: "JUSTWYNN - Launch → Play → Holders Win",
    description: "The gamified launchpad where every launch fuels The House—and every milestone becomes a community win.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}
      >
        <NavbarWrapper />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
