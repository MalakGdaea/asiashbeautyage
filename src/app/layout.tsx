import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

const siteUrl =  "https://asiashbeautyage.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "عناية بالبشرة في رهط | Asiash Beauty Age",
    template: "%s | Asiash Beauty Age",
  },
  description: "عناية متقدمة بالبشرة والجمال",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "عناية بالبشرة في رهط | Asiash Beauty Age",
    description: "عناية متقدمة بالبشرة والجمال",
    url: "/",
    siteName: "Asiash Beauty Age",
    locale: "ar_IL",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Asiash Beauty Age Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteUrl}/og-image.jpg`],
    title: "عناية بالبشرة في رهط | Asiash Beauty Age",
    description: "عناية متقدمة بالبشرة والجمال في رهط",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "etSAobChg9Ao15PxTmeXiyP1m45hom4cpstq2s42qSY",
  },
  keywords: [
    "عناية بالبشرة رهط",
    "تنظيف بشرة رهط",
    "تجميل رهط",
    "عناية متقدمة بالبشرة والجمال",
    "Asiash Beauty Age",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased font-sans`}>
        <Navbar />
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
