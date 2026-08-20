import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CustomizationPage } from "./pages/CustomizationPage";
import { ExportPage } from "./pages/ExportPage";
import { HomePage } from "./pages/HomePage";
import { ManufacturingPage } from "./pages/ManufacturingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { OemPage } from "./pages/OemPage";
import { ProductsPage } from "./pages/ProductsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="customization" element={<CustomizationPage />} />
        <Route path="manufacturing" element={<ManufacturingPage />} />
        <Route path="export" element={<ExportPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="quote" element={<Navigate to="/contact" replace />} />
        <Route path="oem" element={<OemPage />} />
        <Route path="oem-private-label" element={<Navigate to="/oem" replace />} />
        <Route path="wholesale" element={<Navigate to="/oem" replace />} />
        <Route path="catalogue" element={<Navigate to="/products" replace />} />
        <Route path="catalog" element={<Navigate to="/products" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
