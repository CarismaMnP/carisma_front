'use client';
import { useState } from 'react';
import s from './SearchingForm.module.css';
import Image from 'next/image';

export const SearchingForm = () => {
    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedGeneration, setSelectedGeneration] = useState('');
    const [email, setEmail] = useState('');
    const [partSearching, setPartSearching] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            selectedMake,
            selectedModel,
            selectedGeneration,
            email,
            partSearching
        });
    };

    return (
        <div className={s.searchingForm}>
            <div className={s.container}>
                <h2 className={s.title}>
                    To assist you better could you let us know<br />
                    the specific part you are searching for?
                </h2>

                <form className={s.form} onSubmit={handleSubmit}>
                    <div className={s.fieldsWrapper}>
                        <div className={s.fieldsGrid}>
                            <div className={s.leftColumn}>
                                <select
                                    value={selectedMake}
                                    onChange={(e) => setSelectedMake(e.target.value)}
                                    className={s.select}
                                >
                                    <option value="">Make</option>
                                    <option value="bmw">BMW</option>
                                </select>

                                <select
                                    value={selectedModel}
                                    onChange={(e) => setSelectedModel(e.target.value)}
                                    className={s.select}
                                >
                                    <option value="">Model</option>
                                    <option value="x5">X5</option>
                                    <option value="x3">X3</option>
                                </select>
                            </div>

                            <div className={s.rightColumn}>
                                <select
                                    value={selectedGeneration}
                                    onChange={(e) => setSelectedGeneration(e.target.value)}
                                    className={s.select}
                                >
                                    <option value="">Generation</option>
                                    <option value="g05">G05</option>
                                    <option value="f15">F15</option>
                                </select>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="E-mail"
                                    className={s.input}
                                />
                            </div>
                        </div>

                        <input
                            type="text"
                            value={partSearching}
                            onChange={(e) => setPartSearching(e.target.value)}
                            placeholder="Which part are searching for?"
                            className={s.inputFull}
                        />
                    </div>

                    <button type="submit" className={s.submitButton}>
                        Submit Request
                    </button>
                </form>
            </div>

            <div className={s.carImage}>
                <Image
                    src="/searchingForm.png"
                    alt="BMW Car"
                    fill
                    objectFit="cover"
                />
            </div>
        </div>
    );
};
