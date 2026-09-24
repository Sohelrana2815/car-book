import { useState } from "react";

export default function BookingWidget() {
  const [rentalType, setRentalType] = useState<"car" | "airport">("car");
  const [tripType, setTripType] = useState<"one-way" | "round-way" | "hourly">(
    "one-way",
  );

  return (
    <div className="layout-container relative bottom-20 sm:bottom-0 z-10 -mb-28 sm:-mb-32">
      {/* Top Tabs */}
      <div className="inline-flex bg-white/80 backdrop-blur-md rounded-t-2xl p-1.5 shadow-sm border border-gray-100 border-b-0">
        <button
          type="button"
          onClick={() => setRentalType("car")}
          className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
            rentalType === "car"
              ? "bg-[#121212] text-white shadow-xs"
              : "text-gray-700 hover:text-black"
          }`}
        >
          Car Rental
        </button>
        <button
          type="button"
          onClick={() => setRentalType("airport")}
          className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
            rentalType === "airport"
              ? "bg-[#121212] text-white shadow-xs"
              : "text-gray-700 hover:text-black"
          }`}
        >
          Airport Rental
        </button>
      </div>

      {/* Main Search Card */}
      <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-xl border border-gray-100 p-6 lg:p-8">
        {/* Form Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-6 border-b border-gray-100">
          {/* Field 1: Choose a Car */}
          <div className="flex flex-col gap-1.5 p-3 rounded-xl border border-gray-200 hover:border-blue-primary transition-colors">
            <label className="text-xs font-semibold text-gray-800 flex items-center gap-1.5">
              <span>🚗</span> Choose a Car{" "}
              <span className="text-red-500">*</span>
            </label>
            <select className="text-sm font-medium text-gray-500 outline-none bg-transparent cursor-pointer">
              <option value="">Select Car Type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV / Microbus</option>
              <option value="luxury">Luxury Car</option>
            </select>
          </div>

          {/* Field 2: Pickup Location */}
          <div className="flex flex-col gap-1.5 p-3 rounded-xl border border-gray-200 hover:border-blue-primary transition-colors">
            <label className="text-xs font-semibold text-gray-800 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400 inline-block"></span>
              Pickup Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Pickup Location"
              className="text-sm font-medium text-gray-800 placeholder-gray-400 outline-none bg-transparent"
            />
          </div>

          {/* Field 3: Drop-off Location */}
          <div className="flex flex-col gap-1.5 p-3 rounded-xl border border-gray-200 hover:border-blue-primary transition-colors">
            <label className="text-xs font-semibold text-gray-800 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-primary inline-block"></span>
              Drop-off Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Drop-off Location"
              className="text-sm font-medium text-gray-800 placeholder-gray-400 outline-none bg-transparent"
            />
          </div>

          {/* Field 4: Pickup Date & Time */}
          <div className="flex flex-col gap-1.5 p-3 rounded-xl border border-gray-200 hover:border-blue-primary transition-colors">
            <label className="text-xs font-semibold text-gray-800 flex items-center gap-1.5">
              📅 Pickup Date & Time <span className="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              className="text-xs sm:text-sm font-medium text-gray-500 outline-none bg-transparent cursor-pointer"
            />
          </div>
        </div>

        {/* Bottom Bar: Trip Types & Submit Button */}
     <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
  {/* Trip Type Selector Options */}
  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
    {[
      { id: "one-way", label: "One Way" },
      { id: "round-way", label: "Round Way" },
      { id: "hourly", label: "Hourly" },
    ].map((option) => (
      <button
        key={option.id}
        type="button"
        onClick={() => setTripType(option.id as typeof tripType)}
        className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
          tripType === option.id
            ? "bg-[#F0F4FF] text-blue-primary"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <span
          className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0 ${
            tripType === option.id
              ? "border-blue-primary bg-blue-primary"
              : "border-gray-400"
          }`}
        >
          {tripType === option.id && (
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          )}
        </span>
        {option.label}
      </button>
    ))}
  </div>

  {/* Submit Button */}
  <button
    type="button"
    className="w-full sm:w-auto bg-blue-primary hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-3 shadow-md"
  >
    <span>Continue</span>
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
  </button>
</div>
      </div>
    </div>
  );
}
