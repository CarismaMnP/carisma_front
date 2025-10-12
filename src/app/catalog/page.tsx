import s from './page.module.css';

import { Footer } from '@/blocks/Footer';
import { Navbar } from '@/components/Navbar';
// import { Catalog } from '@/blocks/Catalog';
import { BurgerNavbar } from '@/components/BurgerNavbar';
import { StickyNavbar } from '@/components/StickyNavbar';

// interface SearchParams {
//   make?: string;
//   model?: string;
//   body?: string;
//   engine?: string;
//   oem?: string;
// }

// interface CatalogPageProps {
//   searchParams: SearchParams;
// }

export default async function CatalogPage() {
  return (
    <div className={s.page}>
      <Navbar black />
      <BurgerNavbar />
      <StickyNavbar />

      {/* <Catalog searchParams={searchParams} /> */}

      <Footer />
    </div>
  );
}
