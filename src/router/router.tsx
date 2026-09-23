import { createBrowserRouter } from "react-router";
import Home from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AboutPage from "../pages/About";
import EarnWithNamePage from "../pages/EarnWithNamePage";
import CareerPage from "../pages/CareerPage";
import BlogsPage from "../pages/BlogsPage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "earn",
        element: <EarnWithNamePage />,
      },
      {
        path: "career",
        element: <CareerPage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
