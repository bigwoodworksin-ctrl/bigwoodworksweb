import { Link } from "react-router-dom";
import { navItems } from "../../data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
            <span className="grid size-11 place-items-center rounded-full bg-paper font-display text-xl font-bold text-bark">
              B
            </span>
            <span className="font-display text-2xl font-bold">Big Woodworks</span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-paper/72">
            Custom woodwork, furniture, cabinetry, and architectural details shaped for everyday living.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-paper/55">Navigate</h2>
          <div className="mt-5 grid gap-3">
            {navItems.slice(1, 6).map((item) => (
              <Link key={item.href} className="focus-ring rounded text-paper/76 hover:text-paper" to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-paper/55">Contact</h2>
          <address className="mt-5 not-italic leading-7 text-paper/76">
            hello@bigwoodworks.studio
            <br />
            Mon-Fri, 9:00-5:00
          </address>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-shell flex flex-col gap-3 py-5 text-sm text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Big Woodworks. All rights reserved.</p>
          <Link to="/quote" className="focus-ring rounded hover:text-paper">
            Request an estimate
          </Link>
        </div>
      </div>
    </footer>
  );
}
