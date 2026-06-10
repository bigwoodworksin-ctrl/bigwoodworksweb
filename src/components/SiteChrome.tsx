import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { stitchPages } from "../data/stitchPages";

const navItems = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Products", route: "/products" },
  { label: "Customization", route: "/customization" },
  { label: "Manufacturing", route: "/manufacturing" },
  { label: "Export", route: "/export" },
  { label: "Contact", route: "/contact" },
];

export function SiteChrome() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <header className="sticky top-0 z-50 border-b border-outline-variant bg-background/95 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 md:px-8 lg:px-16">
          <Link to="/" className="focus-ring flex min-w-0 items-center gap-3 rounded">
            <img
              src="/assets/big-wood-works-logo.png"
              alt="Big Wood Works logo"
              className="size-14 shrink-0 rounded object-contain"
            />
            <span className="font-display text-2xl font-semibold text-primary">Big Wood Works</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.route}
                to={item.route}
                className={({ isActive }) =>
                  `focus-ring rounded py-2 text-sm font-semibold tracking-[0.05em] transition ${
                    isActive ? "border-b-2 border-primary text-primary" : "text-on-surface-variant hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <NavLink
              to="/oem-private-label"
              className={({ isActive }) =>
                `focus-ring rounded px-4 py-3 text-sm font-bold transition ${
                  isActive ? "bg-primary text-on-primary" : "border border-outline-variant text-primary hover:bg-surface-container"
                }`
              }
            >
              OEM
            </NavLink>
            <NavLink
              to="/catalogue"
              className="focus-ring rounded bg-tertiary-fixed px-4 py-3 text-sm font-bold text-on-tertiary-fixed transition hover:bg-tertiary-fixed-dim"
            >
              Catalogue
            </NavLink>
          </div>

          <button
            type="button"
            className="focus-ring grid size-11 place-items-center rounded border border-outline-variant text-primary lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </nav>

        <div id="mobile-navigation" className={open ? "border-t border-outline-variant bg-background lg:hidden" : "hidden"}>
          <div className="mx-auto grid w-full max-w-[1280px] gap-2 px-4 py-4 md:px-8">
            {[...navItems, { label: "OEM", route: "/oem-private-label" }].map((item) => (
              <NavLink
                key={item.route}
                to={item.route}
                className={({ isActive }) =>
                  `focus-ring rounded px-4 py-3 text-base font-semibold ${
                    isActive ? "bg-primary text-on-primary" : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/catalogue"
              className="focus-ring rounded bg-tertiary-fixed px-4 py-3 text-base font-bold text-on-tertiary-fixed"
            >
              Catalogue
            </NavLink>
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
