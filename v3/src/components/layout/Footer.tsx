import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-charcoal">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUxbbUmPVayq-btD5Tdkkib7FKcufDgRNtCfiGQtxlTMGhYzYkY2KlA9Yj-UdCQydi2G9ydwisKTRR_PASS1bcCkaLqmlNj8oRzrPR4nXkN15_tDBdl68O_IF8W-T-jLlKfTuwyf_esHay2cWLw4isqrKuHIFENyqFuiO4pmmAj0APAaoPLEAyBBWKPzbPc5qLw6O-vzCPN6KGVWyMXm-yuzhZkTz10xyUwgUSYLgzSi1J8lY_uLtK4EY7bdb4ZSkAUpfPiLDgbNTd"
            alt="Logo Placeholder"
            width={40}
            height={40}
            className="h-10 w-auto opacity-70 grayscale"
          />
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nomadic Voice Collective. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
            Instagram
          </Link>
          <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
            YouTube
          </Link>
          <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
            Spotify
          </Link>
        </div>
      </div>
    </footer>
  );
}
