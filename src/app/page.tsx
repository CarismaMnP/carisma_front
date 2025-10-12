'use client'
import s from './page.module.css';
import { Hero } from '@/blocks/Hero';
import { PopularCategories } from '@/blocks/PopularCategories';
// import { IProduct } from '@/shared/types/Product';
// import { apiUrlBuilder, serverQueryUrlBuilder } from '@/shared/utils/urlBuilder';
// import { NotCoffee } from '@/blocks/NotCoffee';
// import { Feautures } from '@/blocks/Feautures';
// import { Button } from '@/shared/ui';
// import Link from 'next/link';
import { StickyNavbar } from '@/components/StickyNavbar';
// import { ICategory } from '@/shared/types/Category';
// import { ReactElement } from 'react';
import { CarModels } from '@/blocks/CarModels';
import { AboutUs } from '@/blocks/AboutUs';
import { Arrivals } from '@/blocks/Arrivals';
import { Footer } from '@/blocks/Footer';
import { SearchingForm } from '@/blocks/SearchingForm';


export default function Home() {
  return (
    <div className={s.page}>
      <StickyNavbar />
      <Hero />
      <PopularCategories />
      <CarModels />
      <Arrivals />
      <AboutUs />
      <SearchingForm />
      <Footer />
    </div>
  );
}
