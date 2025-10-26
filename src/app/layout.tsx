import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets:["devanagari"]
});

export const metadata: Metadata = {
  title: "OSCG",
  description: "Website for Open Source Connect Global",
  icons:{
    icon:"/logo1.png"
  }
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
