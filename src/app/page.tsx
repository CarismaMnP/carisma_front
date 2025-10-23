'use client'
import { Hero } from '@/blocks/Hero';
import { PopularCategories } from '@/blocks/PopularCategories';
import { StickyNavbar } from '@/components/StickyNavbar';
import { CarModels } from '@/blocks/CarModels';
import { AboutUs } from '@/blocks/AboutUs';
import { Arrivals } from '@/blocks/Arrivals';
import { Footer } from '@/blocks/Footer';
import { SearchingForm } from '@/blocks/SearchingForm';
import { FreshStock } from '@/blocks/FreshStock';


export default function Home() {
  return (
    <div>
      <StickyNavbar />
      <Hero />
      <PopularCategories />
      <FreshStock />
      <CarModels />
      <Arrivals />
      <AboutUs />
      <div style={{ marginBottom: '14.4rem' }}>
        <SearchingForm />
      </div>
      <Footer />
    </div>
  );
}
