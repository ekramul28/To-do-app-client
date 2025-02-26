import Footer from "./components/share/Footer";
import Navbar from "./components/share/Header";
import HeroSection from "./pages/Banner/Banner";
import Features from "./pages/Features/Features";
import Testimonials from "./pages/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <HeroSection />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
