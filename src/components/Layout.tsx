import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { contact, navItems } from "../data/catalogue";

export function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <header className="sticky top-0 z-50 border-b border-outline-variant bg-background/95 backdrop-blur-xl">
        <nav className="container-shell flex h-20 items-center justify-between gap-5" aria-label="Primary navigation">
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
            <Link className="focus-ring rounded border border-outline-variant px-4 py-3 text-sm font-bold text-primary hover:bg-surface-container" to="/oem">
              OEM
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
            {[...navItems, { label: "OEM", href: "/oem" }].map((item) => (
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
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-on-primary/55">Catalogue</h2>
            <div className="mt-5 grid gap-3">
              {navItems.slice(1, 6).map((item) => (
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
