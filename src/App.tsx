import Footer from "./components/share/Footer";
import Navbar from "./components/share/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="mt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
