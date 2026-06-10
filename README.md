# Big Wood Works React Implementation

This project is a React + TypeScript + Vite website prepared from the Stitch Big Wood Works B2B Portal export.

## Figma Screens

The Stitch zip provides these eight source pages:

| Figma node | Route | Page |
| --- | --- | --- |
| Stitch folder | Route | Page |
| --- | --- | --- |
| `big_wood_works_home_official` | `/` | Home |
| `big_wood_works_about_us` | `/about` | About Us |
| `big_wood_works_products_catalog` | `/products` | Products |
| `big_wood_works_oem_private_label` | `/oem-private-label` | OEM & Private Label |
| `big_wood_works_manufacturing_facility` | `/manufacturing` | Manufacturing |
| `big_wood_works_global_export_reach` | `/export` | Global Export |
| `big_wood_works_quality_assurance` | `/quality` | Quality Assurance |
| `big_wood_works_customization_services` | `/customization` | Customization |

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Architecture

```text
src/
  components/
    layout/
    navigation/
    sections/
    ui/
  data/
  pages/
  styles/
  App.tsx
  main.tsx
```

## Audit

- Design source: eight Stitch `code.html` pages and `screen.png` references are stored in `public/stitch`.
- Routes: all eight Stitch routes plus contact, quote, catalogue/catalog, wholesale aliases, and 404 are implemented in React Router.
- Navigation: React provides working desktop tabs and an accessible mobile menu; embedded Stitch `href="#"` links are upgraded to real routes when possible.
- Assets: the Stitch export is served directly so its generated imagery, fonts, Tailwind CDN styling, and page-specific layout are preserved.
- Responsive layout: inherited from the Stitch-generated HTML pages.
- Mobile navigation: inherited from the Stitch-generated HTML pages where present.
- Console errors: should be checked after dependencies are installed and the dev server is running.
- Placeholder content: no Lorem Ipsum or TODOs are present in the app shell.

## Figma Access Note

The Figma MCP tools returned:

```text
You've reached the Figma MCP tool call limit on the Starter plan.
```

Because of that, this implementation cannot be claimed as pixel-perfect against the inaccessible Figma layer data. Once access is restored, compare each route against the exact frame screenshot and update spacing, typography, imagery, and copy accordingly.
