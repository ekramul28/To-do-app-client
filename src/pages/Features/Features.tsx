import { CheckSquare, Calendar, Shield } from "lucide-react";

const Features = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          App Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Feature 1: Manage Tasks */}
          <div className="shadow-lg p-6 rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6 flex justify-center items-center">
              <CheckSquare size={48} className="text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Manage Tasks
            </h3>
            <p className="text-gray-600 mb-4">
              Create, edit, and delete tasks easily with a simple interface.
              Keep track of everything in one place.
            </p>
            <button className="text-indigo-600 hover:underline">
              Learn More
            </button>
          </div>

          {/* Feature 2: Google Calendar Sync */}
          <div className="shadow-lg p-6 rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6 flex justify-center items-center">
              <Calendar size={48} className="text-red-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Google Calendar Sync
            </h3>
            <p className="text-gray-600 mb-4">
              Sync your tasks directly with your Google Calendar to stay
              organized and never miss a task.
            </p>
            <button className="text-red-600 hover:underline">Learn More</button>
          </div>

          {/* Feature 3: Enhanced Security */}
          <div className="shadow-lg p-6 rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6 flex justify-center items-center">
              <Shield size={48} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Enhanced Security
            </h3>
            <p className="text-gray-600 mb-4">
              Multi-factor authentication (MFA) ensures your tasks and data are
              secure at all times.
            </p>
            <button className="text-green-600 hover:underline">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
