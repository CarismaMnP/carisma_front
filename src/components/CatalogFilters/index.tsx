import { Dispatch, FC, SetStateAction } from 'react';
import s from './CatalogFilters.module.css';
import { TFilters } from '@/blocks/Catalog';
import { categoriesOptions, generationOptions, makeOptions, modelOptions } from '@/shared/data/filtersOptions';

interface CatalogFiltersProps {
  filters: TFilters
  setFilters: Dispatch<SetStateAction<TFilters>>
}

export const CatalogFilters: FC<CatalogFiltersProps> = ({ filters, setFilters }) => {

  const availableGenerations = filters?.model ? (generationOptions as any)?.[filters.model] || [] : []

  return (
    <>
      <div className={s.selectGroup}>
        <select
          id="make"
          className={s.select}
          value={filters?.make || ''}
          onChange={(e) => {
            const nextMake = e.target.value || undefined
            setFilters((prev) => {
              const next: TFilters = { ...prev, make: nextMake }
              return next
            })
          }}
        >
          <option value=''>Make</option>
          {makeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.title}</option>
          ))}
        </select>
      </div>

      <div className={s.selectGroup}>
        <select
          id="model"
          className={s.select}
          value={filters?.model || ''}
          onChange={(e) => {
            const nextModel = e.target.value || undefined
            setFilters((prev) => {
              const next: TFilters = { ...prev, model: nextModel }
              // Reset generation if it's not in the new model list
              const gens = nextModel ? (generationOptions as any)[nextModel] || [] : []
              if (!gens.find((g: any) => g.value === prev.generation)) {
                next.generation = undefined
              }
              return next
            })
          }}
        >
          <option value=''>Model</option>
          {modelOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.title}</option>
          ))}
        </select>
      </div>

      <div className={s.selectGroup}>
        <select
          id="generation"
          className={s.select}
          value={filters?.generation || ''}
          onChange={(e) => {
            const nextGeneration = e.target.value || undefined
            setFilters((prev) => ({ ...prev, generation: nextGeneration }))
          }}
          disabled={!filters?.model}
        >
          <option value=''>Generation</option>
          {availableGenerations.map((opt: any) => (
            <option key={opt.value} value={opt.value}>{opt.title}</option>
          ))}
        </select>
      </div>

      <div className={s.selectGroup}>
        <select
          id="category"
          className={s.select}
          value={filters?.category || ''}
          onChange={(e) => {
            const nextCategory = e.target.value || undefined
            setFilters((prev) => ({ ...prev, category: nextCategory }))
          }}
        >
          <option value=''>Category</option>
          {categoriesOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.title}</option>
          ))}
        </select>
      </div>

      <div className={s.oemInputWrapper}>
        <svg className={s.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          id="oem"
          type="text"
          value={filters?.oemNumber || ''}
          onChange={(e) => {
            const nextOemNumber = e.target.value || undefined
            setFilters((prev) => ({ ...prev, oemNumber: nextOemNumber }))
          }}
          placeholder="OEM Number / Part Name"
          className={s.oemInput}
        />
      </div>

    </ >
  )
}