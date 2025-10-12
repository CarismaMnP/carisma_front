import type { Metadata } from 'next';
import { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './globals.css';
import { AvertaCY } from '@/shared/fonts';
import { SessionLayout } from '@/layouts/SessionLayout';
import { CartStoreProvider } from '@/shared/store/CartStoreProvider';
import { CartLayout } from '@/layouts/CartLayout';
import { UserStoreProvider } from '@/shared/stores/UserStore/UserStoreProvider';
import { ZakharCrumbleCookie } from '@/layouts/CookieWrapper';
// import { ReactLenis } from 'lenis/react'

export const metadata: Metadata = {
  title: 'CARisma M&P',
  description: 'BMW Spare Parts',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.svg' sizes='any' />
      </head>

      <body className={`${AvertaCY.className}`}>
        {/* <ReactLenis root options={{ autoRaf: true, duration: 1.5, lerp: 0.1 }} /> */}
        <UserStoreProvider>
          <CartStoreProvider>
            <SessionLayout>
              <CartLayout>{children}</CartLayout>
            </SessionLayout>
          </CartStoreProvider>
        </UserStoreProvider>
        <ZakharCrumbleCookie />
      </body>
    </html>
  );
}
