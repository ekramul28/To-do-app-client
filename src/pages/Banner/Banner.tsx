import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Stay Organized, Get Things Done
        </h1>
        <p className="text-xl mb-8">
          The easiest way to manage your tasks, track deadlines, and boost your
          productivity. Start using our powerful task manager today!
        </p>

        <div className="flex justify-center gap-6">
          {/* Primary CTA Button */}
          <Button className="bg-indigo-700 hover:bg-indigo-800 text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all">
            Get Started
          </Button>

          {/* Secondary CTA Button */}
          <Button className="bg-transparent border-2 border-white text-lg px-8 py-4 rounded-full text-white hover:bg-white hover:text-indigo-700 transition-all">
            Learn More
          </Button>
        </div>

        <div className="mt-12">
          <p className="text-lg italic">
            "Plan your day, accomplish your goals, and never miss a deadline."
          </p>
          <span className="text-lg font-semibold">– Our Happy User</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
