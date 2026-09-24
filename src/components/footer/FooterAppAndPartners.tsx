import { ArrowRight } from "lucide-react";

export default function FooterAppAndPartners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center pb-16">
      {/* 1. Mobile App Download Block */}
      <div className="flex flex-col items-start gap-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
          Download Our <br className="hidden sm:block" />
          Garibook Mobile App
        </h3>
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl inline-flex items-center gap-2.5 transition-all shadow-sm group"
        >
          <span>Download App</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* 2. A Product By */}
      <div className="flex flex-col items-start gap-2.5">
        <h4 className="text-base sm:text-lg font-bold text-white">
          A Product By
        </h4>
        <div className="flex items-center gap-3.5">
          {/* Constrained logo container */}
          <div className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center">
            <img
              src="/assets/footer/nrbsolution_logo-.png"
              alt="NRB Solution Ltd."
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-white">
              NRB Solution Ltd.
            </p>
            <a
              href="#"
              className="text-xs font-semibold text-yellow-400 hover:text-yellow-300 transition-colors inline-flex items-center gap-1 mt-0.5 group"
            >
              <span>Visit Website</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Powered By */}
      <div className="flex flex-col items-start gap-2.5">
        <h4 className="text-base sm:text-lg font-bold text-white">
          Powered By
        </h4>
        <div className="flex items-center gap-3.5">
          {/* Rounded white badge wrapper for non-transparent image */}
          <div className="flex-shrink-0 h-12 w-16 sm:h-14 sm:w-20 bg-white rounded-xl p-1.5 flex items-center justify-center shadow-sm">
            <img
              src="/assets/footer/link3-two.png"
              alt="Link 3 Technologies"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-white">
              Link 3 Technologies
            </p>
            <a
              href="#"
              className="text-xs font-semibold text-yellow-400 hover:text-yellow-300 transition-colors inline-flex items-center gap-1 mt-0.5 group"
            >
              <span>Visit Website</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
