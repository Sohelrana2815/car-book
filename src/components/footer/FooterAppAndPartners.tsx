export default function FooterAppAndPartners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-16">
      {/* Mobile App Download Block */}
      <div className="flex flex-col items-start gap-4">
        <h3 className="text-2xl font-bold text-white leading-tight">
          Download Our <br />
          Garibook Mobile App
        </h3>
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl inline-flex items-center gap-3 transition-colors shadow-sm"
        >
          <span>Download App</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>

      {/* A Product By */}
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-bold text-white">A Product By</h4>
        <div className="flex items-center gap-3 mt-1">
          <div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.997 8.997 0 0 0 7.843-4.582M12 21a8.997 8.997 0 0 1-7.843-4.582m15.686 0A11.953 11.953 0 0 0 12 10.5c-2.998 0-5.74 1.1-7.843 2.918"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">NRB Solution Ltd.</p>
            <a
              href="#"
              className="text-xs font-semibold text-yellow-400 hover:underline inline-flex items-center gap-1 mt-0.5"
            >
              <span>Visit Website</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Powered By */}
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-bold text-white">Powered By</h4>
        <div className="flex items-center gap-3 mt-1">
          <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-500/20 text-blue-400 font-bold text-xs">
            Link3
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Link 3 Technologies</p>
            <a
              href="#"
              className="text-xs font-semibold text-yellow-400 hover:underline inline-flex items-center gap-1 mt-0.5"
            >
              <span>Visit Website</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}