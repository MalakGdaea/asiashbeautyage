import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "عناية بالبشرة في رهط | Asiash Beauty Age",
  description: "عيادة تجميل متقدمة في رهط تقدم علاجات البشرة وتنظيف عميق بنتائج واضحة.",
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
