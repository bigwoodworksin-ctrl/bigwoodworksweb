import { Route, Routes } from "react-router-dom";
import { SiteChrome } from "./components/SiteChrome";
import { stitchPages } from "./data/stitchPages";
import { NotFoundPage } from "./pages/NotFoundPage";
import { StitchPage } from "./pages/StitchPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteChrome />}>
        {stitchPages.map((page) =>
          page.route === "/" ? (
            <Route key={page.route} index element={<StitchPage page={page} />} />
          ) : (
            <Route key={page.route} path={page.route.slice(1)} element={<StitchPage page={page} />} />
          ),
        )}
        <Route path="contact" element={<StitchPage page={stitchPages[3]} />} />
        <Route path="quote" element={<StitchPage page={stitchPages[3]} />} />
        <Route path="catalogue" element={<StitchPage page={stitchPages[2]} />} />
        <Route path="catalog" element={<StitchPage page={stitchPages[2]} />} />
        <Route path="wholesale" element={<StitchPage page={stitchPages[4]} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
