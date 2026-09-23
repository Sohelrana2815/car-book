import { Outlet } from "react-router";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


export default function MainLayout() {
  return (
    // min-h-screen + flex-col guarantees the layout fills at least 100% viewport height
    <div className="min-h-screen flex flex-col w-full bg-white text-gray-900">
      <Navbar />

      {/* flex-1 pushes the footer to the bottom when content height is small */}
      <div className="flex-1 flex flex-col w-full">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
