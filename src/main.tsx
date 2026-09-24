import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "@fontsource-variable/montserrat";
import "./index.css";
import router from "./router/router";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

// About Us
// Earn With Garibook
// Garibook Business
// Garibook Club
// Campaign
// Blogs
