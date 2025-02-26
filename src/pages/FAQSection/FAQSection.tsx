import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I create a new task?",
      answer:
        "To create a new task, click the 'Add Task' button at the top of your task list and enter the details.",
    },
    {
      question: "Can I sync tasks with my Google Calendar?",
      answer:
        "Yes! You can integrate your Google Calendar with the app, allowing you to view your tasks alongside your events.",
    },
    {
      question: "How do I set reminders for my tasks?",
      answer:
        "You can set reminders for any task. Just select the task, click on 'Set Reminder', and choose a time.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, your data is securely stored using industry-standard encryption. We also offer two-factor authentication for added security.",
    },
    {
      question: "Can I share tasks with others?",
      answer:
        "Currently, sharing tasks is not supported, but we are working on it for a future update!",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg mb-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-2xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <div>
                  {openIndex === index ? (
                    <Minus size={24} className="text-indigo-600" />
                  ) : (
                    <Plus size={24} className="text-indigo-600" />
                  )}
                </div>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
