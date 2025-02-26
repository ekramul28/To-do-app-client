import Footer from "./components/share/Footer";
import Navbar from "./components/share/Header";
import HeroSection from "./pages/Banner/Banner";
import FAQSection from "./pages/FAQSection/FAQSection";
import Features from "./pages/Features/Features";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Testimonials from "./pages/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <HeroSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
