'use client';
import s from './AboutImage.module.css';

export const AboutImage = () => {
    return (
        <section className={s.aboutImage}>
            <div className={s.imageWrapper}>
                <img
                    src="/herobg.png"
                    alt="BMW Vehicle"
                    className={s.image}
                />
            </div>
        </section>
    );
};

