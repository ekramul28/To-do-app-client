import HeroSection from "../Banner/Banner";
import Features from "../Features/Features";
import HowItWorks from "../HowItWorks/HowItWorks";
import Testimonials from "../Testimonials/Testimonials";
import FAQSection from "../FAQSection/FAQSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
    </div>
  );
};

export default Home;
