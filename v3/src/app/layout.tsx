import type { Metadata } from "next";
import { Manrope, Dancing_Script } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomadic Voice | Premium Choral Ensemble",
  description: "A nomadic choral collective transcending physical spaces through the sacred architecture of human resonance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dancingScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
