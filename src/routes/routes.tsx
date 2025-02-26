import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/App";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Home from "@/pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Main layout wrapping everything
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
