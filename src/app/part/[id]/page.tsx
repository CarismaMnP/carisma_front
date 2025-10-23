'use client';

import s from './partpage.module.css';

import { Footer } from '@/blocks/Footer';
import { TextEffectOne } from 'react-text-animate';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IProduct } from '@/shared/types/Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useCartStore } from '@/shared/store/CartStoreProvider';
import { BurgerNavbar } from '@/components/BurgerNavbar';
import { useUserStore } from '@/shared/stores/UserStore/UserStoreProvider';
import { StickyNavbar } from '@/components/StickyNavbar';
import { Breadcrubs } from '@/blocks/Breadcrubs/Breadcrubs';
import { ISparePart } from '@/shared/types/SparePart';

import 'swiper/css';
import 'swiper/css/navigation';
import { Arrivals } from '@/blocks/Arrivals';
import { AboutUs } from '@/blocks/AboutUs';
import { categoriesDict } from '@/shared/data/partCategories';
import { CartIcon, ZapIcon } from '@/shared/assets';

const mockPart: ISparePart = {
  id: 'eng-001',
  name: 'Turbocharger N20',
  category: 'engine',
  oemNumber: '11427512345',
  alternativeName: 'BMW N20 Turbo',
  replaces: ['11427512344', '11427512343'],
  description: 'Turbocharger for N20 series engines, 2.0L gasoline',
  tags: ['turbocharger', 'turbo', 'n20', '2.0l'],
  car: {
    makes: [
      {
        id: 'bmw',
        name: 'BMW',
        models: [
          {
            id: '3-series',
            name: '3 Series',
            bodies: [
              {
                id: 'sedan',
                name: 'Sedan',
                engines: [
                  { id: '320i', name: '320i' },
                  { id: '330i', name: '330i' },
                  { id: '340i', name: '340i' },
                  { id: '320d', name: '320d' },
                  { id: '330d', name: '330d' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  priceDollars: 125,
  priceCents: 45,
  images: [{ imageUrl: '/drip.png', previewUrl: '/drip.png' }, { imageUrl: '/drip.png', previewUrl: '/drip.png' }],
};

const compatibilityMock = [
  { chassis: 'G42', model: 'M240i / M240i xDrive', years: '2022 – present' },
  { chassis: 'G20 / G21', model: 'M340i / M340i xDrive', years: '2019 – present' },
  { chassis: 'G22 / G23 / G26', model: 'M440i / M440i xDrive', years: '2021 – present' },
  { chassis: 'G30 / G31', model: '540i / 540i xDrive', years: '2017 – 2023' },
  { chassis: 'G12', model: '740i / 740i xDrive', years: '2016 – 2022' },
]

export default function PartPage() {
  const { id } = useParams();

  const [partInfo, setPartInfo] = useState<ISparePart>(mockPart);

  // const { openCart } = useCartStore(state => state);
  // const { user } = useUserStore(state => state);

  // async function addToCart() {
  //   const url = `/user/plusCart`;
  //   try {
  //     await axios.post(apiUrlBuilder(url), {
  //       session: localStorage.getItem('session'),
  //       productId: productInfo?.id,
  //       selectorValue,
  //     });
  //     openCart(user.id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  return (


    <div>
      <StickyNavbar />
      <BurgerNavbar />

      <div className={s.productGridWrapper}>

        <div className={s.breadcrubs}>
          <Breadcrubs
            data={[
              { name: 'Main', link: '/' },
              {
                name: 'Catalog',
                link: '/catalog',
              },
              {
                name: (partInfo?.category && categoriesDict[partInfo.category as keyof typeof categoriesDict]?.title) || '',
                link: `/catalog?filters=%257B%2522category%2522%253A%2522${partInfo?.category}%2522%257D`,
              },
            ]}
          />
        </div>


        <div className={s.productGrid}>
          <div className={s.productImages}>
            <Swiper
              className={s.swiper}
              modules={[Pagination, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
              speed={1000}
            >
              {partInfo?.images.map((image, index) => {
                return (
                  <SwiperSlide key={image.imageUrl + index} className={s.image}>
                    <Image
                      src={image.imageUrl}
                      style={{ transform: 'scale(1.02)', objectFit: 'cover' }}
                      alt='Background'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center center'
                      priority
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className={s.partInfo}>

            <div className={s.partInfoTitle}>
              <div className={s.partInfoTitleTags}>
                {partInfo?.tags?.map(tag =>
                  <div className={s.tag}>{tag}</div>
                )}
              </div>

              <div className={s.partInfoTitleName}>
                {partInfo?.name}
              </div>

              <div className={s.partInfoTitlePrice}>
                ${partInfo?.priceDollars}.<span className={s.partInfoTitlePriceCents}>{partInfo?.priceCents}</span>
              </div>
            </div>

            <div className={s.partInfoTTX}>
              <div className={s.partInfoTTXCategory}>
                <div className={s.partInfoTTXKey}>Category:</div>
                <div className={s.partInfoTTXValue}>{(partInfo?.category && categoriesDict[partInfo.category as keyof typeof categoriesDict]?.title) || ''}</div>
              </div>

              <div className={s.partInfoTTXCategory}>
                <div className={s.partInfoTTXKey}>OEM Number:</div>
                <div className={s.partInfoTTXValue}>{partInfo?.oemNumber}</div>
              </div>

              <div className={s.partInfoTTXCategory}>
                <div className={s.partInfoTTXKey}>Alternative name:</div>
                <div className={s.partInfoTTXValue}>{partInfo?.alternativeName}</div>
              </div>

              <div className={s.partInfoTTXCategory}>
                <div className={s.partInfoTTXKey}>Replaces:</div>
                <div className={s.partInfoTTXValue}>{partInfo?.replaces.join(', ')}</div>
              </div>

              <div className={s.partInfoTTXCategory}>
                <div className={s.partInfoTTXKey}>From:</div>
                {/* TODO: Хз как с бека будут приходить данные о машине */}
                <div className={s.partInfoTTXValue}>2021 BMW M340i xDrive (G20)</div>
              </div>

            </div>

            <div className={s.partInfoDesc}>
              <div className={s.partInfoDescCrackInfo}>
                <div className={s.infoIcon}><span>i</span></div>
                <div>Сrack across the entire surface</div>
              </div>
              <div className={s.partInfoDescText}>{partInfo?.description}</div>
            </div>

            <div className={s.partInfoButtons}>
              <button className={s.addToCartButton}>
                <CartIcon />
                <span>Add to Cart</span>
              </button>
              <button className={s.buyNowButton}>
                <ZapIcon />
                <span>Buy Now</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      <div className={s.compatibility}>
        <TextEffectOne className={s.compatibilityTitle} staggerDuration={0.02} animateOnce={false} text="Compatibility (direct bolt-on)" />

        <div className={s.compatibilityTable}>
          <div className={`${s.compatibilityTableRow} ${s.compatibilityTableRowHead}`}>
            <div className={s.compatibilityTableRowItem}>Chassis</div>
            <div className={s.compatibilityTableRowItem}>Model</div>
            <div className={s.compatibilityTableRowItem}>Years</div>
          </div>
          <div className={s.compatibilityTableDivider}></div>
          {compatibilityMock?.map((chassis, index) => (
            <>
              <div className={s.compatibilityTableRow}>
                <div className={s.compatibilityTableRowItem}>{chassis?.chassis}</div>
                <div className={s.compatibilityTableRowItem}>{chassis?.model}</div>
                <div className={s.compatibilityTableRowItem}>{chassis?.years}</div>
              </div>
              {index !== compatibilityMock?.length - 1 &&
                <div className={s.compatibilityTableDivider}></div>
              }
            </>
          )
          )}
        </div>

      </div>


      <Arrivals />
      <AboutUs />
      <Footer />
    </div>
  );
}
