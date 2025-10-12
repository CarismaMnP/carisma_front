'use client';
import s from './AboutImage.module.css';

export const AboutImage = () => {
    return (
        <section className={s.aboutImage}>
            <div className={s.imageWrapper}>
                <img
                    src="http://localhost:3845/assets/6c4d84588ce9be5283a14cd65c5411a9a0a42564.png"
                    alt="BMW Vehicle"
                    className={s.image}
                />
            </div>
        </section>
    );
};

