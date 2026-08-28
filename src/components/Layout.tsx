import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { contact, navItems } from "../data/catalogue";
import { absoluteUrl, aliasCanonical, canonicalPages, getPage, getSiteOrigin, locale, siteName, socialImagePath } from "../seo";

/* Historical route copy retained below only as a migration reference. */
const legacyPageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Wooden Cremation Urn Manufacturer & Exporter | Big Wood Works",
    description:
      "Handcrafted wooden cremation urns for wholesale and private label. OEM and ODM manufacturing, custom engraving, export-ready packaging, and bulk production support.",
  },
  "/about": {
    title: "About Big Wood Works | Memorial Urn Manufacturer in India",
    description:
      "Learn about Big Wood Works, our manufacturing heritage, founder-led approach, and export support for funeral brands, wholesalers, importers, and private-label buyers.",
  },
  "/products": {
    title: "Wholesale Wooden Cremation Urns & Memorial Products",
    description:
      "Explore wholesale wooden cremation urn collections, memorial products, and custom-ready designs for B2B buyers and private-label programs.",
  },
  "/manufacturing": {
    title: "Wooden Urn Manufacturing, Engraving & Quality Control",
    description:
      "See Big Wood Works manufacturing capabilities including woodworking, laser engraving, resin detailing, quality inspection, and export-ready production support.",
  },
  "/export": {
    title: "Global Export Markets & Wholesale Supply | Big Wood Works",
    description:
      "Big Wood Works supports funeral brands, wholesalers, importers, and e-commerce businesses with export-ready packaging, documentation, and dispatch coordination.",
  },
  "/oem": {
    title: "OEM & Private Label Memorial Urn Manufacturing",
    description:
      "Private-label, OEM, and ODM memorial urn manufacturing with branding, packaging, engraving, and development support for B2B buyers.",
  },
  "/oem-private-label": {
    title: "OEM & Private Label Memorial Urn Manufacturing",
    description:
      "Private-label, OEM, and ODM memorial urn manufacturing with branding, packaging, engraving, and development support for B2B buyers.",
  },
  "/wholesale": {
    title: "OEM & Private Label Memorial Urn Manufacturing",
    description:
      "Private-label, OEM, and ODM memorial urn manufacturing with branding, packaging, engraving, and development support for B2B buyers.",
  },
  "/contact": {
    title: "Request a Wholesale Quote | Big Wood Works",
    description:
      "Contact Big Wood Works for catalogue requests, OEM and private-label discussions, export support, and wholesale memorial product enquiries.",
  },
  "/quote": {
    title: "Request a Wholesale Quote | Big Wood Works",
    description:
      "Contact Big Wood Works for catalogue requests, OEM and private-label discussions, export support, and wholesale memorial product enquiries.",
  },
  "/customization": {
    title: "Customisation Services | Big Wood Works",
    description:
      "Custom memorial product development including engraving, UV artwork, branding, packaging, and B2B customisation support.",
  },
  "/catalogue": {
    title: "Wholesale Wooden Cremation Urns & Memorial Products",
    description:
      "Explore wholesale wooden cremation urn collections, memorial products, and custom-ready designs for B2B buyers and private-label programs.",
  },
  "/catalog": {
    title: "Wholesale Wooden Cremation Urns & Memorial Products",
    description:
      "Explore wholesale wooden cremation urn collections, memorial products, and custom-ready designs for B2B buyers and private-label programs.",
  },
};

function ensureMeta(selector: string, createTag: () => HTMLElement) {
  let element = document.head.querySelector(selector) as HTMLElement | null;

  if (!element) {
    element = createTag();
    document.head.appendChild(element);
  }

  return element;
}

function ensureJsonLdScript(id: string) {
  let script = document.head.querySelector(`script[data-seo="${id}"]`) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", id);
    document.head.appendChild(script);
  }

  return script;
}

const crumbLabels: Record<string, string> = {
  about: "About",
  products: "Products",
  customization: "Customisation",
  manufacturing: "Manufacturing",
  export: "Export",
  contact: "Contact",
  quote: "Request Quote",
  oem: "OEM & Private Label",
  "oem-private-label": "OEM & Private Label",
  wholesale: "Wholesale",
  catalogue: "Catalogue",
  catalog: "Catalogue",
};

export function Layout() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const meta = getPage(pathname);
    const siteUrl = getSiteOrigin();
    const canonicalPath = aliasCanonical[pathname] ?? meta.path;
    const canonicalUrl = absoluteUrl(siteUrl, canonicalPath);
    const isKnownPage = canonicalPages.some((page) => page.path === canonicalPath) || pathname in aliasCanonical;

    document.title = meta.title;
    document.documentElement.lang = "en-GB";

    ensureMeta('meta[name="description"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      return tag;
    }).setAttribute("content", meta.description);

    ensureMeta('meta[name="keywords"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "keywords");
      return tag;
    }).setAttribute("content", meta.keywords);

    ensureMeta('meta[name="robots"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "robots");
      return tag;
    }).setAttribute("content", isKnownPage ? "index, follow, max-image-preview:large" : "noindex, nofollow");

    ensureMeta('link[rel="canonical"]', () => {
      const tag = document.createElement("link");
      tag.setAttribute("rel", "canonical");
      return tag;
    }).setAttribute("href", canonicalUrl);

    ensureMeta('meta[property="og:title"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:title");
      return tag;
    }).setAttribute("content", meta.title);

    ensureMeta('meta[property="og:description"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:description");
      return tag;
    }).setAttribute("content", meta.description);

    ensureMeta('meta[property="og:type"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:type");
      return tag;
    }).setAttribute("content", "website");

    ensureMeta('meta[property="og:site_name"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:site_name");
      return tag;
    }).setAttribute("content", siteName);

    ensureMeta('meta[property="og:locale"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:locale");
      return tag;
    }).setAttribute("content", locale);

    ensureMeta('meta[property="og:url"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:url");
      return tag;
    }).setAttribute("content", canonicalUrl);

    ensureMeta('meta[property="og:image"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:image");
      return tag;
    }).setAttribute("content", `${siteUrl}${socialImagePath}`);

    ensureMeta('meta[name="twitter:card"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:card");
      return tag;
    }).setAttribute("content", "summary_large_image");

    ensureMeta('meta[name="twitter:title"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:title");
      return tag;
    }).setAttribute("content", meta.title);

    ensureMeta('meta[name="twitter:description"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:description");
      return tag;
    }).setAttribute("content", meta.description);

    ensureMeta('meta[name="twitter:image"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:image");
      return tag;
    }).setAttribute("content", `${siteUrl}${socialImagePath}`);

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Big Wood Works",
      url: siteUrl,
      logo: `${siteUrl}/assets/big-wood-works-logo.png`,
      email: contact.email,
      telephone: contact.phones,
      address: {
        "@type": "PostalAddress",
        streetAddress: "F17 Shaheen Bagh",
        addressLocality: "New Delhi",
        postalCode: "110025",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: contact.email,
          telephone: contact.phones[0],
          areaServed: ["US", "GB", "CA", "AU", "EU", "IN"],
          availableLanguage: "en",
        },
      ],
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Big Wood Works",
      url: siteUrl,
      inLanguage: "en-GB",
      publisher: { "@id": `${siteUrl}/#organization` },
    };

    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: meta.title,
      description: meta.description,
      inLanguage: "en-GB",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
    };

    const breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      ...pathname
        .split("/")
        .filter(Boolean)
        .map((segment, index, segments) => ({
          "@type": "ListItem",
          position: index + 2,
          name: crumbLabels[segment] ?? segment,
          item: `${siteUrl}/${segments.slice(0, index + 1).join("/")}`,
        })),
    ];

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    };

    ensureJsonLdScript("organization").text = JSON.stringify(organizationSchema);
    ensureJsonLdScript("website").text = JSON.stringify(websiteSchema);
    ensureJsonLdScript("webpage").text = JSON.stringify(webpageSchema);
    ensureJsonLdScript("breadcrumb").text = JSON.stringify(breadcrumbSchema);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    function handlePointerDown(event: MouseEvent) {
      if (!open || !menuRef.current) {
        return;
      }

      if (!menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handlePointerDown);
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <a href="#main-content" className="focus-ring sr-only z-[100] rounded bg-background px-4 py-3 text-primary focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 bg-transparent px-3 py-3 sm:px-5 sm:py-4">
        <nav ref={menuRef} className="wood-nav mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-4 rounded-full border border-tertiary-fixed/20 px-4 shadow-[0_20px_45px_rgba(39,19,16,0.22)] sm:h-[72px] sm:px-6" aria-label="Primary navigation">
          <Link to="/" className="focus-ring flex min-w-0 items-center gap-2 rounded-lg sm:gap-3" aria-label="Big Wood Works home">
            <img
              src="/assets/big-wood-works-nav-logo.png"
              alt=""
              width="1374"
              height="1145"
              className="h-11 w-auto shrink-0 object-contain mix-blend-screen sm:h-[54px]"
            />
            <span className="truncate font-display text-xl font-bold text-tertiary-fixed sm:text-2xl">Big Wood Works</span>
          </Link>

          <div className="hidden items-center gap-5 xl:flex">
            {navItems.filter((item) => item.href !== "/").map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `focus-ring relative rounded py-2 text-sm font-semibold tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:mx-auto after:h-px after:origin-center after:bg-tertiary-fixed after:transition-transform ${
                    isActive ? "text-tertiary-fixed after:scale-x-100" : "text-on-primary-container hover:text-on-primary after:scale-x-0"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <a className="focus-ring rounded-full bg-tertiary-fixed px-6 py-3 text-sm font-bold text-on-tertiary-fixed transition-colors hover:bg-tertiary-fixed-dim" href="/contact">
              Catalogue
            </a>
            <Link className="focus-ring rounded-full border border-tertiary-fixed/70 px-6 py-3 text-sm font-bold text-on-primary transition-colors hover:bg-background hover:text-primary" to="/contact">
              Request Quote
            </Link>
          </div>

          <button
            type="button"
            className="focus-ring grid size-11 shrink-0 place-items-center rounded-full border border-tertiary-fixed/50 text-tertiary-fixed transition-colors hover:bg-tertiary-fixed hover:text-on-tertiary-fixed xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </nav>

        <div id="mobile-menu" className={open ? "wood-nav mx-auto mt-3 grid w-full max-w-[1240px] gap-2 rounded-[24px] border border-tertiary-fixed/20 p-4 shadow-[0_20px_45px_rgba(39,19,16,0.22)] xl:hidden" : "hidden"}>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `focus-ring rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                    isActive ? "bg-tertiary-fixed text-on-tertiary-fixed" : "text-on-primary-container hover:bg-background/10 hover:text-on-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a className="focus-ring rounded-xl bg-tertiary-fixed px-4 py-3 text-center text-base font-bold text-on-tertiary-fixed" href="/contact">
              Download Catalogue
            </a>
            <Link className="focus-ring rounded-xl border border-tertiary-fixed/60 px-4 py-3 text-center text-base font-bold text-on-primary" to="/contact">
              Request Wholesale Quote
            </Link>
          </div>
        </div>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="bg-primary-container text-on-primary">
        <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <img src="/assets/footer-logo.png" alt="Big Wood Works" width="2000" height="2096" loading="lazy" className="h-auto w-full max-w-[260px] object-contain" />
            <p className="mt-5 max-w-md leading-7 text-on-primary/75">
              Premium cremation urns and memorial products manufactured with respect, consistency, and export-ready quality.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-on-primary/55">Navigation</h2>
            <div className="mt-5 grid gap-3">
              {navItems.slice(1).map((item) => (
                <Link key={item.href} className="focus-ring rounded text-on-primary/75 hover:text-on-primary" to={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <address className="not-italic">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-on-primary/55">Contact</h2>
            <p className="mt-5 leading-7 text-on-primary/75">
              {contact.phones.join(" | ")}
              <br />
              {contact.email}
              <br />
              {contact.address}
            </p>
          </address>
        </div>
      </footer>
    </div>
  );
}
