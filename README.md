# Big Woodworks React Implementation

This project is a React + TypeScript + Vite + Tailwind CSS website prepared for the Big Woodworks Figma prototype.

## Figma Screens

The provided prototype links identify these eight screens:

| Figma node | Route | Page |
| --- | --- | --- |
| `8:3` | `/` | Home |
| `8:328` | `/custom-furniture` | Custom Furniture |
| `8:885` | `/cabinetry` | Cabinetry |
| `8:1235` | `/portfolio` | Portfolio |
| `8:1486` | `/process` | Process |
| `8:1691` | `/about` | About |
| `8:1937` | `/contact` | Contact |
| `8:2126` | `/quote` | Quote |

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

- Figma frames: eight prototype nodes were mapped to routes, but structured Figma inspection was blocked by the Figma MCP Starter plan tool-call limit.
- Routes: all eight routes are implemented in React Router.
- Assets: production image URLs load from remote image sources; exact Figma-exported assets could not be extracted while MCP was rate-limited.
- Responsive layout: components use fluid containers, CSS Grid, Flexbox, and mobile navigation.
- Mobile navigation: implemented with accessible expanded state and route-close behavior.
- Console errors: should be checked after dependencies are installed and the dev server is running.
- Placeholder content: no Lorem Ipsum or TODOs are present. Copy should be replaced with exact Figma text once Figma MCP access or frame exports are available.

## Figma Access Note

The Figma MCP tools returned:

```text
You've reached the Figma MCP tool call limit on the Starter plan.
```

Because of that, this implementation cannot be claimed as pixel-perfect against the inaccessible Figma layer data. Once access is restored, compare each route against the exact frame screenshot and update spacing, typography, imagery, and copy accordingly.
