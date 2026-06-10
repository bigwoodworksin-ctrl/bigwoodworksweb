import { Link } from "react-router-dom";
import { navPages } from "../../data/bigwood";

export function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
            <span className="grid size-11 place-items-center rounded bg-inverse-on-surface font-display text-xl font-bold text-primary">
              B
            </span>
            <span className="font-display text-2xl font-bold">Big Wood Works</span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-inverse-on-surface/72">
            Premium wooden memorial urns manufactured at artisanal quality and global B2B scale.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-inverse-on-surface/55">Navigate</h2>
          <div className="mt-5 grid gap-3">
            {navPages.slice(1, 6).map((item) => (
              <Link key={item.href} className="focus-ring rounded text-inverse-on-surface/76 hover:text-inverse-on-surface" to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-inverse-on-surface/55">Contact</h2>
          <address className="mt-5 not-italic leading-7 text-inverse-on-surface/76">
            sales@bigwoodworks.com
            <br />
            Manufacturing Unit: Rajasthan, India
          </address>
        </div>
      </div>
      <div className="border-t border-inverse-on-surface/10">
        <div className="container-shell flex flex-col gap-3 py-5 text-sm text-inverse-on-surface/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Big Wood Works - A Brand of The Maryam Crafts, India.</p>
          <Link to="/contact" className="focus-ring rounded hover:text-inverse-on-surface">
            Request wholesale catalogue
          </Link>
        </div>
      </div>
    </footer>
  );
}
