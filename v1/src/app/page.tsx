import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import PerformanceGallery from "@/components/PerformanceGallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col manuscript-bg">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <PerformanceGallery />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
