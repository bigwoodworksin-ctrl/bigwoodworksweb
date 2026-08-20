import { cp, mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const pages = [
  ["/", "Wooden Cremation Urn Manufacturer & Exporter | Big Wood Works", "Big Wood Works manufactures handcrafted wooden cremation urns for funeral brands, wholesalers, importers and private-label buyers, with customisation and export support.", "wooden cremation urn manufacturer, wholesale memorial urns, private label urns", "weekly", "1.0"],
  ["/about", "About Big Wood Works | Memorial Urn Manufacturer in India", "Learn about Big Wood Works, its New Delhi team, manufacturing experience and B2B support for funeral brands, wholesalers, importers and private-label buyers.", "Big Wood Works, memorial urn manufacturer India, wooden urn company", "yearly", "0.7"],
  ["/products", "Wholesale Wooden Cremation Urns & Memorial Products", "Explore wooden cremation urn collections for wholesale and private-label buyers, including engraved, UV-printed, resin, pet and keepsake memorial designs.", "wholesale wooden cremation urns, memorial products, pet urns, keepsake urns", "weekly", "0.9"],
  ["/customization", "Custom Memorial Urns, Engraving & Branding | Big Wood Works", "Explore custom memorial urn development, engraving, UV artwork, resin detailing, finishes, branding and packaging for B2B collections.", "custom memorial urns, urn engraving, private label packaging, UV printed urns", "monthly", "0.8"],
  ["/manufacturing", "Wooden Urn Manufacturing & Quality Control | Big Wood Works", "See Big Wood Works' woodworking, seasoning, engraving, resin detailing, inspection and export-ready packing process for wholesale memorial products.", "wooden urn manufacturing, laser engraving, memorial product quality control", "monthly", "0.8"],
  ["/oem", "OEM & Private Label Memorial Urn Manufacturing", "OEM and private-label memorial urn manufacturing with design development, engraving, branding, packaging and export support for B2B buyers.", "OEM urn manufacturer, private label memorial urns, ODM wooden urns", "monthly", "0.9"],
  ["/export", "Memorial Urn Export & Wholesale Supply | Big Wood Works", "Export-ready memorial urn supply with packaging, documentation, inspection and international dispatch coordination for wholesale buyers.", "memorial urn exporter, wholesale urn supplier, export-ready wooden urns", "monthly", "0.8"],
  ["/contact", "Request a Wholesale Memorial Urn Quote | Big Wood Works", "Contact Big Wood Works in New Delhi for wholesale quotes, catalogues, OEM manufacturing, custom memorial products and export enquiries.", "wholesale urn quote, contact Big Wood Works, OEM memorial products", "yearly", "0.7"],
];

function originFromEnvironment() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (!raw) return "http://localhost:4173";
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return new URL(candidate).origin;
}

const origin = originFromEnvironment();
const productionConfigured = !origin.startsWith("http://localhost");
const dist = path.resolve(process.env.SEO_OUTPUT_DIR || "dist");
const template = await readFile(path.join(dist, "index.html"), "utf8");
const esc = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const absolute = (route) => route === "/" ? `${origin}/` : `${origin}${route}`;
const image = `${origin}/assets/home-hero-urns.png`;

for (const [route, title, description, keywords] of pages) {
  const canonical = absolute(route);
  const graph = [
    { "@type": "Organization", "@id": `${origin}/#organization`, name: "Big Wood Works", url: `${origin}/`, logo: { "@type": "ImageObject", url: `${origin}/assets/big-wood-works-logo.png` }, email: "info@bigwoodworks.com", telephone: ["+91-7017719423", "+91-8860786880"], address: { "@type": "PostalAddress", streetAddress: "F17 Shaheen Bagh", addressLocality: "New Delhi", postalCode: "110025", addressCountry: "IN" } },
    { "@type": "WebSite", "@id": `${origin}/#website`, url: `${origin}/`, name: "Big Wood Works", inLanguage: "en-GB", publisher: { "@id": `${origin}/#organization` } },
    { "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: title, description, inLanguage: "en-GB", isPartOf: { "@id": `${origin}/#website` }, about: { "@id": `${origin}/#organization` } },
    { "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumb`, itemListElement: route === "/" ? [{ "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` }] : [{ "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` }, { "@type": "ListItem", position: 2, name: title.split(" | ")[0], item: canonical }] },
  ];
  const serviceNames = { "/customization": "Custom memorial product development", "/manufacturing": "Wooden memorial urn manufacturing", "/oem": "OEM and private-label memorial urn manufacturing", "/export": "International wholesale and export support" };
  if (serviceNames[route]) graph.push({ "@type": "Service", "@id": `${canonical}#service`, name: serviceNames[route], url: canonical, provider: { "@id": `${origin}/#organization` }, areaServed: "Worldwide" });
  if (route === "/products") {
    const productCollections = ["Lichtenberg Resin Urns", "Nature Tribute Collection", "Premium UV Printed Urns", "Botanical Tribute Collection", "Tree of Life Collection", "Resin Art Collection", "Engraved Legacy Collection", "Classical Design Urns", "Heritage Memorial Collection", "Pet Tribute Collection", "Best Seller Collection"];
    graph.push({ "@type": "ItemList", "@id": `${canonical}#collections`, name: "Wooden memorial urn collections", url: canonical, numberOfItems: productCollections.length, itemListElement: productCollections.map((name, index) => ({ "@type": "ListItem", position: index + 1, name })) });
  }
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }).replaceAll("<", "\\u003c");
  const tags = `\n    <meta name="description" content="${esc(description)}" />\n    <meta name="keywords" content="${esc(keywords)}" />\n    <meta name="robots" content="${productionConfigured ? "index, follow, max-image-preview:large" : "noindex, nofollow"}" />\n    <link rel="canonical" href="${canonical}" />\n    <meta property="og:type" content="website" />\n    <meta property="og:site_name" content="Big Wood Works" />\n    <meta property="og:locale" content="en_GB" />\n    <meta property="og:title" content="${esc(title)}" />\n    <meta property="og:description" content="${esc(description)}" />\n    <meta property="og:url" content="${canonical}" />\n    <meta property="og:image" content="${image}" />\n    <meta property="og:image:width" content="1536" />\n    <meta property="og:image:height" content="1024" />\n    <meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:title" content="${esc(title)}" />\n    <meta name="twitter:description" content="${esc(description)}" />\n    <meta name="twitter:image" content="${image}" />\n    <script type="application/ld+json">${jsonLd}</script>`;
  const correctedTags = tags.replace('content="1536"', 'content="1672"').replace('content="1024"', 'content="941"');
  const html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`).replace("<!-- SEO_HEAD -->", correctedTags);
  const output = route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html");
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, html);
}

const routeFiles = { "/": "HomePage.tsx", "/about": "AboutPage.tsx", "/products": "ProductsPage.tsx", "/customization": "CustomizationPage.tsx", "/manufacturing": "ManufacturingPage.tsx", "/oem": "OemPage.tsx", "/export": "ExportPage.tsx", "/contact": "ContactPage.tsx" };
const sitemapEntries = await Promise.all(pages.map(async ([route,,, , changefreq, priority]) => {
  const modified = await stat(path.join("src", "pages", routeFiles[route]));
  return `  <url><loc>${absolute(route)}</loc><lastmod>${modified.mtime.toISOString().slice(0, 10)}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join("\n")}\n</urlset>\n`;
const robots = productionConfigured ? `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin/\nDisallow: /login\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: Bingbot\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n` : "User-agent: *\nDisallow: /\n";
const llms = `# Big Wood Works\n\n> Big Wood Works is a New Delhi manufacturer of handcrafted wooden cremation urns and memorial products for funeral brands, wholesalers, importers, distributors and private-label buyers. The company provides OEM/ODM development, engraving, UV printing, resin detailing, export-ready packaging and dispatch coordination.\n\n## Authoritative pages\n${pages.map(([route, title, description]) => `- [${title}](${absolute(route)}): ${description}`).join("\n")}\n\n## Contact\n- Email: info@bigwoodworks.com\n- Telephone: +91-7017719423; +91-8860786880\n- Address: F17 Shaheen Bagh, New Delhi 110025, India\n`;
await Promise.all([writeFile(path.join(dist, "sitemap.xml"), sitemap), writeFile(path.join(dist, "robots.txt"), robots), writeFile(path.join(dist, "llms.txt"), llms), cp(path.join(dist, "site.webmanifest"), path.join(dist, "manifest.webmanifest"))]);
console.log(`SEO artifacts generated for ${origin}${productionConfigured ? "" : " (preview noindex; configure NEXT_PUBLIC_SITE_URL for production)"}`);
