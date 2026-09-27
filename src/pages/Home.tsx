import { Hero } from '@/components/home/Hero';
import { Intro } from '@/components/home/Intro';
import { LifePathCalculator } from '@/components/home/LifePathCalculator';
import { NumerologyMap } from '@/components/home/NumerologyMap';
import { AboutStrip } from '@/components/home/AboutStrip';
import { ExploreSection } from '@/components/home/ExploreSection';
import { SessionJourney } from '@/components/home/SessionJourney';
import { Packages } from '@/components/home/Packages';
import { StoriesPreview } from '@/components/home/StoriesPreview';
import { JournalPreview } from '@/components/home/JournalPreview';
import { FinalCta } from '@/components/FinalCta';

export function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <LifePathCalculator />
      <NumerologyMap />
      <AboutStrip />
      <ExploreSection />
      <SessionJourney />
      <Packages />
      <StoriesPreview />
      <JournalPreview />
      <FinalCta />
    </>
  );
}
