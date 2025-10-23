'use client';

import React from 'react';
import Link from 'next/link';
import s from './PopularCategories.module.css';
import { CategoryCard } from '@/components/CategoryCard/CategoryCard';
import { Reveal } from '@/shared/ui/Reveal';
import { TextEffectOne } from 'react-text-animate';
import { partCategories } from '@/shared/data/partCategories';

export const PopularCategories: React.FC = () => {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <TextEffectOne className={s.title} staggerDuration={0.02} animateOnce={false} text="POPULAR CATEGORIES" />

                <div className={s.grid}>
                    {partCategories.map((category, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <CategoryCard
                                key={index}
                                title={category.title}
                                description={category.description}
                                icon={category.icon}
                                href={category.href}
                            />
                        </Reveal>
                    ))}
                </div>

                <Reveal width="100%" delay={0.1}>
                    <div className={s.viewAllWrapper}>
                        <Link href="/catalog" className={s.viewAllLink}>
                            View All Categories
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
