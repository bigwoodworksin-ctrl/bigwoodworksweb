# Big Wood Works Catalogue Website

Pure React + TypeScript + Vite implementation for Big Wood Works, refined from the attached product catalogue.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/products` | Product collections |
| `/customization` | Customization services |
| `/manufacturing` | Manufacturing and quality |
| `/export` | Global export |
| `/oem` | OEM / ODM |
| `/contact` | Contact |

Aliases are included for `/quote`, `/catalogue`, `/catalog`, `/wholesale`, and `/oem-private-label`.

## Catalogue Content Used

- Premium cremation urns and memorial products
- 30+ years manufacturing excellence
- 50,000+ cremation urns manufactured since 2023
- 8,000+ monthly manufacturing capacity
- OEM / ODM and private-label manufacturing
- Custom engraving, UV printing, resin inlay, packaging, and export-ready logistics
- Product collections including Lichtenberg Resin, UV Printed, Classical Design, Heritage Memorial, Pet Tribute, and Best Seller

## Assets

- Logo: `public/assets/big-wood-works-logo.png`
- Downloadable catalogue: `public/assets/catalogue.pdf`
- Selected catalogue product visuals: `public/assets/catalogue-images/`
- Export logistics visual: `public/assets/export-logistics.png`

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

## Audit

- Removed the previous embedded static-page implementation.
- Removed unused export files and temporary work files.
- Removed unused extracted catalogue images.
- Navigation is native React Router with desktop and mobile states.
- Catalogue download is local.
- No placeholder filler content remains.
