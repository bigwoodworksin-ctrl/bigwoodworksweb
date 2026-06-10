import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ProcessPage } from "./pages/ProcessPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="custom-furniture" element={<ServicesPage variant="furniture" />} />
        <Route path="cabinetry" element={<ServicesPage variant="cabinetry" />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="quote" element={<ContactPage quoteMode />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
