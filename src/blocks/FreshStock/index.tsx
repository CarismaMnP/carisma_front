'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import s from './FreshStock.module.css';
import { Reveal } from '@/shared/ui/Reveal';
import { TextEffectOne } from 'react-text-animate';
import { useLenis } from 'lenis/react';
import { ArrowIcon } from '@/shared/assets';
import { FreshStockPartCard } from '@/components/FreshStockPartCard/FreshStockPartCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const freshStockMock = [
    {
        id: 0,
        name: 'Brake pad wear sensor',
        dateAdd: '24 July',
        car: 'BMW M340i xDrive (G20)',
        price: '23.00',
        image: '/car/1.png',
    },
    {
        id: 1,
        name: 'Headlight, LED technology',
        dateAdd: '24 July',
        car: 'BMW M340i xDrive (G20)',
        price: '23.00',
        image: '/car/4.png',
    },
    {
        id: 2,
        name: 'Sports seat',
        dateAdd: '24 July',
        car: 'BMW M340i xDrive (G20)',
        price: '23.00',
        image: '/car/3.png',
    },
    {
        id: 3,
        name: 'M Performance bumper',
        dateAdd: '24 July',
        car: 'BMW M340i xDrive (G20)',
        price: '23.00',
        image: '/car/2.png',
    },
];


export const FreshStock: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const scrollLeft = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    }

    const scrollRight = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    }

    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.blockTitle}>
                    <TextEffectOne className={s.title} staggerDuration={0.02} animateOnce={false} text="FRESH STOCK" />

                    <div className={s.blockTitleButtons}>
                        <Reveal width="100%" delay={0.1}>
                            <button
                                className={s.scrollButton}
                                onClick={scrollLeft}
                            >
                                <ArrowIcon />
                            </button>
                        </Reveal>
                        <Reveal width="100%" delay={0.1}>
                            <button
                                className={s.scrollButton}
                                onClick={scrollRight}
                            >
                                <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
                            </button>
                        </Reveal>
                    </div>
                </div>

                <div className={s.partsList}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1440: {
                                slidesPerView: 3,
                            },
                            1680: {
                                slidesPerView: 4,
                            }
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className={s.swiperContainer}
                    >
                        {!!freshStockMock?.length && freshStockMock?.map(part =>
                            <SwiperSlide key={part?.id} className={s.swiperSlide}>
                                <Reveal height='100%'>
                                    <FreshStockPartCard {...part} />
                                </Reveal>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
