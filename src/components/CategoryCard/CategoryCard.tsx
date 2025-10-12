'use client';

import React from 'react';
import s from './CategoryCard.module.css';

interface CategoryCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    description,
    icon,
    href = '#'
}) => {
    return (
        <a href={href} className={s.card}>
            <div className={s.cardContent}>
                <h3 className={s.title}>{title}</h3>
                <div className={s.iconWrapper}>
                    {icon}
                </div>
                <p className={s.description}>{description}</p>
            </div>
            <div className={s.cardContentMobile}>
                <div className={s.iconWrapper}>
                    {icon}
                </div>
                <div className={s.titleWrapper}>
                    <h3 className={s.title}>{title}</h3>
                    <p className={s.description}>{description}</p>
                </div>
            </div>
        </a>
    );
};
