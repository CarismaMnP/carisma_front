import s from './page.module.css';

import { Footer } from '@/blocks/Footer';
import { BurgerNavbar } from '@/components/BurgerNavbar';
import { Order } from '@/blocks/Order';
import { Slide, ToastContainer } from 'react-toastify';
import { StickyNavbar } from '@/components/StickyNavbar';

export default async function OrderPage() {
  return (
    <div className={s.page}>
      <StickyNavbar />
      <BurgerNavbar />

      <ToastContainer
        style={{ zIndex: 999999 }}
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />

      <Order />
      <Footer />
    </div>
  );
}
