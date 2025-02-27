import { Link } from "react-router-dom"; // If using React Router
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Brand
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}

          {/* User Authentication */}
          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <img
                  src={user?.picture}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 cursor-pointer"
                />
              </PopoverTrigger>
              <PopoverContent className="w-48 bg-white shadow-md rounded-lg p-2">
                <div className="flex flex-col">
                  <span className="text-center font-semibold">{user.name}</span>
                  <hr className="my-2" />
                  <Link
                    to="/profile"
                    className="p-2 hover:bg-gray-100 rounded-md"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    className="p-2 hover:bg-gray-100 rounded-md"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => dispatch(logout())}
                    className="p-2 text-red-500 hover:bg-gray-100 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex gap-4">
              <Button asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <Link key={item.href} to={item.href} className="py-2 text-lg">
                  {item.label}
                </Link>
              ))}

              {/* User Authentication (Mobile View) */}
              {user ? (
                <div className="flex flex-col gap-2 items-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <img
                        src={user?.picture}
                        alt="Profile"
                        className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-blue-500 cursor-pointer"
                      />
                    </PopoverTrigger>
                    <PopoverContent className="w-48 bg-white shadow-md rounded-lg p-2">
                      <div className="flex flex-col">
                        <span className="text-center font-semibold">
                          {user?.name}
                        </span>
                        <hr className="my-2" />
                        <Link
                          to="/profile"
                          className="p-2 hover:bg-gray-100 rounded-md"
                        >
                          Profile
                        </Link>
                        <Link
                          to="/dashboard"
                          className="p-2 hover:bg-gray-100 rounded-md"
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={() => dispatch(logout())}
                          className="p-2 text-red-500 hover:bg-gray-100 rounded-md"
                        >
                          Logout
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Button variant="outline" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/register">Register</Link>
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
