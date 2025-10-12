'use client';
import s from './CompetitiveAdvantages.module.css';

export const CompetitiveAdvantages = () => {
    return (
        <section className={s.advantages}>
            <div className={s.container}>
                <h2 className={s.title}>Our Competitive Advantages</h2>

                <div className={s.grid}>
                    {/* Row 1 */}
                    <div className={s.cell}>
                        <h3 className={s.cellTitle}>BMW-Only Specialization</h3>
                        <p className={s.cellDescription}>No distractions, just BMW expertise.</p>
                    </div>
                    <div className={s.cell}>
                        <h3 className={s.cellTitle}>Strict Vehicle Selection</h3>
                        <p className={s.cellDescription}>Late-model cars with low mileage and excellent condition.</p>
                    </div>

                    {/* Row 2 */}
                    <div className={s.cell}>
                        <h3 className={s.cellTitle}>OEM Quality Guaranteed</h3>
                        <p className={s.cellDescription}>Original parts tested and verified.</p>
                    </div>
                    <div className={s.cell}>
                        <h3 className={s.cellTitle}>Rapid Processing & Shipping</h3>
                        <p className={s.cellDescription}>Orders shipped nationwide</p>
                    </div>

                    {/* Row 3 */}
                    <div className={s.cell}>
                        <h3 className={s.cellTitle}>Expert Consultation</h3>
                        <p className={s.cellDescription}>We help find exactly the part you need.</p>
                    </div>
                    <div className={s.cell}>
                        <h3 className={s.cellTitle}>Global Sourcing</h3>
                        <p className={s.cellDescription}>Ability to locate rare BMW parts unavailable<br />in the open market.</p>
                    </div>

                    {/* Row 4 */}
                    <div className={s.cell}>
                        <h3 className={s.cellTitle}>Wholesale & Retail Options</h3>
                        <p className={s.cellDescription}>Serving both businesses and individual BMW owners.</p>
                    </div>
                    <div className={s.cell}>
                        <h3 className={s.cellTitle}>Sustainability Focus</h3>
                        <p className={s.cellDescription}>Extending the life cycle of OEM components, reducing waste.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

