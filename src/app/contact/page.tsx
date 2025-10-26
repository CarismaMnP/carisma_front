'use client'

import s from './page.module.css';

import { Footer } from '@/blocks/Footer';
import { StickyNavbar } from '@/components/StickyNavbar';
import { BurgerNavbar } from '@/components/BurgerNavbar';
import { TextEffectOne } from 'react-text-animate';
import { MapIcon } from '@/shared/assets/MapIcon';
import { PhoneIcon } from '@/shared/assets/PhoneIcon';
import { EmailIcon } from '@/shared/assets/EmailIcon';
import { ClockIcon } from '@/shared/assets/ClockIcon';
import { TitledInput } from '@/shared/ui/TitledInput';
import { ChangeEvent, useCallback, useState } from 'react';
import Image from 'next/image';

export default async function ContactPage() {

  const [form, setForm] = useState({
    name: '',
    mail: '',
    message: '',
  });

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }, []);

  return (
    <div>
      <BurgerNavbar />
      <StickyNavbar alwaysShow />

      <section className={s.contactsWrapper}>
        <div className={s.pageHeading}>
          <TextEffectOne className={s.title} staggerDuration={0.02} animateOnce={false} text="CONTACT US" />
          <TextEffectOne className={s.subtitle} staggerDuration={0.01} animateOnce={false} text="Get in touch with us to any enquires and questions" />
        </div>

        <div className={s.contactsBlock}>
          <div className={s.contactsData}>
            <div className={s.contactsInfo}>
              <div className={s.contactInfoItem}>
                <PhoneIcon />
                <div>
                  +1 (786) 919-4071
                </div>
              </div>
              <div className={s.contactInfoItem}>
                <EmailIcon />
                <div>
                  info@carismamp.com
                </div>
              </div>
            </div>
            <div className={s.contactsInfo}>
              <div className={s.contactInfoItem}>
                <ClockIcon />
                <div>
                  Monday to Friday: 8 am - 4 pm
                </div>
              </div>
              <div className={s.contactInfoItem}>
                <MapIcon color='black' />
                <div>
                  1300 W Beaver Street Jacksonwille, FL 32209<br></br><i>Main entrance through VEGA STREET</i>
                </div>
              </div>
            </div>
          </div>

          <div className={s.contactsWidgets}>
            <div className={s.form}>
              <TitledInput
                placeholder='Full Name'
                required
                name='name'
                value={form.name}
                onChange={handleChange}
                type='text'
              />

              <TitledInput
                placeholder='E-mail'
                required
                name='mail'
                value={form.mail}
                onChange={handleChange}
                type='text'
              />

              <TitledInput
                placeholder='Message'
                required
                name='message'
                value={form.message}
                onChange={handleChange}
                type='text'
              />

              <button className={s.submitButton}>Send Message</button>

            </div>
            <div className={s.map}>
              <Image
                fill
                src='/map.png'
                alt='MAP'
                sizes='100%'
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}
