import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainLayout>
      <Home />
    </MainLayout>
  </StrictMode>,
);

// About Us
// Earn With Garibook
// Garibook Business
// Garibook Club
// Campaign
// Blogs
