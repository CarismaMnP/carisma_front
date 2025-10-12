'use client';
import { Reveal } from '@/shared/ui/Reveal';
import s from './AboutUs.module.css';
import { TextEffectOne } from 'react-text-animate'

export const AboutUs = () => {
    return (
        <div className={s.aboutUs}>
            <div className={s.container}>
                <div className={s.section}>

                    <div className={s.content}>
                        <div className={s.contentLeft}>
                            <TextEffectOne className={s.sectionTitle} staggerDuration={0.03} animateOnce={false} text="ABOUT US" />
                            <div className={s.description}>
                                <TextEffectOne staggerDuration={0.02} initialDelay={0.1} animateOnce={false} text="We specialize in dismantling BMW" />
                                <TextEffectOne staggerDuration={0.02} initialDelay={0.3} animateOnce={false} text="vehicles and offering high-quality" />
                                <TextEffectOne staggerDuration={0.02} initialDelay={0.5} animateOnce={false} text="spare parts for resale." />
                            </div>
                        </div>

                        <div className={s.statsGrid}>
                            <Reveal delay={0.1} duration={0.5} height='100%'>
                                <div className={`${s.statCard} ${s.statCardBlack}`}>
                                    <TextEffectOne className={s.statNumber} staggerDuration={0.05} animateOnce={false} text="1,200+" />
                                    <Reveal delay={0.2} duration={0.7}>
                                        <p className={s.statDescription}>Thoroughly inspected BMW cars</p>
                                    </Reveal>
                                </div>
                            </Reveal>

                            <Reveal delay={0.2} duration={0.5} height='100%'>
                                <div className={`${s.statCard} ${s.statCardWhite}`}>
                                    <TextEffectOne className={s.statNumber} staggerDuration={0.05} animateOnce={false} text="8+ years" />
                                    <Reveal delay={0.2} duration={0.7}>
                                        <p className={s.statDescription}>Experience in the industry</p>
                                    </Reveal>
                                </div>
                            </Reveal>

                            <Reveal delay={0.3} duration={0.5} height='100%'>
                                <div className={`${s.statCard} ${s.statCardWhite}`}>
                                    <TextEffectOne className={s.statNumber} staggerDuration={0.05} animateOnce={false} text="15,000+" />
                                    <Reveal delay={0.2} duration={0.7}>
                                        <p className={s.statDescription}>Parts in stock</p>
                                    </Reveal>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <div className={s.callButton}>
                        <span>Call Us — +1 (786) 945-0455</span>
                    </div>
                </div>
            </div >
        </div >
    );
};
