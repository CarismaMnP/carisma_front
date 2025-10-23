'use client';

import s from './Catalog.module.css';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mockSpareParts } from '@/shared/data/sparePartsMock';
import { TextEffectOne, TextEffectThree } from 'react-text-animate';
import { Reveal } from '@/shared/ui/Reveal';
import { CategoryCard } from '@/components/CategoryCard/CategoryCard';
import { categoriesDict } from '@/shared/data/partCategories';
import { SparePartCard } from '@/components/SparePartCard/SparePartCard';
import { SearchingForm } from '../SearchingForm';
import { usePathname, useRouter } from 'next/navigation';
import { categoriesOptions, generationOptions, makeOptions, modelOptions } from '@/shared/data/filtersOptions';
import { CatalogFilters } from '@/components/CatalogFilters';
import { ArrowIcon } from '@/shared/assets';
import { BurgerNavbar } from '@/components/BurgerNavbar';
import { StickyNavbar } from '@/components/StickyNavbar';

export type TFilters = {
  make?: string
  model?: string
  generation?: string
  category?: string
  oemNumber?: string
}

export const Catalog = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const filtersQuery = searchParams.get('filters')

  const safeParseFilters = (value: string | null): TFilters => {
    if (!value) return {}
    try {
      const parsed = JSON.parse(value)
      if (parsed && typeof parsed === 'object') return parsed
      return {}
    } catch (_) {
      return {}
    }
  }

  const [filters, setFilters] = useState<TFilters>(() => safeParseFilters(filtersQuery))

  const [items, setItems] = useState(mockSpareParts)
  const [filteredItems, setFilteredItems] = useState(mockSpareParts)

  // Sync URL when filters change
  useEffect(() => {
    const next = new URLSearchParams(searchParams.toString())
    if (filters && Object.keys(filters).length > 0) {
      next.set('filters', encodeURIComponent(JSON.stringify(filters)))
    } else {
      next.delete('filters')
    }
    router.replace(`${pathname}?${next.toString()}`, { scroll: true })
  }, [filters])

  // Parse filters from URL when it changes (e.g., back/forward navigation)
  useEffect(() => {
    const parsed = safeParseFilters(filtersQuery ? decodeURIComponent(filtersQuery) : null)
    setFilters(prev => ({ ...prev, ...parsed }))
  }, [filtersQuery])

  // Apply filters to items
  useEffect(() => {
    const apply = () => {
      const next: Partial<typeof mockSpareParts> = {}

      const categoryFilter = filters?.category

      const categories = categoryFilter ? [categoryFilter] : Object.keys(items)

      categories.forEach((categoryKey) => {
        const list = (items as any)[categoryKey] || []

        const filteredList = list.filter((part: any) => {
          // Basic category match already selected by categoryKey
          // Make/Model/Generation: mock data contains only BMW 3-series; keep predicates for future data
          const makeOk = filters?.make ? true : true
          const modelOk = filters?.model ? true : true
          const generationOk = filters?.generation ? true : true
          return makeOk && modelOk && generationOk
        })

        if (filteredList.length) {
          (next as any)[categoryKey] = filteredList
        }
      })

      setFilteredItems(next as any)
    }

    apply()
  }, [filters, items])


  const [showStickyFilters, setShowStickyFilters] = useState(false)

  const controlNavbar = () => {
    const breakproint = window.innerWidth > 745 ? 115 : 65
    setShowStickyFilters(window.scrollY > breakproint);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  const [expandFilters, setExpandFilters] = useState(true)

  return (
    <>
      <BurgerNavbar>
        {showStickyFilters &&
          <div className={s.stickyFilters}>

            <div className={`${s.filtersWrapper} ${expandFilters ? s.expandedFilters : ''}`}>
              <CatalogFilters filters={filters} setFilters={setFilters} />
            </div>

            <div className={s.expandFiltersButton} onClick={() => setExpandFilters(prev => !prev)}>
              <ArrowIcon style={{ transform: `rotate(${expandFilters ? '270' : '90'}deg)` }} />
            </div>
          </div>
        }
      </BurgerNavbar>

      <StickyNavbar alwaysShow>
        {showStickyFilters &&
          <div className={s.stickyFilters}>

            <div className={`${s.filtersWrapper} ${expandFilters ? s.expandedFilters : ''}`}>
              <CatalogFilters filters={filters} setFilters={setFilters} />
            </div>

            <div className={s.expandFiltersButton} onClick={() => setExpandFilters(prev => !prev)}>
              <ArrowIcon style={{ transform: `rotate(${expandFilters ? '270' : '90'}deg)` }} />
            </div>
          </div>
        }
      </StickyNavbar>


      <section className={s.section}>

        <div className={s.catalogHeader}>

          <div className={s.catalogTitle}>
            <TextEffectOne className={s.title} staggerDuration={0.02} animateOnce={false} text="ALL SPARE PARTS" />
            <TextEffectOne className={s.titleCount} staggerDuration={0.02} animateOnce={false} text="1728" />
          </div>
          {!showStickyFilters &&
            <div className={s.filters}>
              <CatalogFilters filters={filters} setFilters={setFilters} />
            </div>
          }
        </div>


        <div className={s.container}>
          {Object.entries(filteredItems)?.map(([category, parts], index) => {
            const categoryData = categoriesDict?.[category as keyof typeof categoriesDict] || null

            if (!categoryData || !parts?.length) return null

            return (
              <>
                {index === 2 &&
                  <Reveal delay={index * 0.1} >
                    <SearchingForm title={<span>Please let us know, which part<br />you need for your vehicle?</span>} />
                  </Reveal>
                }

                <div className={s.grid} key={category}>
                  <Reveal delay={index * 0.1} height='100%'>
                    <CategoryCard
                      title={categoryData.title}
                      description={categoryData.description}
                      icon={categoryData.icon}
                    />
                  </Reveal>

                  {parts?.map((part, partIndex) =>
                    <Reveal key={part?.id} delay={partIndex * 0.1}>
                      <SparePartCard {...part} href={`#`} />
                    </Reveal>
                  )}
                </div>
              </>
            )
          })}

        </div>
      </section >
    </>
  );
};
