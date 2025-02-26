import { Button } from "@/components/ui/button";
import { CheckCircle, ListTodo, Clock, Star } from "lucide-react";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">About Our To-Do App</h2>
        <p className="text-gray-600 mt-2">
          Stay organized and boost your productivity with our simple yet
          powerful to-do app.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div className="p-4 border rounded-lg shadow-sm">
          <CheckCircle size={32} className="mx-auto text-blue-600" />
          <h3 className="font-semibold mt-2">Easy Task Management</h3>
          <p className="text-gray-500 text-sm">
            Add, edit, and delete tasks effortlessly.
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm">
          <ListTodo size={32} className="mx-auto text-green-600" />
          <h3 className="font-semibold mt-2">Organized Lists</h3>
          <p className="text-gray-500 text-sm">
            Categorize tasks for better workflow.
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm">
          <Clock size={32} className="mx-auto text-yellow-600" />
          <h3 className="font-semibold mt-2">Reminders & Deadlines</h3>
          <p className="text-gray-500 text-sm">
            Never miss a deadline with reminders.
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm">
          <Star size={32} className="mx-auto text-purple-600" />
          <h3 className="font-semibold mt-2">User-Friendly Interface</h3>
          <p className="text-gray-500 text-sm">
            A simple, intuitive design for all users.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default About;
