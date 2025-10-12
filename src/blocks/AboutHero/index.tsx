'use client';
import s from './AboutHero.module.css';

export const AboutHero = () => {
    return (
        <section className={s.aboutHero}>
            <div className={s.container}>
                <h1 className={s.title}>ABOUT US</h1>
                <div className={s.description}>
                    <p>
                        At CARisma M&P, we focus on one thing — doing BMW better than anyone else. Based in Jacksonville, Florida, we specialize exclusively in acquiring late-model BMW vehicles with low mileage and carefully dismantling them to offer premium OEM parts with a long remaining service life.
                    </p>
                </div>
            </div>
        </section>
    );
};

