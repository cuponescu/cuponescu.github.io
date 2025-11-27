import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuponescu - Colecție Coduri de Reducere",
  description: "Pachete NPM open-source cu coduri de reducere pentru cele mai populare magazine online din România. Creat de echipa Cuponescu.",
  keywords: ["coduri reducere", "cupoane", "voucher", "romania", "npm", "open source", "cod reducere", "cod promotional"],
  authors: [{ name: "Cuponescu", url: "https://cuponescu.ro" }],
  metadataBase: new URL("https://cuponescu.github.io"),
  alternates: {
    canonical: "https://cuponescu.github.io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Cuponescu - Colecție Coduri de Reducere",
    description: "Pachete NPM open-source cu coduri de reducere pentru cele mai populare magazine online din România.",
    url: "https://cuponescu.github.io",
    siteName: "Cuponescu",
    type: "website",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuponescu - Colecție Coduri de Reducere",
    description: "Pachete NPM open-source cu coduri de reducere pentru cele mai populare magazine online din România.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
