import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TOTAL_PAGES = 46;

export function HiddenCataloguePage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [shielded, setShielded] = useState(false);

  const changePage = useCallback((requested: number) => {
    const nextPage = Math.max(1, Math.min(TOTAL_PAGES, requested));
    setPage((current) => {
      if (nextPage === current) return current;
      setDirection(nextPage > current ? "next" : "previous");
      return nextPage;
    });
  }, []);

  useEffect(() => {
    document.title = "Private Trade Catalogue | Big Wood Works";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow, noarchive, nosnippet, noimageindex";
    document.head.appendChild(robots);

    const stopContextMenu = (event: MouseEvent) => event.preventDefault();
    const stopDrag = (event: DragEvent) => event.preventDefault();
    const stopKeys = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "arrowleft") changePage(page - 1);
      if (key === "arrowright" || key === " ") changePage(page + 1);
      if ((event.ctrlKey || event.metaKey) && ["p", "s", "u"].includes(key)) event.preventDefault();
      if (key === "printscreen") {
        event.preventDefault();
        setShielded(true);
        navigator.clipboard?.writeText("").catch(() => undefined);
        window.setTimeout(() => setShielded(false), 1600);
      }
    };

    document.addEventListener("contextmenu", stopContextMenu);
    document.addEventListener("dragstart", stopDrag);
    window.addEventListener("keydown", stopKeys);
    window.addEventListener("keyup", stopKeys);
    return () => {
      robots.remove();
      document.removeEventListener("contextmenu", stopContextMenu);
      document.removeEventListener("dragstart", stopDrag);
      window.removeEventListener("keydown", stopKeys);
      window.removeEventListener("keyup", stopKeys);
    };
  }, [changePage, page]);

  const enterFullscreen = () => document.documentElement.requestFullscreen?.().catch(() => undefined);

  return (
    <main className="catalogue-viewer" aria-label="Private Big Wood Works trade catalogue">
      <style>{`
        @keyframes turnNext { from { opacity:.2; transform:rotateY(-48deg) scale(.96) } to { opacity:1; transform:rotateY(0) scale(1) } }
        @keyframes turnPrevious { from { opacity:.2; transform:rotateY(48deg) scale(.96) } to { opacity:1; transform:rotateY(0) scale(1) } }
        .catalogue-viewer { position:fixed; inset:0; z-index:9999; display:grid; grid-template-rows:auto 1fr auto; min-height:100dvh; overflow:hidden; color:#fff; background:radial-gradient(circle at 50% 20%,#5d463b55,transparent 42%),#130d0b; user-select:none }
        .catalogue-toolbar,.catalogue-controls { z-index:2; display:grid; align-items:center; gap:24px; padding:14px clamp(16px,4vw,48px); background:#130d0bd9; backdrop-filter:blur(18px) }
        .catalogue-toolbar { grid-template-columns:1fr auto 1fr; border-bottom:1px solid #ffffff24 }
        .catalogue-brand { display:grid; gap:2px }.catalogue-brand strong { font-family:Georgia,serif; font-size:18px }.catalogue-brand span,.catalogue-count { margin:0; color:#ffffffa3; font-size:11px; letter-spacing:.12em; text-transform:uppercase }
        .catalogue-actions { justify-self:end; display:flex; gap:8px }.catalogue-icon,.catalogue-arrow { display:grid; place-items:center; border:1px solid #ffffff33; border-radius:999px; background:#ffffff14; color:#fff; cursor:pointer }.catalogue-icon { width:44px; height:44px }.catalogue-arrow { width:clamp(44px,5vw,58px); height:clamp(44px,5vw,58px) }.catalogue-arrow:disabled,.catalogue-controls button:disabled { opacity:.22; cursor:default }
        .catalogue-stage { display:grid; grid-template-columns:auto minmax(0,1fr) auto; align-items:center; gap:clamp(8px,2vw,28px); min-height:0; padding:clamp(12px,2vw,28px); perspective:1800px }
        .catalogue-book { display:grid; place-items:center; height:100%; min-width:0 }.catalogue-page { position:relative; height:100%; max-height:calc(100dvh - 168px); margin:0; overflow:hidden; border-radius:3px 10px 10px 3px; background:#fff; box-shadow:0 28px 90px #0009,-8px 0 18px #0005; transform-origin:left center }.catalogue-page.next { animation:turnNext 520ms cubic-bezier(.2,.75,.2,1) }.catalogue-page.previous { transform-origin:right center; animation:turnPrevious 520ms cubic-bezier(.2,.75,.2,1) }.catalogue-page img { width:100%; height:100%; object-fit:contain; pointer-events:none; -webkit-touch-callout:none }
        .catalogue-watermark { position:absolute; right:12px; bottom:8px; padding:4px 7px; background:#27131094; color:#ffffffbd; font-size:8px; letter-spacing:.12em; pointer-events:none }.catalogue-controls { grid-template-columns:auto minmax(120px,420px) auto; justify-content:center; border-top:1px solid #ffffff24 }.catalogue-controls button { border:0; background:transparent; color:#fff; font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; cursor:pointer }.catalogue-controls input { accent-color:#e9c176 }
        .catalogue-shield { position:absolute; inset:0; z-index:10; display:grid; place-items:center; background:#130d0b; color:#ffffffb8; letter-spacing:.08em }
        @media (max-width:640px) { .catalogue-toolbar { grid-template-columns:1fr auto }.catalogue-count { display:none }.catalogue-stage { grid-template-columns:1fr }.catalogue-arrow { position:absolute; z-index:3; top:50% }.catalogue-arrow.previous { left:8px }.catalogue-arrow.next { right:8px }.catalogue-controls { gap:10px; padding-inline:12px } }
        @media print { .catalogue-viewer { display:none!important } }
      `}</style>

      <header className="catalogue-toolbar">
        <div className="catalogue-brand"><strong>Big Wood Works</strong><span>Private trade catalogue</span></div>
        <p className="catalogue-count">Page {page} of {TOTAL_PAGES}</p>
        <div className="catalogue-actions">
          <button className="catalogue-icon" type="button" onClick={enterFullscreen} aria-label="Enter full screen"><Expand size={18} /></button>
          <button className="catalogue-icon" type="button" onClick={() => navigate("/")} aria-label="Close catalogue"><X size={20} /></button>
        </div>
      </header>

      <section className="catalogue-stage">
        <button className="catalogue-arrow previous" type="button" disabled={page === 1} onClick={() => changePage(page - 1)} aria-label="Previous page"><ChevronLeft /></button>
        <div className="catalogue-book">
          <figure key={page} className={`catalogue-page ${direction}`}>
            <img src={`/assets/catalogue-pages/page-${String(page).padStart(2, "0")}.jpg`} alt={`Big Wood Works catalogue page ${page}`} draggable={false} />
            <div className="catalogue-watermark" aria-hidden="true">CONFIDENTIAL · BIG WOOD WORKS</div>
          </figure>
        </div>
        <button className="catalogue-arrow next" type="button" disabled={page === TOTAL_PAGES} onClick={() => changePage(page + 1)} aria-label="Next page"><ChevronRight /></button>
      </section>

      <footer className="catalogue-controls">
        <button type="button" disabled={page === 1} onClick={() => changePage(page - 1)}>Previous</button>
        <input aria-label="Catalogue page" type="range" min="1" max={TOTAL_PAGES} value={page} onChange={(event) => changePage(Number(event.target.value))} />
        <button type="button" disabled={page === TOTAL_PAGES} onClick={() => changePage(page + 1)}>Next</button>
      </footer>
      {shielded && <div className="catalogue-shield" role="status">Screen capture is restricted for this catalogue.</div>}
    </main>
  );
}
