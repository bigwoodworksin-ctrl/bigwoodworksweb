export type SeoPage = {
  path: string;
  title: string;
  description: string;
  keywords: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: number;
  service?: string;
};

export const canonicalPages: SeoPage[] = [
  { path: "/", title: "Wooden Cremation Urn Manufacturer & Exporter | Big Wood Works", description: "Big Wood Works manufactures handcrafted wooden cremation urns for funeral brands, wholesalers, importers and private-label buyers, with customisation and export support.", keywords: "wooden cremation urn manufacturer, wholesale memorial urns, private label urns", changefreq: "weekly", priority: 1 },
  { path: "/about", title: "About Big Wood Works | Memorial Urn Manufacturer in India", description: "Learn about Big Wood Works, its New Delhi team, manufacturing experience and B2B support for funeral brands, wholesalers, importers and private-label buyers.", keywords: "Big Wood Works, memorial urn manufacturer India, wooden urn company", changefreq: "yearly", priority: 0.7 },
  { path: "/products", title: "Wholesale Wooden Cremation Urns & Memorial Products", description: "Explore wooden cremation urn collections for wholesale and private-label buyers, including engraved, UV-printed, resin, pet and keepsake memorial designs.", keywords: "wholesale wooden cremation urns, memorial products, pet urns, keepsake urns", changefreq: "weekly", priority: 0.9 },
  { path: "/customization", title: "Custom Memorial Urns, Engraving & Branding | Big Wood Works", description: "Explore custom memorial urn development, engraving, UV artwork, resin detailing, finishes, branding and packaging for B2B collections.", keywords: "custom memorial urns, urn engraving, private label packaging, UV printed urns", changefreq: "monthly", priority: 0.8, service: "Custom memorial product development" },
  { path: "/manufacturing", title: "Wooden Urn Manufacturing & Quality Control | Big Wood Works", description: "See Big Wood Works' woodworking, seasoning, engraving, resin detailing, inspection and export-ready packing process for wholesale memorial products.", keywords: "wooden urn manufacturing, laser engraving, memorial product quality control", changefreq: "monthly", priority: 0.8, service: "Wooden memorial urn manufacturing" },
  { path: "/oem", title: "OEM & Private Label Memorial Urn Manufacturing", description: "OEM and private-label memorial urn manufacturing with design development, engraving, branding, packaging and export support for B2B buyers.", keywords: "OEM urn manufacturer, private label memorial urns, ODM wooden urns", changefreq: "monthly", priority: 0.9, service: "OEM and private-label memorial urn manufacturing" },
  { path: "/export", title: "Memorial Urn Export & Wholesale Supply | Big Wood Works", description: "Export-ready memorial urn supply with packaging, documentation, inspection and international dispatch coordination for wholesale buyers.", keywords: "memorial urn exporter, wholesale urn supplier, export-ready wooden urns", changefreq: "monthly", priority: 0.8, service: "International wholesale and export support" },
  { path: "/contact", title: "Request a Wholesale Memorial Urn Quote | Big Wood Works", description: "Contact Big Wood Works in New Delhi for wholesale quotes, catalogues, OEM manufacturing, custom memorial products and export enquiries.", keywords: "wholesale urn quote, contact Big Wood Works, OEM memorial products", changefreq: "yearly", priority: 0.7 },
];

export const aliasCanonical: Record<string, string> = {
  "/quote": "/contact",
  "/catalogue": "/products",
  "/catalog": "/products",
  "/wholesale": "/oem",
  "/oem-private-label": "/oem",
};

export const siteName = "Big Wood Works";
export const locale = "en_GB";
export const socialImagePath = "/assets/home-hero-urns.png";

export function normalizeOrigin(value?: string) {
  if (!value) return "";
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try { return new URL(withProtocol).origin; } catch { return ""; }
}

export function getSiteOrigin() {
  const configured = normalizeOrigin(import.meta.env.NEXT_PUBLIC_SITE_URL)
    || normalizeOrigin(import.meta.env.VERCEL_PROJECT_PRODUCTION_URL)
    || normalizeOrigin(import.meta.env.VERCEL_URL);
  if (configured) return configured;
  return typeof window === "undefined" ? "" : window.location.origin;
}

export function getPage(pathname: string) {
  const canonicalPath = aliasCanonical[pathname] ?? pathname;
  return canonicalPages.find((page) => page.path === canonicalPath) ?? canonicalPages[0];
}

export function absoluteUrl(origin: string, path: string) {
  return path === "/" ? `${origin}/` : `${origin}${path}`;
}
