import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from 'nextjs-toploader';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akii-Bua Olympic Stadium: Official Website",
  description: "Replica of Akii-Bua Olympic Stadium Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NextTopLoader color="#dc052d" showSpinner={false} />
        <Header />
        <main className="min-h-screen pt-[104px] lg:pt-[116px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
