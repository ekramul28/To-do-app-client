import { Outlet, Link } from "react-router-dom";
import { Menu, User, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const SidebarLinks = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/dashboard/todo", label: "To-Do" },
  { path: "/dashboard/profile", label: "Profile" },
  { path: "/dashboard/settings", label: "Settings" },
];

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
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
            <User size={24} className="text-gray-600" />
            <Link
              to="/dashboard/profile"
              className="text-sm font-medium text-gray-800 hover:text-indigo-600 transition"
            >
              My Profile
            </Link>
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
