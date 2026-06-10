import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="section-pad min-h-[70svh] bg-surface-container-low">
      <div className="container-shell max-w-3xl">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-primary">This page was not found.</h1>
        <p className="mt-5 leading-8 text-on-surface-variant">
          The route does not match one of the Big Wood Works exported screens.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="focus-ring inline-flex min-h-12 items-center justify-center rounded bg-primary px-6 text-sm font-bold text-on-primary">
            Go home
          </Link>
          <Link to="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center rounded px-6 text-sm font-bold text-primary hover:bg-surface-container">
            Contact the shop
          </Link>
        </div>
      </div>
    </section>
  );
}
