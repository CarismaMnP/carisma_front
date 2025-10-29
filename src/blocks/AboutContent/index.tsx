'use client';
import Image from 'next/image';
import s from './AboutContent.module.css';



export const AboutContent = ({start}: {start?: boolean}) => {
    return (
        <section className={s.aboutContent}>
            {/* First Row: Text Left, Image Right */}
            {
                start &&
                <div className={s.row}>
                    <div className={s.textBlock}>
                        <p>
                            Unlike general auto dismantlers, we are 100% BMW-focused, which means every purchase, every part, and every customer interaction is guided by deep brand expertise. We know BMW inside and out — every component, every system, every standard of quality.
                        </p>
                        <p>
                            We buy only select vehicles that meet our strict criteria: latest or previous-generation BMW models, no older than seven years, with minimal mileage and maximum residual value. This guarantees that our clients receive components that deliver original performance, reliability, and long-term durability.
                        </p>
                    </div>
                    <div className={s.imagePlaceholder}>
                        <Image
                            alt="about image"
                            src="/about3.jpeg" 
                            fill
                            objectFit='cover'
                        />

                    </div>
                </div>
            }

            {/* Second Row: Image Left, Text Right */}
            {
                !start &&
            <div className={s.row}>
                <div className={s.imagePlaceholder}>
                    <Image
                        alt="about image"
                        src="/about2.jpeg" 
                        fill
                        objectFit='cover'
                    />
                </div>
                <div className={s.textBlock}>
                    <p>
                        From precision-tested engines and transmissions to interior, electronic, and body components, each part undergoes thorough inspection and professional handling. Our clients include BMW repair shops, independent mechanics, dealerships, and enthusiasts who demand nothing less than the best.
                    </p>
                    <p>
                        At CARisma M&P, we're not just selling parts — we're preserving BMW performance for years to come.
                    </p>
                    <p>
                        Take Our Part of CARisma
                    </p>
                </div>
            </div>
            }
        </section>
    );
};

