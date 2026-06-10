import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../../data/site";
import { Button } from "../ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-bark/10 bg-paper/92 backdrop-blur-xl">
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Primary">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid size-11 place-items-center rounded-full bg-bark font-display text-xl font-bold text-paper">
            B
          </span>
          <span className="font-display text-2xl font-bold leading-none text-ink">Big Woodworks</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-bark text-paper" : "text-ink hover:bg-bark/10"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/quote">Start a project</Button>
        </div>

        <button
          type="button"
          className="focus-ring grid size-11 place-items-center rounded-full border border-bark/15 text-ink lg:hidden"
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
        className={`border-t border-bark/10 bg-paper lg:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="container-shell grid gap-2 py-5">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `focus-ring rounded-lg px-4 py-3 text-base font-semibold ${
                  isActive ? "bg-bark text-paper" : "text-ink hover:bg-linen"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button href="/quote" className="mt-2 w-full">
            Start a project
          </Button>
        </div>
      </div>
    </header>
  );
}
