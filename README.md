# Big Wood Works React Implementation

This project is a React + TypeScript + Vite + Tailwind CSS website prepared from the exported Big Wood Works Figma context files.

## Figma Screens

The provided exports identify these eight screens:

| Figma node | Route | Page |
| --- | --- | --- |
| exported image/html pair | `/` | Home |
| exported image/html pair | `/about` | About Us |
| exported image/html pair | `/products` | Products |
| exported image/html pair | `/oem-private-label` | OEM & Private Label |
| exported image/html pair | `/manufacturing` | Manufacturing |
| exported image/html pair | `/export` | Global Export |
| exported image/html pair | `/quality` | Quality Assurance |
| exported image/html pair | `/customization` | Customization |

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

- Figma frames: eight exported screenshots/HTML files were mapped to React routes.
- Routes: all eight exported routes plus contact/quote and 404 are implemented in React Router.
- Assets: exported JPEG frame images are stored in `src/assets/screens`.
- Responsive layout: components use fluid containers, CSS Grid, Flexbox, and mobile navigation.
- Mobile navigation: implemented with accessible expanded state and route-close behavior.
- Console errors: should be checked after dependencies are installed and the dev server is running.
- Placeholder content: no Lorem Ipsum or TODOs are present. Main exported copy has been ported into typed data.

## Figma Access Note

The Figma MCP tools returned:

```text
You've reached the Figma MCP tool call limit on the Starter plan.
```

Because of that, this implementation cannot be claimed as pixel-perfect against the inaccessible Figma layer data. Once access is restored, compare each route against the exact frame screenshot and update spacing, typography, imagery, and copy accordingly.
