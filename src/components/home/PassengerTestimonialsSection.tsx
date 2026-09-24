import { useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { TESTIMONIALS } from "../../constants/testimonialData";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PassengerTestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  console.log(activeVideo);
  // Smooth horizontal scroll for prev/next buttons
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="testimonials-section w-full bg-[#F1F6FF] py-[70px]">
      <div className="layout-container flex flex-col gap-8">
        {/* Header Row: Title & Subtitle on Left, Navigation Arrows on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl flex flex-col gap-3">
            <SectionHeading title="Our Passengers Speak For Us" as="h2" />
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our journey was seamless and enjoyable from start to finish. The
              booking process was straightforward, and the staff were incredibly
              attentive, ensuring we felt comfortable throughout the trip.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-800 shadow-xs hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={() => handleScroll("right")}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-800 shadow-xs hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Video Cards Grid / Carousel */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto scroll-smooth no-scrollbar pt-2 pb-4"
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="testimonial-card flex flex-col gap-4 group cursor-pointer"
              onClick={() => setActiveVideo(item.id)}
            >
              {/* Video Thumbnail Box */}
              <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden bg-gray-200 shadow-sm border border-black/5 group-hover:shadow-md transition-shadow">
                <img
                  src={item.thumbnailSrc}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Left Badge / Watermark */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-xl text-left pointer-events-none shadow-xs">
                  <p className="text-[10px] text-gray-500 uppercase font-semibold leading-tight">
                    Our passengers
                  </p>
                  <p className="text-xs font-black text-blue-primary leading-tight">
                    speak{" "}
                    <span className="text-gray-900 font-normal">for us</span>
                  </p>
                </div>

                {/* Center Red Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 ml-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Name & Occupation */}
              <div className="flex flex-col items-start px-1">
                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs font-medium text-gray-500 mt-0.5">
                  {item.occupation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
