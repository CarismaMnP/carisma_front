'use client';

import s from './Navbar.module.css';
import { useCartStore } from '@/shared/store/CartStoreProvider';
import Link from 'next/link';
import { FC } from 'react';
import { useUserStore } from '@/shared/stores/UserStore/UserStoreProvider';
import { PhoneIcon } from '@/shared/assets/PhoneIcon';
import { MapIcon } from '@/shared/assets/MapIcon';
import { CarismaLogo } from '@/shared/assets/CarismaLogo';

interface INavbarProps {
  black?: boolean;
}

export const Navbar: FC<INavbarProps> = ({ black }) => {
  const { switchCart } = useCartStore(state => state);
  const { token } = useUserStore(state => state);

  return (
    <header className={s.header} style={{ color: black ? '#000000' : '#FFFFFF' }}>
      <div className={s.container}>
        {/* Navigation Links */}
        <div className={s.navLinks}>
          <Link className={s.navLink} href='/catalog'>
            Used Parts
          </Link>
          <Link className={s.navLink} href='/#arrivals'>
            Arrived Vehicles
          </Link>
          <Link className={s.navLink} href='/about'>
            About
          </Link>
          <Link className={s.navLink} href='/contact'>
            Contact Us
          </Link>
        </div>

        {/* Logo */}
        <Link href='/'>
          <div className={s.logoContainer}>
            <CarismaLogo color='#FFFFFF' />
          </div>
        </Link>

        {/* Contact Information */}
        <div className={s.contactInfo}>
          <a href='tel:+17869194071' className={s.contactItem}>
            <PhoneIcon />
            <span className={s.phoneNumber}>+1 (786) 919-4071</span>
          </a>
          <a href='https://maps.app.goo.gl/M2GmXdDx1o8y4kBYA' className={s.contactItem}>
            <MapIcon />
            <span className={s.address}>1300 W Beaver Street Jacksonville, FL 32209</span>
          </a>
        </div>
      </div>
    </header>
  );
};
