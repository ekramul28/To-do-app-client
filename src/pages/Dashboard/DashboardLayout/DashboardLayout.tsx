/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Menu, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { verifyToken } from "@/lib/verifyToken";
import {
  logout,
  selectCurrentUser,
  setUser,
  TUser,
} from "@/redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const SidebarLinks = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/dashboard/todo", label: "To-Do" },
  { path: "/dashboard/profile", label: "Profile" },
  { path: "/dashboard/settings", label: "Settings" },
];

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      const user = verifyToken(token) as TUser;
      console.log("this is main user", user);
      dispatch(setUser({ user: user, token }));
    }
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white p-4 space-y-4">
        <Link to="/">
          <h2 className="text-xl font-bold">MY TODO APP</h2>
        </Link>
        <nav className="flex flex-col space-y-2">
          {SidebarLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="py-2 px-4 rounded hover:bg-gray-700 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col h-full">
          {/* Other content here */}

          <button className="mt-auto flex items-center gap-2 py-2 px-4 rounded bg-red-600 hover:bg-red-700 transition">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden absolute top-4 left-4">
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-gray-900 text-white p-4">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <nav className="flex flex-col space-y-2 mt-4">
            {SidebarLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="py-2 px-4 rounded hover:bg-gray-700 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col h-full">
            {/* Other content here */}

            <button className="mt-auto flex items-center gap-2 py-2 px-4 rounded bg-red-600 hover:bg-red-700 transition">
              <LogOut size={18} /> Logout
            </button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold hidden lg:block">
            Welcome to Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium text-gray-800 hover:text-indigo-600 transition">
              {user && (
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
                      <span className="text-center font-semibold">
                        {user.name}
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
                        onClick={handleLogout}
                        className="p-2 text-red-500 hover:bg-gray-100 rounded-md"
                      >
                        Logout
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </p>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
