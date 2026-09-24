import { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

interface NewsArticle {
  id: string;
  date: string;
  title: string;
  snippet: string;
  publisher: string;
  publisherLogo?: string;
  articleUrl: string;
  imageSrc: string;
}

const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-1",
    date: "December 04, 2024",
    title: "গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা",
    snippet:
      "বাংলাদেশে আন্তঃজেলা যাত্রী ভ্রমণের অভিজ্ঞতা আরও সহজ ও সাশ্রয়ী করতে গারি বুক নিয়ে এলো আধুনিক ডিজিটাল রাইড শেয়ারিং প্লাটফর্ম...",
    publisher: "প্রথম আলো",
    articleUrl: "#",
    imageSrc: "assets/news/tour.webp",
  },
  {
    id: "news-2",
    date: "December 04, 2024",
    title: 'Digital App to offer "Chander Gari"',
    snippet:
      "For the first time in Bangladesh, tourists can now book the iconic Chander Gari through an online platform...",
    publisher: "Dhaka Tribune",
    articleUrl: "#",
    imageSrc: "assets/news/garibook-truck.jpeg",
  },
  {
    id: "news-3",
    date: "December 04, 2024",
    title: "বাংলাদেশে প্রথমবারের 'চান্দের গাড়ি' গাড়িবুক অ্যাপে",
    snippet:
      "বান্দরবান বান্দরবানের পর্যটনের জনপ্রিয় বাহন চান্দের গাড়ি। এবার এটি যুক্ত হচ্ছে ডিজিটাল প্রযুক্তিতে...",
    publisher: "কালের কণ্ঠ",
    articleUrl: "#",
    imageSrc: "assets/news/garibook-truck.jpeg",
  },
];

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              onClick={() => handleScroll("right")}
              aria-label="Next News"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
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
          ))}
        </div>
      </div>
    </section>
  );
}
