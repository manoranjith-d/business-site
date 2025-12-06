import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NewGenix Solutions | Engineering Excellence",
    template: "%s | NewGenix Solutions",
  },
  description: "NewGenix Solutions offers end-to-end software solutions, specializing in AI, web, and mobile app development with a focus on quality and innovation.",
  keywords: ["Software Development", "AI Solutions", "Web Development", "Mobile Apps", "SaaS", "Engineering", "NewGenix"],
  authors: [{ name: "NewGenix Solutions" }],
  creator: "NewGenix Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://NewGenix.solutions",
    title: "NewGenix Solutions | Engineering Excellence",
    description: "NewGenix Solutions offers end-to-end software solutions, specializing in AI, web, and mobile app development.",
    siteName: "NewGenix Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "NewGenix Solutions | Engineering Excellence",
    description: "NewGenix Solutions offers end-to-end software solutions, specializing in AI, web, and mobile app development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
