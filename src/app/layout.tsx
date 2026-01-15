import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "ILEYS Consulting | Research, Training & Consulting",
  description: "ILEYS is a research, training and consulting company specialized in offering practical solutions on organizational and social development challenges in Somalia.",
  keywords: ["consulting", "research", "training", "Somalia", "development", "organizational development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
