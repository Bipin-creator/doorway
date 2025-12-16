import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import ResponsiveNavbar from "@/components/Navbar/ResponsiveNavbar";

const garamondlight = localFont({
  src: "../fonts/GaramondLight.ttf",
  variable: "--font-garamondlight",
});

const HelveticaNeueThin = localFont({
  src: "../fonts/HelveticaNeueThin.woff2",
  variable: "--font-HelveticaNeueThin",
});

export const metadata: Metadata = {
  title: "The Doorway",
  description: "Into Growth, We Sail Together.",
  manifest: '/manifest.manifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${garamondlight.variable} ${HelveticaNeueThin.variable} antialiased`}
      >
        <ResponsiveNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
