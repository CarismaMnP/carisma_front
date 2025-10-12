# About Page - Pixel-Perfect Implementation

## Обзор
Страница About была полностью переверстана согласно макету из Figma (node-id=810-258) с использованием строгого подхода к конвертации px → rem и соблюдением принципов адаптивной верстки.

## Структура проекта

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx                          # Главная страница About
│   └── globals.css                           # Импорт дизайн-токенов
├── blocks/
│   ├── AboutHero/                            # Секция с заголовком и описанием
│   │   ├── index.tsx
│   │   └── AboutHero.module.css
│   ├── AboutImage/                           # Изображение BMW
│   │   ├── index.tsx
│   │   └── AboutImage.module.css
│   ├── AboutContent/                         # Текстовые блоки с изображениями
│   │   ├── index.tsx
│   │   └── AboutContent.module.css
│   ├── CompetitiveAdvantages/                # Сетка преимуществ (2x4)
│   │   ├── index.tsx
│   │   └── CompetitiveAdvantages.module.css
│   └── CallToAction/                         # Кнопка звонка
│       ├── index.tsx
│       └── CallToAction.module.css
└── shared/
    └── styles/
        └── about-tokens.css                  # Дизайн-токены и таблица конвертации
```

## Дизайн-токены

### Базовая настройка
- **Base rem**: `1rem = 10px`
- **HTML font-size**: Адаптивный, уже настроен в `globals.css`

### Таблица конвертации px → rem
| px    | rem     |
|-------|---------|
| 1px   | 0.1rem  |
| 4px   | 0.4rem  |
| 8px   | 0.8rem  |
| 12px  | 1.2rem  |
| 16px  | 1.6rem  |
| 22px  | 2.2rem  |
| 26px  | 2.6rem  |
| 32px  | 3.2rem  |
| 36px  | 3.6rem  |
| 46px  | 4.6rem  |
| 56px  | 5.6rem  |
| 64px  | 6.4rem  |
| 86px  | 8.6rem  |
| 400px | 40rem   |
| 641px | 64.1rem |
| 1440px| 144rem  |

### CSS Custom Properties
Все токены определены в `about-tokens.css`:

```css
--about-color-bg-primary: #f3f3f3
--about-color-bg-white: #ffffff
--about-color-bg-black: #000000
--about-color-text-primary: #000000
--about-font-size-lg: 2.2rem
--about-font-size-3xl: 6.4rem
--about-space-2xl: 3.2rem
--about-space-4xl: 5.6rem
```

## Адаптивность

### Брейкпоинты (в rem)
1. **Desktop**: ≥ 102.4rem (≥ 1024px)
2. **Tablet**: 48rem – 102.4rem (480px – 1024px)
3. **Mobile**: ≤ 48rem (≤ 480px)

### Стратегия адаптивности
- Базовый стиль: Desktop
- `@media (max-width: 102.4rem)`: Tablet
- `@media (max-width: 48rem)`: Mobile

### Примеры адаптации

#### Типографика
- Desktop: `6.4rem` → Tablet: `4.8rem` → Mobile: `3.2rem`
- Desktop: `2.2rem` → Tablet: `1.8rem` → Mobile: `1.6rem`

#### Отступы
- Desktop: `5.6rem` → Tablet: `3.2rem` → Mobile: `1.6rem`
- Desktop: `4.6rem` → Tablet: `3.2rem` → Mobile: `2.4rem`

#### Сетки
- Desktop: `grid-template-columns: 1fr 1fr`
- Mobile: `grid-template-columns: 1fr`

## Компоненты

### 1. AboutHero
**Назначение**: Заголовок страницы и вступительный текст

**Ключевые особенности**:
- Grid layout: 2 колонки на Desktop, 1 на Mobile
- Заголовок: 6.4rem (Desktop) → 3.2rem (Mobile)
- Описание: 2.2rem с line-height: 1.2

**Файлы**:
- `/src/blocks/AboutHero/index.tsx`
- `/src/blocks/AboutHero/AboutHero.module.css`

### 2. AboutImage
**Назначение**: Отображение изображения BMW

**Ключевые особенности**:
- Трансформация: `scaleY(-1) rotate(180deg)` (как в макете)
- Высота: 40rem (Desktop) → 24rem (Mobile)
- Изображение с localhost:3845 (временный MCP сервер)

**Файлы**:
- `/src/blocks/AboutImage/index.tsx`
- `/src/blocks/AboutImage/AboutImage.module.css`

### 3. AboutContent
**Назначение**: Текстовые блоки с изображениями-placeholder'ами

**Ключевые особенности**:
- Чередующиеся layouts: текст-изображение / изображение-текст
- Grid: 2 колонки (Desktop) → 1 колонка (Mobile)
- Placeholder изображения: `#d9d9d9`
- Высота изображений: 42.7rem

**Файлы**:
- `/src/blocks/AboutContent/index.tsx`
- `/src/blocks/AboutContent/AboutContent.module.css`

### 4. CompetitiveAdvantages
**Назначение**: Сетка конкурентных преимуществ (8 ячеек, 2x4)

**Ключевые особенности**:
- Grid layout: 2 колонки с бордерами
- Borders: `0.1rem solid rgba(0, 0, 0, 0.6)`
- Padding ячеек: 4.6rem вертикально
- Последняя строка: без нижнего бордера
- Mobile: 1 колонка

**Файлы**:
- `/src/blocks/CompetitiveAdvantages/index.tsx`
- `/src/blocks/CompetitiveAdvantages/CompetitiveAdvantages.module.css`

### 5. CallToAction
**Назначение**: Кнопка для звонка

**Ключевые особенности**:
- Черный фон, белый текст
- Padding: `3.2rem 8.6rem` (Desktop)
- Hover эффект: `opacity: 0.85`
- Ссылка: `tel:+17869194071`

**Файлы**:
- `/src/blocks/CallToAction/index.tsx`
- `/src/blocks/CallToAction/CallToAction.module.css`

## Pixel Perfect Checklist

- [x] Все значения px конвертированы в rem (деление на 10)
- [x] Borders и тени используют rem
- [x] Line-height: unitless (1, 1.2) где возможно
- [x] Адаптивные брейкпоинты в rem
- [x] Сетка соблюдает отступы из Figma
- [x] Типографика: clamp() не используется (строгие значения из макета)
- [x] CSS модули для изоляции стилей
- [x] Дизайн-токены вынесены в отдельный файл
- [x] Трансформации изображений соблюдены
- [x] Hover состояния реализованы

## Соответствие макету Figma

### Визуальные отличия
1. **Изображения**: Используются временные ссылки с MCP сервера (localhost:3845). В продакшене нужно заменить на реальные изображения.
2. **Placeholder изображения**: Текущие серые блоки (#d9d9d9) должны быть заменены на реальные изображения из Figma.

### Точное соответствие
- Размеры элементов
- Отступы и gap
- Типографика (размеры, line-height, font-family)
- Цвета
- Borders и разделители
- Grid layouts
- Адаптивные трансформации

## Интеграция

### Импорт в главную страницу About
```tsx
import { AboutHero } from '@/blocks/AboutHero';
import { AboutImage } from '@/blocks/AboutImage';
import { AboutContent } from '@/blocks/AboutContent';
import { CompetitiveAdvantages } from '@/blocks/CompetitiveAdvantages';
import { CallToAction } from '@/blocks/CallToAction';
```

### Структура страницы
```tsx
<Hero />              {/* Существующий navbar + hero */}
<AboutHero />         {/* ABOUT US + описание */}
<AboutImage />        {/* Изображение BMW */}
<AboutContent />      {/* Текст + изображение */}
<CompetitiveAdvantages /> {/* Сетка преимуществ */}
<AboutContent />      {/* Повторный текст + изображение */}
<CallToAction />      {/* Кнопка звонка */}
<Footer />            {/* Существующий footer */}
```

## Дальнейшие шаги

1. **Заменить изображения**: 
   - Скачать реальные изображения из Figma
   - Поместить в `/public/about/`
   - Обновить src в компонентах

2. **Добавить анимации** (опционально):
   - Reveal эффекты при скролле
   - Hover transitions

3. **Оптимизация**:
   - Использовать Next.js Image component
   - Добавить lazy loading
   - Оптимизировать изображения (WebP, srcset)

## Технологический стек
- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Averta CY (основной), Suisse Intl (вспомогательный)
- **Design Source**: Figma (node-id: 810-258)

