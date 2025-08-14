import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import { ChatWidget } from "./components/chat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hansu Portfolio - 포트폴리오",
  description: "Full-stack developer portfolio showcasing web development projects and skills",
  keywords: "portfolio, web developer, full-stack, React, Next.js, TypeScript",
  authors: [{ name: "Hansu" }],
  creator: "Hansu",
  publisher: "Hansu",
  metadataBase: new URL('https://www.hansu2040.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hansu Portfolio - 포트폴리오",
    description: "Full-stack developer portfolio showcasing web development projects and skills",
    url: 'https://www.hansu2040.com',
    siteName: 'Hansu Portfolio',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hansu Portfolio - 포트폴리오",
    description: "Full-stack developer portfolio showcasing web development projects and skills",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white transition-colors
         dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
