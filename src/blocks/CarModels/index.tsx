'use client';

import React, { useState, useMemo, useEffect } from 'react';
import s from './CarModels.module.css';
import { CarModelCard } from '@/components/CarModelCard/CarModelCard';
import { Reveal } from '@/shared/ui/Reveal';
import { TextEffectOne } from 'react-text-animate';
import { useLenis } from 'lenis/react';

const carModels = [
    {
        model: 'Series 1',
        image: '/car/1.png',
    },
    {
        model: 'Series 2',
        image: '/car/2.png',
    },
    {
        model: 'Series 3',
        image: '/car/3.png',
    },
    {
        model: 'Series 4',
        image: '/car/4.png',
    },
    {
        model: 'Series 5',
        image: '/car/5.png',
    },
    {
        model: 'Series 6',
        image: '/car/6.png',
    },
    {
        model: 'Series 7',
        image: '/car/7.png',
    },
    {
        model: 'Series 8',
        image: '/car/8.png',
    },
    {
        model: 'i3',
        image: '/car/i3.png',
    },
    {
        model: 'i4',
        image: '/car/i4.png',
    },
    {
        model: 'i8',
        image: '/car/i8.png',
    },
    {
        model: 'iX',
        image: '/car/iX.png',
    },
    {
        model: 'X1',
        image: '/car/X1.png',
    },
    {
        model: 'X2',
        image: '/car/X2.png',
    },
    {
        model: 'X3',
        image: '/car/X3.png',
    },
    {
        model: 'X4',
        image: '/car/X4.png',
    },
    {
        model: 'X5',
        image: '/car/X5.png',
    },
    {
        model: 'X6',
        image: '/car/X6.png',
    },
    {
        model: 'X7',
        image: '/car/X7.png',
    },
    {
        model: 'XM',
        image: '/car/XM.png',
    },
];


export const CarModels: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [showAllModels, setShowAllModels] = useState(false);
    const lenis = useLenis();

    const filteredModels = useMemo(() => {
        if (!searchQuery.trim()) {
            return carModels;
        }
        return carModels.filter(model =>
            model.model.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const displayedModels = useMemo(() => {
        if (showAllModels) {
            return filteredModels;
        }
        return filteredModels.slice(0, isMobile ? 6 : 5);
    }, [filteredModels, showAllModels]);

    // Обновляем Lenis при изменении количества отображаемых элементов
    useEffect(() => {
        if (window.innerWidth <= 580) {
            setIsMobile(true);
        }
        // Небольшая задержка, чтобы DOM успел обновиться
        const timer = setTimeout(() => {
            if (lenis) {
                lenis.resize();
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [displayedModels.length, lenis]);

    const handleShowAllModels = () => {
        setShowAllModels(!showAllModels);
    };

    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.modelsGrid}>
                    {/* Title Card - First Grid Item */}
                    <div className={s.titleCard}>
                        <div className={s.title_wrapper}>
                            <TextEffectOne className={s.title} staggerDuration={0.02} animateOnce={false} text="FIND SPARE PARTS" />
                            <TextEffectOne className={s.title} staggerDuration={0.02} initialDelay={0.1} animateOnce={false} text="BY MODEL" />
                        </div>

                        <div className={s.searchWrapper}>
                            <div className={s.searchIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                className={s.searchInput}
                                placeholder="Start enter model name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Car Model Cards */}
                    {displayedModels.map((model, index) => (
                        <Reveal key={index} delay={(index + 1) % 3 * 0.2}>
                            <CarModelCard
                                model={model.model}
                                image={model.image}
                                href={`/catalog?filters=${JSON.stringify({ model: '7-series' })}`}
                            />
                        </Reveal>
                    ))}
                </div>
                {filteredModels.length > (isMobile ? 6 : 5) && (
                    <Reveal width="100%" delay={0.1}>
                        <button
                            className={s.allModelsButton}
                            onClick={handleShowAllModels}
                        >
                            {showAllModels ? "Show Less Models" : "Show All Models"}
                        </button>
                    </Reveal>
                )}
            </div>
        </section>
    );
};
