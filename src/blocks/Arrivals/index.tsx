'use client';
import s from './Arrivals.module.css';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { apiUrlBuilder } from '@/shared/utils/urlBuilder';
import Link from 'next/link';
import { TextEffectOne } from 'react-text-animate';

interface IArrival {
    id: string;
    model: string;
    body: string;
    year: string;
    imageURL: string;
}

interface ArrivalCardProps {
    arrival: IArrival;
    index: number;
    totalCount: number;
    scrollYProgress: MotionValue<number>;
    isMobile: boolean;
}

const data = [
    {
        "id": 3,
        "model": "3 series",
        "body": "E46 318i N46",
        "year": 2002,
        "imageURL": "arrivals/2025/09/1759251326344_75a0f59c8c004bdd.png",
        "createdAt": "2025-09-30T16:55:26.978Z",
        "updatedAt": "2025-09-30T16:55:26.978Z"
    },
    {
        "id": 2,
        "model": "3 series",
        "body": "E46 318i N46",
        "year": 2002,
        "imageURL": "arrivals/2025/09/1759251308944_192417e38b113fe6.png",
        "createdAt": "2025-09-30T16:55:09.481Z",
        "updatedAt": "2025-09-30T16:55:09.481Z"
    },
    {
        "id": 1,
        "model": "3 series",
        "body": "E46 318i N46",
        "year": 2002,
        "imageURL": "arrivals/2025/09/1759251292262_93a400978b7df819.png",
        "createdAt": "2025-09-21T12:11:46.392Z",
        "updatedAt": "2025-09-30T16:54:54.231Z"
    }
]


const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

const ArrivalCard = ({ arrival, index, totalCount, scrollYProgress, isMobile }: ArrivalCardProps) => {
    const CARD_GAP = isMobile ? 320 : 680;      // расстояние между слоями (видимая ступень)
    const LIFT = 20;         // доп. подъём верхней карточки в конце своего сегмента

    const baseY = index * CARD_GAP;
    const baseScale = 1;
    const zIndex = index;
    const selfRef = useRef<HTMLDivElement>(null);

    const localProgress = useTransform(scrollYProgress, v => {
        const step = 0.2;
        const start = index * step;
        const p = (v - start) / step;
        if (index === 0) {
            return 0;
        }
        return clamp(p, 0, 1);
    });

    const scrollProgress = useTransform(scrollYProgress, v => {
        const step = 0.2;
        const start = index * step;
        const p = (v - start) / step;
        return clamp(p, 0, 1);
    });

    // движение: ступень + дополнительный подъём к концу сегмента
    const y = useTransform(localProgress, [0, 1], [baseY, baseY - index * CARD_GAP + (LIFT * index)]);
    const minusY = useTransform(scrollProgress, [0, 0.7, 1], [0, 0, (totalCount - index) * -15]);

    // масштаб: якорим снизу, чтобы «оседало»
    const scale = useTransform(scrollProgress, [0, 0.7, 1], [baseScale, baseScale, 1 - 0.03 * (totalCount - index)]);

    // плавнее (убирает микро-дёргания)
    const ySpring = useSpring(y, { stiffness: 280, damping: 36, mass: 0.6 });
    const scaleSpring = useSpring(scale, { stiffness: 280, damping: 36, mass: 0.6 });

    return (
        <motion.div
            className={s.arrivalCard}
            style={isMobile ? { zIndex } :
                {
                    y: ySpring,
                    top: minusY,
                    scale: scaleSpring,
                    zIndex,
                    // очень важно: масштаб от низа карточки
                    originY: 1,
                    // transformOrigin: 'center top'
                }}
            ref={selfRef}
            // никаких y в whileInView — иначе конфликт
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
        >
            <div className={s.circle}></div>
            <div className={s.bg}> </div>
            <div className={s.noise}>
                <Image
                    src="/noise.png"
                    alt="noise layer"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={s.cardImage}>
                <Image
                    src={`https://pub-bc3786b523da4133a78648b83b419424.r2.dev/${arrival.imageURL}`}
                    alt={`${arrival.model} ${arrival.year}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 70vw"
                />
            </div>

            <div className={s.cardContent}>
                <TextEffectOne staggerDuration={0.02} animateOnce={false} text={arrival.model + ' ' + arrival.year} />
                <TextEffectOne staggerDuration={0.02} initialDelay={0.1} animateOnce={false} text={arrival.body} />
            </div>

            <div className={s.cardOverlay}>
                <Link href={`/catalog?model=${arrival.model}&year=${arrival.year}`} className={s.viewButton}>
                    View Parts
                    <svg width="10" height="16" viewBox="0 0 10 20" fill="none">
                        <path d="M1 1L9 10L1 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </motion.div>
    );
};

export const Arrivals = () => {
    const [arrivals, setArrivals] = useState<IArrival[]>(data as any);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    // прокручиваем всю секцию; sticky-область внутри останется на месте
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['0.2 1', '1 0.2'],
    });

    useEffect(() => {
        if (window.innerWidth <= 580) {
            setIsMobile(true);
        }
        // (async () => {
        //     try {
        //         const res = await fetch(apiUrlBuilder('/arrivals'));
        //         const data = await res.json();
        //         setArrivals(data);
        //     } catch (e) {
        //         console.log(e);
        //     }
        // })();
    }, []);

    // высота секции: чем больше карточек, тем длиннее анимация
    const sectionMinHeight = isMobile ? `unset` : `calc(100vh + ${(Math.max(arrivals.length - 1, 0)) * 600}px)`;

    return (
        <section className={s.arrivals} ref={sectionRef} style={{ minHeight: sectionMinHeight }}>
            <div className={s.sticky}>
                <TextEffectOne className={s.sectionTitle} staggerDuration={0.03} animateOnce={false} text="Latest arrivals" />
                <div className={s.cardsContainer}>
                    {arrivals.map((arrival, index) => (
                        <ArrivalCard
                            key={arrival.id}
                            isMobile={isMobile}
                            arrival={arrival}
                            index={index}
                            totalCount={arrivals.length}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
