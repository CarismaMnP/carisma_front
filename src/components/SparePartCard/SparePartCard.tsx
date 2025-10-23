'use client';

import React from 'react';
import Image from 'next/image';
import s from './SparePartCard.module.css';
import { ISparePart } from '@/shared/types/SparePart';
import { CartIcon } from '@/shared/assets';

interface SparePartCardProps extends ISparePart {
    href?: string;
}

export const SparePartCard: React.FC<SparePartCardProps> = ({
    id, name, category, oemNumber, alternativeName, replaces, description, tags, car, image, priceDollars, priceCents, href
}) => {
    return (
        <a href={href} className={s.card}>
            <div className={s.cardContent}>
                <div className={s.imageWrapper}>
                    <Image
                        src={image}
                        alt={name}
                        width={200}
                        height={120}
                        className={s.carImage}
                    />
                </div>

                <div className={s.cardData}>
                    <div className={s.cardTitle}>
                        <h3 className={s.title}>{name}</h3>
                        <div className={s.price}>${priceDollars}.<span className={s.cents}>{priceCents}</span></div>
                    </div>

                    <button className={s.cartButton}>
                        <CartIcon />
                    </button>
                </div>
            </div>
        </a>
    );
};