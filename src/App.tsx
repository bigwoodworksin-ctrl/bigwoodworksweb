import { Route, Routes } from "react-router-dom";
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
        <Route path="quote" element={<ContactPage />} />
        <Route path="oem" element={<OemPage />} />
        <Route path="oem-private-label" element={<OemPage />} />
        <Route path="wholesale" element={<OemPage />} />
        <Route path="catalogue" element={<ProductsPage />} />
        <Route path="catalog" element={<ProductsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
