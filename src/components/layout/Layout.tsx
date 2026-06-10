import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "../navigation/Header";

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
