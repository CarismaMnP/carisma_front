import s from './page.module.css';
import Image from 'next/image';
import { LoginForm } from '@/blocks/LoginForm';
import { Suspense } from 'react';
import { BurgerNavbar } from '@/components/BurgerNavbar';
import { StickyNavbar } from '@/components/StickyNavbar';

export default function LoginPage() {
  return (
    <div className={s.pageWrapper}>
      <StickyNavbar alwaysShow />
      <BurgerNavbar />
      <div className={s.page}>
        <div className={s.login_container}>
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
        <div className={s.image}>
          <Image
            fill
            src='/herobg.png'
            alt='BMW Car'
            priority
            sizes='100%'
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}
