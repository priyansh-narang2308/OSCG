import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets:["greek"]
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
      <body suppressHydrationWarning={true} className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
