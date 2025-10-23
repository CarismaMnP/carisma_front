import s from './page.module.css';

import { Footer } from '@/blocks/Footer';
import { Navbar } from '@/components/Navbar';
import { Catalog } from '@/blocks/Catalog';
import { BurgerNavbar } from '@/components/BurgerNavbar';
import { StickyNavbar } from '@/components/StickyNavbar';

export default async function SparePartsPage() {
  return (
    <div className={s.page}>
      <Catalog />

      <Footer />
    </div>
  );
}
