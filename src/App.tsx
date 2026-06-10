import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { pages } from "./data/bigwood";
import { ContactPage } from "./pages/ContactPage";
import { DesignPage } from "./pages/DesignPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pages.map((page) =>
          page.route === "/" ? (
            <Route key={page.route} index element={<DesignPage page={page} />} />
          ) : (
            <Route key={page.route} path={page.route.slice(1)} element={<DesignPage page={page} />} />
          ),
        )}
        <Route path="contact" element={<ContactPage />} />
        <Route path="quote" element={<ContactPage quoteMode />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
