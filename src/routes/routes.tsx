import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/App";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import DashboardLayout from "@/pages/Dashboard/DashboardLayout/DashboardLayout";
import Todo from "@/pages/Todo";
import MailCodeForm from "@/pages/MailCodeFrom/MailCodeFrom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/mail",
    element: <MailCodeForm />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
