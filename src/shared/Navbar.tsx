import { useState, useEffect } from "react";
import { navLinks } from "../constants/navLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="w-full bg-white border-b border-gray-100 z-40 relative">
      <div className="layout-container h-20 flex items-center justify-between">
        
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/favicon.svg" alt="Garibook Logo" className="h-8 w-8" />
          <span className="text-2xl font-medium tracking-tight">garibook</span>
        </a>

        {/* Center: Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href} 
                className="text-gray-900 hover:text-blue-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Desktop Login Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-blue-primary hover:bg-blue-700 text-white px-8 py-2.5 rounded-md font-medium transition-colors">
            login
          </button>
        </div>

        {/* Right: Mobile Layout (Login + Hamburger) */}
        <div className="flex lg:hidden items-center gap-4">
          <button className="bg-blue-primary hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
            login
          </button>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-gray-700"
            aria-label="Open menu"
          >
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-blue-primary text-white flex flex-col">
          {/* Mobile Menu Header: Language Toggle & Close Icon */}
          <div className="layout-container h-20 flex items-center justify-end gap-6 pt-2">
            <button className="flex items-center gap-2 text-sm font-medium hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
              </svg>
              English
            </button>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:opacity-80"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links Centered */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-20">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-medium hover:text-btn-download transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}