import { LEGAL_LINKS } from "../../constants/footerData";

export default function FooterBottomBar() {
  return (
    <div className="border-t border-gray-800 pt-8 pb-12 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-gray-300">
      {/* Brand & Policy Links */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
        <a
          href="/"
          className="flex items-center gap-2 text-white font-bold text-xl"
        >
          <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />
          <span>garibook</span>
        </a>

        {LEGAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Trade License Info */}
      <div className="text-center lg:text-left text-gray-400">
        <p>Trade license number:</p>
        <p className="font-semibold text-gray-200">TRAD/DNCC/013806/2024</p>
      </div>

      {/* Copyright */}
      <div className="text-gray-400 text-center lg:text-right">
        © 2026 Garibook.com
      </div>
    </div>
  );
}
