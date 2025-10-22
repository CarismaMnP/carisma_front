'use client';

import React from 'react';
import Image from 'next/image';
import s from './FreshStockPartCard.module.css';

interface FreshStockPartCardProps {
    name: string;
    dateAdd: string;
    car: string;
    price: string;
    image: string;
    href?: string
}

export const FreshStockPartCard: React.FC<FreshStockPartCardProps> = ({
    name, dateAdd, car, price, image, href
}) => {
    return (
        <a href={href} className={s.card}>
            <div className={s.cardContent}>
                <div className={s.cardTitle}>
                    <h3 className={s.title}>{name}</h3>
                    <h4 className={s.desc}>{dateAdd} | {car}</h4>
                </div>
                <div className={s.imageWrapper}>
                    <Image
                        src={image}
                        alt={`${car} | ${name}`}
                        width={200}
                        height={120}
                        className={s.carImage}
                    />
                </div>
                <div className={s.price}>Only for ${price}</div>
            </div>
        </a>
    );
};