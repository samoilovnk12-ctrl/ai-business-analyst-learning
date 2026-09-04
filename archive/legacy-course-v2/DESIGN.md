# «Первый день в AI-отделе» Design System

## Visual Theme & Atmosphere

- Mood: `professional_minimal`
- Feel: понятно, красиво, оптимально; спокойно, уверенно и без декоративного шума
- Product metaphor: рабочее приложение внутреннего AI-отдела, а не учебник и не игра
- Reference: простота и ясная иерархия интерфейсов ChatGPT и Codex без их прямого копирования

## Color Palette & Roles

- Background: `#FFFFFF`
- Surface: `#F8FAFC`
- Text primary: `#0F172A`
- Text secondary: `#64748B`
- Accent: `#3B82F6`
- Accent hover: `#2563EB`

## Typography Rules

- Display: Inter, 600, `clamp(2rem, 5vw, 3.5rem)`
- Body: Inter, 400, `1rem/1.6`
- Mono: JetBrains Mono, 400, `0.875rem`
- Заголовки интерфейса компактные; большие редакционные заголовки не используются внутри рабочего пространства.

## Component Stylings

- Buttons: `rounded-md`, accent background, contrast text; вторичные — светлая поверхность и тонкая граница
- Cards: surface background, subtle border, 12px radius
- Inputs: white background, subtle border, visible blue focus outline
- Navigation: постоянная светлая или тёмно-текстовая боковая панель без декоративных иллюстраций
- Work events: отдельные представления почты, чата, таблицы, документа, встречи и задачи
- Game state: компактные профессиональные индикаторы без ярких очков, медалей и праздничных эффектов

## Layout Principles

- Max width: 1200px для учебного содержания; рабочая оболочка может занимать всю ширину экрана
- Grid: `two_column` как базовая модель; на широком экране допускается узкая третья панель наставника
- Section spacing: `72px`
- Content padding: `24px/40px`
- Desktop first: основная рабочая среда рассчитана на компьютер
- Один экран — одна активная рабочая сцена; длинная неделя разделяется на самостоятельные этапы

## Depth & Elevation

- Shadows: none
- Borders: 1px solid с низкой контрастностью относительно основного текста
- Иерархия создаётся пространством, типографикой и фоном, а не тенями и объёмными карточками

## Do's and Don'ts

- DO использовать только объявленные цветовые роли.
- DO сохранять постоянную навигацию и понятное местоположение ученика.
- DO показывать, какое действие требуется сейчас и что изменится после него.
- DO визуально различать материалы компании, объяснение преподавателя и сообщения ДАНИИ́Ла.
- DO обеспечивать WCAG AA для текста и интерактивных элементов.
- DON'T использовать цвета вне палитры.
- DON'T добавлять декоративные тени.
- DON'T использовать больше двух основных гарнитур; моноширинная гарнитура разрешена для данных.
- DON'T использовать градиенты, карусели и стоковые фотографии.
- DON'T превращать профессиональную симуляцию в детскую игру.

## Responsive Behavior

- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Mobile: одна колонка; навигация сворачивается; ДАНИИЛ открывается отдельной панелью
- Tablet: основная сцена и сворачиваемая навигация
- Desktop: навигация, рабочая сцена и компактная панель наставника
- Tables: горизонтальная прокрутка внутри области данных, а не всей страницы
- Interactive controls: минимальная область нажатия 44px

## Agent Prompt Guide

- Do NOT invent colors outside this palette.
- Do NOT add box-shadows.
- Accent color appears maximum 3 times per viewport.
- All interactive elements need `:focus-visible` outline.
- Do NOT use gradients.
- Do NOT use carousel.
- Do NOT use stock photos.
- Prefer a realistic workplace surface over a generic lesson card.
- Keep explanations in simple Russian; introduce professional terms only after meaning and example.

## Dimensions resolved from defaults

- accent: `electric_blue` — выбран по правилу светлой палитры и сходству с простым продуктовым интерфейсом;
- typography: `inter` — стандарт для высокой экранной читаемости;
- display: `same_as_body` — выбран для спокойного интерфейса, близкого по ощущению к ChatGPT/Codex;
- layout: `two_column` — выбран из требования рабочего пространства; на широком экране добавляется вспомогательная панель;
- mood: `professional_minimal` — следует словам «понятно, красиво, оптимально»;
- density: `balanced` — ученик не задал плотность, поэтому применён нейтральный рабочий ритм;
- exclude: `gradients`, `carousel`, `stock_photos` — убирают элементы, не поддерживающие рабочую симуляцию.
