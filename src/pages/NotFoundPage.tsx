import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <section className="section-pad min-h-[70svh] bg-linen">
      <div className="container-shell max-w-3xl">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-ink">This page was not found.</h1>
        <p className="mt-5 leading-8 text-charcoal/78">
          The route does not match one of the Big Woodworks prototype screens.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Go home</Button>
          <Link to="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold text-ink hover:bg-bark/10">
            Contact the shop
          </Link>
        </div>
      </div>
    </section>
  );
}
