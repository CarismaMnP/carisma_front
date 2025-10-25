import s from './page.module.css';

import { Footer } from '@/blocks/Footer';
import { AboutHero } from '@/blocks/AboutHero';
import { AboutImage } from '@/blocks/AboutImage';
import { AboutContent } from '@/blocks/AboutContent';
import { CompetitiveAdvantages } from '@/blocks/CompetitiveAdvantages';
import { CallToAction } from '@/blocks/CallToAction';
import { StickyNavbar } from '@/components/StickyNavbar';
import { BurgerNavbar } from '@/components/BurgerNavbar';

export default async function AboutPage() {
  return (
    <div className={s.page}>
      <BurgerNavbar />
      <StickyNavbar alwaysShow />
      <AboutHero />
      <AboutImage />
      <AboutContent />
      <CompetitiveAdvantages />
      <AboutContent />
      <CallToAction />
      <Footer />
    </div>
  );
}
