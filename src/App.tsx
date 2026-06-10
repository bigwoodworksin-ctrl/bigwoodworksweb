import { Route, Routes } from "react-router-dom";
import { stitchPages } from "./data/stitchPages";
import { NotFoundPage } from "./pages/NotFoundPage";
import { StitchPage } from "./pages/StitchPage";

export default function App() {
  return (
    <Routes>
      {stitchPages.map((page) =>
        page.route === "/" ? (
          <Route key={page.route} index element={<StitchPage page={page} />} />
        ) : (
          <Route key={page.route} path={page.route.slice(1)} element={<StitchPage page={page} />} />
        ),
      )}
      <Route path="contact" element={<StitchPage page={stitchPages[0]} />} />
      <Route path="quote" element={<StitchPage page={stitchPages[0]} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
