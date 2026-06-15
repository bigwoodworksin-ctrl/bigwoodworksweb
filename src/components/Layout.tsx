import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { contact, navItems } from "../data/catalogue";

const siteUrl = "https://www.bigwoodworks.com";

const pageMeta: Record<string, { title: string; description: string }> = {
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

export function Layout() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const meta = pageMeta[pathname] ?? pageMeta["/"];
    const canonicalUrl = pathname === "/" ? siteUrl : `${siteUrl}${pathname}`;

    document.title = meta.title;
    document.documentElement.lang = "en-GB";

    ensureMeta('meta[name="description"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      return tag;
    }).setAttribute("content", meta.description);

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

    ensureMeta('meta[property="og:url"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:url");
      return tag;
    }).setAttribute("content", canonicalUrl);

    ensureMeta('meta[property="og:image"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:image");
      return tag;
    }).setAttribute("content", `${siteUrl}/assets/home-hero-urns.png`);

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
    }).setAttribute("content", `${siteUrl}/assets/home-hero-urns.png`);
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
      <header className="sticky top-0 z-50 border-b border-outline-variant bg-background/95 backdrop-blur-xl">
        <nav ref={menuRef} className="container-shell flex h-20 items-center justify-between gap-5" aria-label="Primary navigation">
          <Link to="/" className="focus-ring flex min-w-0 items-center gap-3 rounded">
            <img src="/assets/big-wood-works-logo.png" alt="Big Wood Works" className="h-14 w-14 shrink-0 object-contain" />
            <span className="truncate font-display text-2xl font-semibold text-primary">Big Wood Works</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `focus-ring rounded py-2 text-sm font-bold tracking-wide transition ${
                    isActive ? "border-b-2 border-primary text-primary" : "text-on-surface-variant hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link className="focus-ring rounded border border-outline-variant px-4 py-3 text-sm font-bold text-primary hover:bg-surface-container" to="/contact">
              Request Wholesale Quote
            </Link>
            <a className="focus-ring rounded bg-tertiary-fixed px-4 py-3 text-sm font-bold text-on-tertiary-fixed hover:bg-tertiary-fixed-dim" href="/assets/catalogue.pdf" download>
              Catalogue
            </a>
          </div>

          <button
            type="button"
            className="focus-ring grid size-11 place-items-center rounded border border-outline-variant text-primary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </nav>

        <div id="mobile-menu" className={open ? "border-t border-outline-variant bg-background lg:hidden" : "hidden"}>
          <div className="container-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `focus-ring rounded px-4 py-3 text-base font-semibold ${
                    isActive ? "bg-primary text-on-primary" : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link className="focus-ring rounded bg-primary px-4 py-3 text-base font-bold text-on-primary" to="/contact">
              Request Wholesale Quote
            </Link>
            <a className="focus-ring rounded bg-tertiary-fixed px-4 py-3 text-base font-bold text-on-tertiary-fixed" href="/assets/catalogue.pdf" download>
              Download Catalogue
            </a>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-primary-container text-on-primary">
        <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/assets/big-wood-works-logo.png" alt="" className="h-14 w-14 object-contain" />
              <span className="font-display text-3xl font-semibold">Big Wood Works</span>
            </div>
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
