import { CheckCircle, FileText, Clock, User } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create Tasks",
      description:
        'Add new tasks by simply clicking the "Add Task" button, providing a title, and specifying any additional details.',
      icon: <FileText size={40} className="text-indigo-600" />,
    },
    {
      title: "Set Deadlines",
      description:
        "Assign due dates and times to keep your tasks organized and stay on track with your productivity.",
      icon: <Clock size={40} className="text-green-600" />,
    },
    {
      title: "Mark Tasks Complete",
      description:
        "Once you finish a task, mark it as complete and watch your progress grow as you get things done!",
      icon: <CheckCircle size={40} className="text-blue-600" />,
    },
    {
      title: "Track Your Progress",
      description:
        "Review your task history and completed tasks, helping you stay motivated and see your achievements.",
      icon: <User size={40} className="text-yellow-600" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center items-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
