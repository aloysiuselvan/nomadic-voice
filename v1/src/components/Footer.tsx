"use client";

import Image from "next/image";

const navLinks = [
  { label: "Our Story", href: "#" },
  { label: "Press Kit", href: "#" },
  { label: "Careers", href: "#" },
];

const contactLinks = [
  { label: "Email Us", href: "#" },
  { label: "Booking Info", href: "#" },
  { label: "Support", href: "#" },
];

const socialIcons = [
  { icon: "brand_awareness", label: "Brand Awareness" },
  { icon: "share", label: "Share" },
  { icon: "play_circle", label: "Play" },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-white px-6 py-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Nomadic Voice logo"
              width={32}
              height={32}
              className="rounded"
            />
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Nomadic Voice
            </h2>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            Premium Choral Ensemble &amp; Musical Archive.
          </p>
        </div>

        {/* Link columns */}
        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Navigation
            </h5>
            <ul className="flex flex-col gap-2 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Contact
            </h5>
            <ul className="flex flex-col gap-2 text-sm font-medium text-slate-600">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialIcons.map((social) => (
            <a
              key={social.icon}
              href="#"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              <span className="material-symbols-outlined text-xl">
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-12 max-w-7xl text-center">
        <p className="text-xs text-slate-400">
          © 2024 Nomadic Voice. All notes reserved. Modern Manuscript series.
        </p>
      </div>
    </footer>
  );
}
