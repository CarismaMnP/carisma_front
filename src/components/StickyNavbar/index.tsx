'use client';


import s from './StickyNavbar.module.css';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CarismaLogo } from '@/shared/assets/CarismaLogo';
import { PhoneIcon } from '@/shared/assets/PhoneIcon';
import { MapIcon } from '@/shared/assets/MapIcon';

export const StickyNavbar = ({ alwaysShow = false }: { alwaysShow?: boolean }) => {
  const [show, setShow] = useState(!alwaysShow)

  const controlNavbar = () => {
    if (window.scrollY > 200) { // if scroll down hide the navbar
      setShow(false);
    } else { // if scroll up show the navbar
      setShow(true);
    }
  };

  useEffect(() => {
    if (!alwaysShow) {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, []);

  return (
    <header className={`${s.header} ${s.show} ${show ? s.expanded : ""}`} style={{ color: '#000000' }}>
      <div className={s.wrapper}>
        {/* Navigation Links */}
        <div className={s.navLinks}>
          <Link className={s.navLink} href='/catalog'>
            Used Parts
          </Link>
          <Link className={s.navLink} href='/vehicles'>
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
        <div className={s.logoContainer}>
          <CarismaLogo color='#000000' />
        </div>

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
