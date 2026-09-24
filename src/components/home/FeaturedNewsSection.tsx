import { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { NEWS_ARTICLES } from "../../constants/newsData";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function FeaturedNewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll left/right slider controls
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
    <section className="news-featured-section w-full bg-white py-[70px]">
      <div className="layout-container flex flex-col gap-8">
        {/* Header with Title and Navigation Arrows */}
        <div className="flex items-center justify-between gap-4">
          <SectionHeading
            title="We Featured by Top news Platforms"
            as="h2"
            className="max-w-xl"
          />

          {/* Slider Prev/Next Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous News"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={() => handleScroll("right")}
              aria-label="Next News"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* News Cards Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto scroll-smooth no-scrollbar py-2"
        >
          {NEWS_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="news-card flex flex-col justify-between bg-white border border-gray-100 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col gap-3">
                {/* News Image */}
                <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={article.imageSrc}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Date */}
                <p className="text-xs text-gray-400 font-medium pt-1">
                  {article.date}
                </p>

                {/* Article Title */}
                <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2">
                  {article.title}
                </h3>

                {/* Article Snippet */}
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                  {article.snippet}
                </p>
              </div>

              {/* Card Footer: Outlet Branding & Read Article */}
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100">
                <span className="text-sm font-extrabold text-gray-800">
                  {article.publisher}
                </span>

                <a
                  href={article.articleUrl}
                  className="text-xs font-semibold text-blue-primary hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
