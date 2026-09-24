import { useState, useEffect } from "react";
import { navLinks } from "../constants/navLinks";
import { NavLink } from "react-router";
import LanguageToggle from "../components/LanguageToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to hide top-right language button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="sticky top-0 w-full bg-white border-b border-gray-100 z-40">
      {/* Top Right Desktop Language Toggle (Hides smoothly on scroll down) */}
      <div
        className={`hidden lg:block absolute top-2 xl:top-3 right-6 z-50 transition-all duration-300 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <LanguageToggle className="px-5 py-2 text-lg" />
      </div>

      <nav className="layout-container h-24 flex items-center justify-between py-0 md:py-20 2xl:py-0">
        {/* Left: Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/favicon.svg"
            alt="Garibook Logo"
            className="w-36 lg:w-44"
          />
        </NavLink>

        {/* Right Section: Nav Links + Login Button grouped together */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto mr-16">
          <ul className="flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  className="group relative py-2 text-gray-900 font-medium text-base xl:text-lg transition-colors duration-300 hover:text-blue-primary"
                >
                  {link.label}
                  {/* Animated Expanding Underline */}
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-blue-primary origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <button className="bg-blue-primary hover:bg-blue-700 text-white px-6 py-1 rounded-lg font-medium transition-colors text-xl">
            login
          </button>
        </div>

        {/* Mobile Right Controls (Login + Mobile Menu Toggle) */}
        <div className="flex lg:hidden items-center gap-3">
          <button className="bg-blue-primary hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium text-sm transition-colors">
            login
          </button>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-gray-700"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-blue-primary text-white flex flex-col">
          <div className="layout-container h-20 flex items-center justify-end gap-6 pt-2">
            {/* Reusable Language Toggle inside mobile menu */}
            <LanguageToggle className="bg-white/20 text-white hover:bg-white/30 border border-white/20" />

            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:opacity-80"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-20">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-medium hover:text-btn-download transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
