import Footer from "./components/share/Footer";
import Navbar from "./components/share/Header";
import Features from "./pages/Features/Features";
import Testimonials from "./pages/Testimonials/Testimonials";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <Navbar />
      <Todo></Todo>

      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
