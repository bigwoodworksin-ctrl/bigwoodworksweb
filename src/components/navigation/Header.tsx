import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navPages } from "../../data/bigwood";
import { Button } from "../ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-background/92 backdrop-blur-xl">
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Primary">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid size-11 place-items-center rounded bg-primary font-display text-xl font-bold text-on-primary">
            B
          </span>
          <span className="font-display text-2xl font-bold leading-none text-primary">Big Wood Works</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navPages.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-primary text-on-primary" : "text-on-surface hover:bg-surface-container"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/contact">Catalogue</Button>
        </div>

        <button
          type="button"
          className="focus-ring grid size-11 place-items-center rounded border border-outline-variant text-primary lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-outline-variant bg-background lg:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="container-shell grid gap-2 py-5">
          {navPages.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `focus-ring rounded-lg px-4 py-3 text-base font-semibold ${
                  isActive ? "bg-primary text-on-primary" : "text-on-surface hover:bg-surface-container"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button href="/contact" className="mt-2 w-full">
            Catalogue
          </Button>
        </div>
      </div>
    </header>
  );
}
