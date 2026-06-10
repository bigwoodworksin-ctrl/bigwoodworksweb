import { Button } from "../ui/Button";

export function CtaBand() {
  return (
    <section className="bg-sage py-14 text-paper">
      <div className="container-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-paper/70">Project ready</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight">Bring measurements, a sketch, or just a room that needs to work better.</h2>
        </div>
        <Button href="/quote" variant="secondary" className="shrink-0 border-paper/30 bg-paper text-ink hover:bg-linen">
          Request an estimate
        </Button>
      </div>
    </section>
  );
}
