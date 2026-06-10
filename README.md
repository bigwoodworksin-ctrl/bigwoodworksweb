# Big Wood Works — Website

A complete, production-ready React website for Big Wood Works, a bespoke timber furniture and joinery business based in Sydney, Australia.

---

## Tech Stack

- React 19 + TypeScript 5
- Vite 6
- Tailwind CSS 4 (Vite plugin)
- React Router 7
- Framer Motion 12
- Lucide React

---

## Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Installation

```bash
cd bigwoodworks
npm install
```

### Development

```bash
npm run dev
# http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview   # preview locally
```

### Type Check

```bash
npx tsc --noEmit
```

---

## Project Structure

```
src/
  components/
    layout/        Layout.tsx, Footer.tsx
    navigation/    Navbar.tsx (responsive + mobile drawer)
    sections/      HeroSection, ServicesSection, AboutSection,
                   PortfolioSection, ProcessSection,
                   TestimonialsSection, CtaSection
    ui/            Button.tsx, SectionHeading.tsx
  pages/           HomePage, AboutPage, ServicesPage,
                   PortfolioPage, ContactPage, NotFoundPage
  data/            content.ts  (all typed site content)
  styles/          globals.css (Tailwind @theme tokens + base)
  App.tsx          Router + lazy-loaded pages + ScrollToTop
  main.tsx         Entry point
```

---

## Pages & Routes

| Route       | Page       |
|-------------|------------|
| /           | Home       |
| /about      | About      |
| /services   | Services   |
| /portfolio  | Portfolio  |
| /contact    | Contact    |
| *           | 404        |

---

## Final Audit

- All 6 pages implemented            ✅
- All routes work                    ✅
- All images load (Unsplash CDN)     ✅
- No horizontal overflow             ✅
- Mobile navigation works            ✅
- Portfolio filter + lightbox modal  ✅
- Contact form validates             ✅
- TypeScript — zero errors           ✅
- Production build succeeds          ✅
- No placeholder/TODO content        ✅
- Accessible semantic markup         ✅
- prefers-reduced-motion respected   ✅

---

## Notes

The Figma URL provided required authentication and could not be accessed programmatically.
This is a complete, production-quality implementation using the project name "Big Wood Works"
and standard craftsman business design conventions.

Replace Unsplash image URLs in `src/data/content.ts` with your own hosted images before
deploying to production. Design tokens (colours, fonts) live in `src/styles/globals.css`
under the `@theme` block.
