'use client';
import s from './Footer.module.css';
import Link from 'next/link';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.links}>
                    <Link className={s.link} href="#">Used Parts</Link>
                    <Link className={s.link} href="#">Arrived Vehicles</Link>
                    <Link className={s.link} href="#">About</Link>
                    <Link className={s.link} href="#">Contact Us</Link>
                </div>
                <div className={s.legal}>
                    <Link className={s.link} href="#">© CARisma M&P. All rights reserved.</Link>
                    <div className={s.links}>
                        <Link className={s.link} href="#">Privacy Policy</Link>
                        <Link className={s.link} href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
