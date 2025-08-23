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
  title: "한수 포트폴리오 - 사이버 보안 전문가",
  description: "사이버 보안, 모의해킹, 정보보호 전문가 한수의 포트폴리오입니다. 웹 개발 프로젝트와 보안 기술을 소개합니다.",
  keywords: "포트폴리오, 사이버보안, 모의해킹, 정보보호, 웹개발, React, Next.js, TypeScript",
  authors: [{ name: "한수" }],
  creator: "한수",
  publisher: "한수",
  metadataBase: new URL('https://www.hansu2040.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "한수 포트폴리오 - 사이버 보안 전문가",
    description: "사이버 보안, 모의해킹, 정보보호 전문가 한수의 포트폴리오입니다. 웹 개발 프로젝트와 보안 기술을 소개합니다.",
    url: 'https://www.hansu2040.com',
    siteName: '한수 포트폴리오',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: "한수 포트폴리오 - 사이버 보안 전문가",
    description: "사이버 보안, 모의해킹, 정보보호 전문가 한수의 포트폴리오입니다.",
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
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
