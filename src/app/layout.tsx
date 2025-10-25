import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSCG",
  description: "Website for Open Source Connect Global",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true}
        className={`${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
