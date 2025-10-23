'use client';

import s from './Hero.module.css';
import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import { BurgerNavbar } from '@/components/BurgerNavbar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { carMockData, mockOEMResults } from '@/shared/data/carMockData';
import {
  getModelsByMake,
  getBodiesByModel,
  getEnginesByBody,
  mockSearchOEM
} from '@/shared/utils/carDataUtils';
import { Reveal } from '@/shared/ui/Reveal';

export const Hero = () => {
  const router = useRouter();
  const [selectedMake, setSelectedMake] = useState('bmw');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedBody, setSelectedBody] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('');
  const [oemNumber, setOemNumber] = useState('');
  const [oemSuggestions, setOemSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Debounced search for OEM Number
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (oemNumber.length >= 3) {
        const results = await mockSearchOEM(oemNumber, mockOEMResults);
        setOemSuggestions(results);
        setShowSuggestions(true);
      } else {
        setOemSuggestions([]);
        setShowSuggestions(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [oemNumber]);

  const handleModelChange = (modelId: string) => {
    setSelectedModel(modelId);
    setSelectedBody('');
    setSelectedEngine('');
  };

  const handleBodyChange = (bodyId: string) => {
    setSelectedBody(bodyId);
    setSelectedEngine('');
  };

  const handleEngineChange = (engineId: string) => {
    setSelectedEngine(engineId);
  };

  const handleOemSuggestionClick = (suggestion: string) => {
    setOemNumber(suggestion);
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (selectedMake) params.append('make', selectedMake);
    if (selectedModel) params.append('model', selectedModel);
    if (selectedBody) params.append('body', selectedBody);
    if (selectedEngine) params.append('engine', selectedEngine);
    if (oemNumber) params.append('oem', oemNumber);

    router.push(`/catalog?filters=${JSON.stringify({ make: selectedMake, model: selectedModel, oemNumber })}`);
  };

  const availableModels = getModelsByMake(carMockData, selectedMake);
  const availableBodies = selectedModel ? getBodiesByModel(carMockData, selectedMake, selectedModel) : [];
  const availableEngines = selectedModel && selectedBody
    ? getEnginesByBody(carMockData, selectedMake, selectedModel, selectedBody)
    : [];

  return (
    <div className={s.hero}>
      <div className={s.navbar_wrapper}>
        <Navbar />
        <BurgerNavbar />
      </div>
      <main className={s.hero_main}>
        <div className={s.background}>
          <Image
            src='/herobg.png'
            alt='Background'
            layout='fill'
            objectFit='cover'
            objectPosition='center top'
            priority
          />
        </div>
        <div className={s.background_mobile}>
          <Image
            src='/herobgm.png'
            alt='Background'
            layout='fill'
            objectFit='cover'
            objectPosition='center top'
            priority
          />
        </div>
        <div className={s.content}>
          <div className={s.titleSection}>
            <Reveal delay={0}>
              <h1 className={s.title}>
                Find spare parts
              </h1>
            </Reveal>
            <Reveal delay={0}>
              <h1 className={s.title}>
                for your BMW
              </h1>
            </Reveal>
          </div>
          <div className={s.formSection}>
            <Reveal delay={0}>
              <form className={s.searchForm} onSubmit={handleSubmit}>
                <div className={s.formRow}>
                  <div className={s.selectGroup}>
                    <select
                      id="make"
                      value={selectedMake}
                      onChange={(e) => setSelectedMake(e.target.value)}
                      className={s.select}
                    >
                      <option value="">Make</option>
                      {carMockData.makes.map(make => (
                        <option key={make.id} value={make.id}>{make.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className={s.selectGroup}>
                    <select
                      id="model"
                      value={selectedModel}
                      onChange={(e) => handleModelChange(e.target.value)}
                      className={s.select}
                      disabled={!availableModels.length}
                    >
                      <option value="">Model</option>
                      {availableModels.map(model => (
                        <option key={model.id} value={model.id}>{model.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className={s.oemGroup}>
                    <div className={s.oemInputWrapper}>
                      <svg className={s.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                      <input
                        id="oem"
                        type="text"
                        value={oemNumber}
                        onChange={(e) => setOemNumber(e.target.value)}
                        placeholder="OEM Number / Part Name"
                        className={s.oemInput}
                      />
                      {showSuggestions && oemSuggestions.length > 0 && (
                        <div className={s.suggestions}>
                          {oemSuggestions.map((suggestion, index) => (
                            <div
                              key={index}
                              className={s.suggestion}
                              onClick={() => handleOemSuggestionClick(suggestion)}
                            >
                              {suggestion}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className={s.formRow}>
                  <div className={s.selectGroup}>
                    <select
                      id="body"
                      value={selectedBody}
                      onChange={(e) => handleBodyChange(e.target.value)}
                      className={s.select}
                      disabled={!availableBodies.length}
                    >
                      <option value="">Body</option>
                      {availableBodies.map(body => (
                        <option key={body.id} value={body.id}>{body.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className={s.selectGroup}>
                    <select
                      id="engine"
                      value={selectedEngine}
                      onChange={(e) => handleEngineChange(e.target.value)}
                      className={s.select}
                      disabled={!availableEngines.length}
                    >
                      <option value="">Engine</option>
                      {availableEngines.map(engine => (
                        <option key={engine.id} value={engine.id}>{engine.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className={s.buttonGroup}>
                    <button type="submit" className={s.submitButton}>
                      Find Spare Parts
                    </button>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </main>
    </div>
  );
};
