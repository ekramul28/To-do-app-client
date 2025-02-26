import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          If you have any questions or need assistance, feel free to get in
          touch with us.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto bg-white p-8 border rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Send Us a Message
        </h3>
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="mt-2"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-2"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Write your message here..."
              className="mt-2"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>

      {/* Contact Details */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Our Contact Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Mail size={20} className="text-blue-600" />
            <p className="text-lg text-gray-700">support@todolist.com</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Phone size={20} className="text-blue-600" />
            <p className="text-lg text-gray-700">+1 (234) 567-8901</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
