import type { Metadata } from "next";
import { Manrope, Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Forev Tekstil",
  description: "Forev Tekstil | Ev Tekstili Üreticisi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={cn("font-sans", geist.variable)}>
      <body className={manrope.className}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HSPZVHQRQV"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HSPZVHQRQV');
          `}
        </Script>
      </body>
    </html>
  );
}