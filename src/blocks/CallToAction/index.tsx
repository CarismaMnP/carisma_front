'use client';
import s from './CallToAction.module.css';

export const CallToAction = () => {
    return (
        <section className={s.cta}>
            <div className={s.container}>
                <a href="tel:+17869194071" className={s.button}>
                    Call Us — +1 (786) 919-4071
                </a>
            </div>
        </section>
    );
};

