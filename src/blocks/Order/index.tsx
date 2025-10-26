'use client';
import { useState, useCallback, ChangeEvent } from 'react';
import Image from 'next/image';

import { useCartStore } from '@/shared/store/CartStoreProvider';
import { useUserStore } from '@/shared/stores/UserStore/UserStoreProvider';
import { TitledInput } from '@/shared/ui/TitledInput';
import s from './Order.module.css';
import { toast } from 'react-toastify';
import { TextEffectOne } from 'react-text-animate';
import { Reveal } from '@/shared/ui/Reveal';
import { ICart } from '@/shared/store/store';
import { carMockData } from '@/shared/data/carMockData';
import { MapIcon } from '@/shared/assets/MapIcon';

type DeliveryVariants = 'upsDelivery' | 'selfPickup'

interface IForm {
  name: string;
  mail: string;
  country: string;
  city: string;
  zipCode: string;
  state: string;
  addressLine1: string;
  addressLine2: string;
  deliveryInstructions: string;
  variant: DeliveryVariants,
}

const cartMock: ICart[] = [
  {
    id: 1,
    count: 4,
    partId: 'part1',
    part: {
      id: 'eng-002',
      name: 'High Pressure Fuel Pump',
      category: 'engine',
      oemNumber: '11427512346',
      alternativeName: 'BMW N47 HPFP',
      replaces: ['11427512347'],
      description: 'High pressure fuel pump for N47 diesel engines',
      tags: ['hpfp', 'pump', 'diesel', 'n47'],
      car: carMockData,
      priceDollars: 125,
      priceCents: 45,
      images: [{ imageUrl: 'https://pub-bc3786b523da4133a78648b83b419424.r2.dev/arrivals/2025/09/1759251326344_75a0f59c8c004bdd.png', previewUrl: 'https://pub-bc3786b523da4133a78648b83b419424.r2.dev/arrivals/2025/09/1759251326344_75a0f59c8c004bdd.png' }],
    },
  },
  {
    id: 2,
    count: 1,
    partId: 'part1',
    part: {
      id: 'eng-001',
      name: 'Turbocharger N20',
      category: 'engine',
      oemNumber: '11427512345',
      alternativeName: 'BMW N20 Turbo',
      replaces: ['11427512344', '11427512343'],
      description: 'Turbocharger for N20 series engines, 2.0L gasoline',
      tags: ['turbocharger', 'turbo', 'n20', '2.0l'],
      car: carMockData,
      priceDollars: 125,
      priceCents: 45,
      images: [{ imageUrl: 'https://pub-bc3786b523da4133a78648b83b419424.r2.dev/arrivals/2025/09/1759251326344_75a0f59c8c004bdd.png', previewUrl: 'https://pub-bc3786b523da4133a78648b83b419424.r2.dev/arrivals/2025/09/1759251326344_75a0f59c8c004bdd.png' }],
    },
  },
  {
    id: 3,
    count: 2,
    partId: 'part1',
    part: {
      id: 'susp-001',
      name: 'Front Shock Absorber',
      category: 'suspension',
      oemNumber: '31317512345',
      alternativeName: 'Strut Assembly',
      replaces: ['31317512346', '31317512347'],
      description: 'Front shock absorber with spring assembly',
      tags: ['shock', 'absorber', 'strut', 'suspension'],
      car: carMockData,
      priceDollars: 125,
      priceCents: 45,
      images: [{ imageUrl: 'https://pub-bc3786b523da4133a78648b83b419424.r2.dev/arrivals/2025/09/1759251326344_75a0f59c8c004bdd.png', previewUrl: 'https://pub-bc3786b523da4133a78648b83b419424.r2.dev/arrivals/2025/09/1759251326344_75a0f59c8c004bdd.png' }],
    },
  }
]


export const Order = () => {
  const { cart } = useCartStore(state => state);
  const { user } = useUserStore(state => state);

  // Form state
  const [form, setForm] = useState<IForm>({
    name: user.name || '',
    mail: user.mail || '',
    variant: 'upsDelivery',
    country: '',
    city: '',
    zipCode: '',
    state: '',
    addressLine1: '',
    addressLine2: '',
    deliveryInstructions: '',
  });

  // useEffect(() => {
  //   setForm(f => ({ ...f, name: user.name || '', mail: user.mail || '' }));
  // }, [user.name, user.mail]);

  // Cart totals
  // const cartTotal = useMemo(
  //   () => cart.reduce((sum, { product, count }) => sum + product.price * count, 0),
  //   [cart],
  // );

  // const userTotal = useMemo(() => {
  //   let base =
  //     user.discount && user.discount > 0 ? cartTotal * (1 - user.discount / 100) : cartTotal;

  //   if (form.selectedDelivery) {
  //     base += form.selectedDelivery.price || 0;
  //   }

  //   return base;
  // }, [cartTotal, user.discount, form.selectedDelivery]);



  // Handlers
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }, []);

  const handleChangeDeliveryVariant = (variant: DeliveryVariants) => {
    setForm(f => ({ ...f, variant }));
  }

  // Payment
  const handlePay = async () => {
    if (!form.name || !form.mail) {
      return toast.error('Заполните обязательные поля');
    }

    if (!form.city) {
      return toast.error('Введите город');
    }

    console.log('SUCCESS', form);

  };

  return (
    <div className={s.blockWrapper}>

      <TextEffectOne className={s.orderTitle} staggerDuration={0.02} animateOnce={false} text="CHECKOUT" />
      <div className={s.order_wrapper}>

        <div className={s.orderInfo}>

          <div className={s.fieldsList}>
            <TextEffectOne className={s.fieldsBlockTitle} staggerDuration={0.02} animateOnce={false} text="Your Information" />

            <div className={s.fieldsRow}>
              <TitledInput
                placeholder='Full name...'
                required
                name='name'
                value={form.name}
                onChange={handleChange}
                type='text'
              />
              <TitledInput
                placeholder='Email address...'
                required
                name='mail'
                type='email'
                value={form.mail}
                onChange={handleChange}
              />
            </div>

            <div className={s.fieldsRowSelect}>
              <div
                className={`${s.selectItem} ${form?.variant === 'upsDelivery' ? s.deliverySelected : ''}`}
                onClick={() => handleChangeDeliveryVariant('upsDelivery')}
              >UPS Delivery</div>

              <div
                className={`${s.selectItem} ${form?.variant === 'selfPickup' ? s.deliverySelected : ''}`}
                onClick={() => handleChangeDeliveryVariant('selfPickup')}
              >Self-pickup</div>
            </div>
          </div>

          {form.variant === 'upsDelivery' && <Reveal delay={0.1}>
            <div className={s.fieldsList}>
              <TextEffectOne className={s.fieldsBlockTitle} staggerDuration={0.02} animateOnce={false} text="Shipping Information" />

              <div className={s.fieldsRow}>
                <TitledInput
                  placeholder='Country'
                  required
                  name='country'
                  value={form.country}
                  onChange={handleChange}
                  type='text'
                />
                <TitledInput
                  placeholder='City'
                  required
                  name='city'
                  value={form.city}
                  onChange={handleChange}
                  type='text'
                />
              </div>

              <div className={s.fieldsRow}>
                <TitledInput
                  placeholder='ZIP Code'
                  required
                  name='zipCode'
                  value={form.zipCode}
                  onChange={handleChange}
                  type='text'
                />
                <TitledInput
                  placeholder='State'
                  required
                  name='state'
                  value={form.state}
                  onChange={handleChange}
                  type='text'
                />
              </div>

              <div className={s.fieldsRow}>
                <TitledInput
                  placeholder='Address line 1'
                  required
                  name='addressLine1'
                  value={form.addressLine1}
                  onChange={handleChange}
                  type='text'
                />
                <TitledInput
                  placeholder='Address line 2'
                  name='addressLine2'
                  value={form.addressLine2}
                  onChange={handleChange}
                  type='text'
                />
              </div>

              <div className={s.fieldsRow}>
                <TitledInput
                  placeholder='Delivery instructions'
                  name='deliveryInstructions'
                  value={form.deliveryInstructions}
                  onChange={handleChange}
                  type='text'
                />
              </div>
            </div>
          </Reveal>}

          {form.variant === 'selfPickup' && <Reveal delay={0.1}>
            <div className={s.fieldsList}>
              <TextEffectOne className={s.fieldsBlockTitle} staggerDuration={0.02} animateOnce={false} text="OUR OFFICE" />

              <a href='https://maps.app.goo.gl/M2GmXdDx1o8y4kBYA' className={s.contactItem} target='_blank'>
                <MapIcon />
                <span className={s.address}>1300 W Beaver Street Jacksonville, FL 32209</span>
              </a>
            </div>
          </Reveal>}

          <button className={s.submitButton}>Place an order</button>
        </div>

        {/* Детали корзины */}
        <div className={s.orderDetails}>
          <div className={s.cartItemsList}>

            {cartMock.map(item => (
              <>
                <article key={item.id} className={s.cartItem}>
                  <div className={s.imageInfo}>
                    <div className={s.imageWrapper}>
                      <Image
                        src={item?.part?.images[0].imageUrl}
                        alt={item?.part?.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={s.itemInfo}>
                      <p className={s.itemName}>{item?.count}x {item?.part?.name}</p>
                      <p className={s.itemPrice}>
                        ${item?.part?.priceDollars}.<span className={s.partInfoTitlePriceCents}>{item?.part?.priceCents}</span>
                      </p>
                    </div>
                  </div>
                </article>

                <div className={s.cartItemsDivider}></div>
              </>
            ))}

            <div className={s.totalPrice}>TOTAL:  ${'143'}.<span className={s.totalPriceCents}>{'45'}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};
