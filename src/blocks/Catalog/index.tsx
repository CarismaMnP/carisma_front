'use client';

import s from './Catalog.module.css';

import { CatalogFilters } from '@/components/CatalogFilters';
import { ProductsList } from '@/blocks/ProductsList';
import { apiUrlBuilder } from '@/shared/utils/urlBuilder';
import { Suspense, useEffect, useState } from 'react';
import { IProduct } from '@/shared/types/Product';
import { CategoryCard } from '@/components/CategoryCard';
import { ICategory } from '@/shared/types/Category';
import { ICarSearchParams } from '@/shared/types/Car';
import { getFullCarName } from '@/shared/utils/carDataUtils';
import { carMockData } from '@/shared/data/carMockData';

interface CatalogProps {
  searchParams?: ICarSearchParams;
}

export const Catalog = ({ searchParams }: CatalogProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const [products, setProducts] = useState<IProduct[]>();
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<ICategory | null>(null);

  const [category, setCategory] = useState<ICategory | null>(null);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);
  const [isSearchMode, setIsSearchMode] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      setIsMobile(window?.innerWidth <= 768);
    }
  }, []);

  // Обработка параметров поиска
  useEffect(() => {
    if (searchParams && (searchParams.make || searchParams.model || searchParams.body || searchParams.engine || searchParams.oem)) {
      setIsSearchMode(true);

      // Получаем полное название автомобиля
      const carName = searchParams.make && searchParams.model && searchParams.body && searchParams.engine
        ? getFullCarName(carMockData, searchParams.make, searchParams.model, searchParams.body, searchParams.engine)
        : 'BMW Vehicle';

      // Моковые результаты поиска
      const mockSearchResults: IProduct[] = [
        {
          id: 1,
          name: `${carName} - Brake Pad Set`,
          description: 'High quality brake pads for BMW vehicles',
          link: '/product/1',
          price: 89.99,
          brightness: 0,
          old_price: 0,
          categoryId: 1,
          about: 'High quality brake pads for BMW vehicles',
          recipe: {},
          additionalFields: { oemNumber: searchParams.oem || '11427512345' },
          weight: 2.5,
          variation: [],
          processing: [],
          fermentation: [],
          region: '',
          farmer: '',
          keyDescriptor: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          images: []
        },
        {
          id: 2,
          name: `${carName} - Oil Filter`,
          description: 'Genuine BMW oil filter',
          link: '/product/2',
          price: 24.99,
          brightness: 0,
          old_price: 0,
          categoryId: 2,
          about: 'Genuine BMW oil filter',
          recipe: {},
          additionalFields: { oemNumber: '11427512346' },
          weight: 0.5,
          variation: [],
          processing: [],
          fermentation: [],
          region: '',
          farmer: '',
          keyDescriptor: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          images: []
        },
        {
          id: 3,
          name: `${carName} - Air Filter`,
          description: 'High performance air filter',
          link: '/product/3',
          price: 34.99,
          brightness: 0,
          old_price: 0,
          categoryId: 3,
          about: 'High performance air filter',
          recipe: {},
          additionalFields: { oemNumber: '11427512347' },
          weight: 0.8,
          variation: [],
          processing: [],
          fermentation: [],
          region: '',
          farmer: '',
          keyDescriptor: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          images: []
        }
      ];
      setSearchResults(mockSearchResults);
    } else {
      setIsSearchMode(false);
      setSearchResults([]);
    }
  }, [searchParams]);

  async function getProducts() {
    const regionsParam = encodeURIComponent(JSON.stringify(selectedRegions));
    const url = `/product?categoryId=${category?.id || ''}&regions=${regionsParam}`;
    try {
      const res = await fetch(apiUrlBuilder(url));
      const data = await res.json();
      setProducts(data?.rows || []);
    } catch (error) {
      console.log(error);
    }
  }

  const mergeCategories = (
    selectedSubCategory: ICategory | null,
    selectedCategory: ICategory | null,
  ) => {
    if (selectedSubCategory?.id) {
      setCategory(selectedSubCategory);
      return;
    }
    if (selectedCategory?.id) {
      setCategory(selectedCategory);
      return;
    }
    setCategory(null);
  };

  useEffect(() => {
    mergeCategories(selectedSubCategory, selectedCategory);
  }, [selectedSubCategory, selectedCategory]);

  useEffect(() => {
    getProducts();
  }, [category?.id, selectedRegions]);

  return (
    <div className={s.catalogBlockWrapper}>
      <div className={s.categoryWrapper}>
        {isSearchMode ? (
          <div className={s.searchHeader}>
            <h2>Search Results</h2>
            <p>
              {searchParams?.make && `Make: ${searchParams.make.toUpperCase()}`}
              {searchParams?.model && ` | Model: ${searchParams.model}`}
              {searchParams?.body && ` | Body: ${searchParams.body}`}
              {searchParams?.engine && ` | Engine: ${searchParams.engine}`}
              {searchParams?.oem && ` | OEM: ${searchParams.oem}`}
            </p>
          </div>
        ) : (
          <>
            {category && !isMobile && <CategoryCard category={category} noButton />}
            {!category && !isMobile && (
              <CategoryCard
                category={
                  {
                    imageUrl: '/categorybg.jpeg',
                    name: 'Кофейные лоты, спешалти кофе, чай',
                  } as ICategory
                }
                hardcodeImage
                noButton
              />
            )}
          </>
        )}
      </div>
      <div className={s.catalog_wrapper}>
        {!isSearchMode && (
          <Suspense>
            <CatalogFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSubCategory={selectedSubCategory}
              setSelectedSubCategory={setSelectedSubCategory}
              selectedRegions={selectedRegions}
              setSelectedRegions={setSelectedRegions}
            />
          </Suspense>
        )}
        <div className={s.products}>
          {isSearchMode ? (
            searchResults && searchResults.length > 0 ? (
              <ProductsList products={searchResults} />
            ) : (
              <div className={s.noResults}>
                <p>No spare parts found for the selected criteria.</p>
              </div>
            )
          ) : (
            products && !!products?.length && <ProductsList products={products} />
          )}
        </div>
      </div>
    </div>
  );
};
