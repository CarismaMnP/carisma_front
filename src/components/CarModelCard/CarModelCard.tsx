'use client';

import React from 'react';
import Image from 'next/image';
import s from './CarModelCard.module.css';

interface CarModelCardProps {
    model: string;
    image: string;
    href?: string;
}

export const CarModelCard: React.FC<CarModelCardProps> = ({
    model,
    image,
    href = '#'
}) => {
    return (
        <a href={href} className={s.card}>
            <div className={s.cardContent}>
                <h3 className={s.title}>{model}</h3>
                <div className={s.imageWrapper}>
                    <Image
                        src={image}
                        alt={`BMW ${model}`}
                        width={200}
                        height={120}
                        className={s.carImage}
                    />
                </div>
            </div>
        </a>
    );
};