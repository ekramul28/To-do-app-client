import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar:
      "https://res.cloudinary.com/dvtdneocc/image/upload/v1736653497/yjmpzhjhnqswnjazuccv.jpg",
    feedback:
      "This To-Do app has transformed how I organize my day. With easy task management and seamless calendar integration, I never miss a deadline.",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Software Engineer",
    avatar:
      "https://res.cloudinary.com/dvtdneocc/image/upload/v1736653498/edyselp3tpn6oxfl3kuy.jpg",
    feedback:
      "As a developer, staying organized is key. This app helps me break down large projects into manageable tasks and track progress effortlessly.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Freelance Designer",
    avatar:
      "https://res.cloudinary.com/dvtdneocc/image/upload/v1736651702/hljehqgj5mkzilaj1tnx.jpg",
    feedback:
      "I love the clean design and how easy it is to create and prioritize tasks. The ability to sync with Google Calendar makes planning so much easier.",
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "Marketing Specialist",
    avatar:
      "https://res.cloudinary.com/dvtdneocc/image/upload/v1736318888/download_7_wvqp9v.jpg",
    feedback:
      "Highly recommend this app! It helps me stay focused and on top of my tasks, ensuring I meet all my deadlines with ease.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          What Our Users Say
        </h2>
        <div className="relative">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
            <div className="flex items-center mb-6">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-500">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              “{testimonials[currentIndex].feedback}”
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2">
            <button
              onClick={prevTestimonial}
              className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
            >
              &lt;
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2">
            <button
              onClick={nextTestimonial}
              className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
