import { HeroSection } from '@/components/sections/HeroSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { SoundscapeSection } from '@/components/sections/SoundscapeSection';
import { RepertoireSection } from '@/components/sections/RepertoireSection';
import { ConductorSection } from '@/components/sections/ConductorSection';
import { AuditionSection } from '@/components/sections/AuditionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <SoundscapeSection />
      <RepertoireSection />
      <ConductorSection />
      <AuditionSection />
    </>
  );
}
