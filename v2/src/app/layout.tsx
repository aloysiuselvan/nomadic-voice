import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomadic Voice | Ethereal Choral Experience",
  description: "Experience the fluid vocal textures and nomadic spirit of our world-renowned choir. A tapestry of sound woven in Teal and Gold.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300`}
      >
        <div className="relative flex min-h-screen w-full flex-col silk-wave">
            {children}
        </div>
      </body>
    </html>
  );
}
