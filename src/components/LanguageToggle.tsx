import { useState } from "react";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({
  className = "",
}: LanguageToggleProps) {
  const [lang, setLang] = useState<"en" | "bn">("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "bn" : "en"));
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-1.5 bg-blue-primary text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors shadow-sm ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
        />
      </svg>
      <span>{lang === "en" ? "English" : "বাংলা"}</span>
    </button>
  );
}
