import type { ReactNode } from "react";
import Navbar from "../shared/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    // min-h-screen + flex-col guarantees the layout fills at least 100% viewport height
    <div className="min-h-screen flex flex-col w-full bg-white text-gray-900">
      <Navbar />

      {/* flex-1 pushes the footer to the bottom when content height is small */}
      <div className="flex-1 flex flex-col w-full">{children}</div>

      {/* <Footer /> */}
      Footer
    </div>
  );
}
