'use client';

import React from 'react';
import Link from 'next/link';
import s from './PopularCategories.module.css';
import { CategoryCard } from '@/components/CategoryCard/CategoryCard';
import { EngineIcon } from '@/shared/assets/EngineIcon';
import { TransmissionIcon } from '@/shared/assets/TransmissionIcon';
import { SuspensionIcon } from '@/shared/assets/SuspensionIcon';
import { WheelsIcon } from '@/shared/assets/WheelsIcon';
import { BodyPartsIcon } from '@/shared/assets/BodyPartsIcon';
import { InteriorIcon } from '@/shared/assets/InteriorIcon';
import { Reveal } from '@/shared/ui/Reveal';
import { TextEffectOne } from 'react-text-animate';


const categories = [
    {
        title: 'Engine',
        description: 'Find essential parts to keep your BMW\'s engine running smoothly',
        icon: <EngineIcon />,
        href: '/catalog?category=engine'
    },
    {
        title: 'Transmission',
        description: 'Repair or upgrade your BMW\'s transmission with quality parts',
        icon: <TransmissionIcon />,
        href: '/catalog?category=transmission'
    },
    {
        title: 'Suspension',
        description: 'Choose durable and stylish wheels to enhance performance and look',
        icon: <SuspensionIcon />,
        href: '/catalog?category=suspension'
    },
    {
        title: 'Wheels',
        description: 'Choose durable and stylish wheels to enhance performance and look',
        icon: <WheelsIcon />,
        href: '/catalog?category=wheels'
    },
    {
        title: 'Body Parts',
        description: 'Find essential parts to keep your BMW\'s engine running smoothly',
        icon: <BodyPartsIcon />,
        href: '/catalog?category=body-parts'
    },
    {
        title: 'Interior',
        description: 'Repair or upgrade your BMW\'s exterior with quality body parts',
        icon: <InteriorIcon />,
        href: '/catalog?category=interior'
    }
];

export const PopularCategories: React.FC = () => {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <TextEffectOne className={s.title} staggerDuration={0.02} animateOnce={false} text="POPULAR CATEGORIES" />

                <div className={s.grid}>
                    {categories.map((category, index) => (
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
