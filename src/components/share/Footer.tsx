import { Link } from "react-router-dom"; // If using React Router
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold">Brand</h2>
            <p className="text-gray-400 mt-2">
              Providing quality services since 2024.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">Quick Links</h3>
            <Link to="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link to="/services" className="text-gray-400 hover:text-white">
              Services
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-white">
              About
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={24}
                  className="hover:text-blue-500 transition"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} className="hover:text-blue-400 transition" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={24}
                  className="hover:text-pink-500 transition"
                />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} className="hover:text-gray-300 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
