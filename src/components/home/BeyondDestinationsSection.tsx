import SectionHeading from "../ui/SectionHeading";

interface BlogPost {
  id: string;
  date: string;
  title: string;
  snippet: string;
  imageSrc: string;
  blogUrl: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    date: "September 15, 2026",
    title: "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা",
    snippet: "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা...",
    imageSrc:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    blogUrl: "#",
  },
  {
    id: "blog-2",
    date: "September 20, 2026",
    title: "সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
    snippet: "সিলেটের দর্শনীয় স্থান...",
    imageSrc:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop",
    blogUrl: "#",
  },
  {
    id: "blog-3",
    date: "September 20, 2026",
    title: "নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
    snippet: "নওগাঁর দর্শনীয় স্থান সমূহ...",
    imageSrc:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
    blogUrl: "#",
  },
];

export default function BeyondDestinationsSection() {
  return (
    <section className="beyond-destinations-section w-full bg-white py-[70px]">
      <div className="layout-container flex flex-col gap-16">
        
        {/* ================= 1. BLOGS HEADER & GRID ================= */}
        <div className="flex flex-col gap-8">
          {/* Section Header with "Show All Blogs" link */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-2xl">
              <SectionHeading title="Beyond Destinations" as="h2" />
              <p className="text-sm sm:text-base text-gray-600">
                Discover travel hacks, guides, and inspirations for your next intercity trip with Garibook.
              </p>
            </div>

            <a
              href="#"
              className="text-sm font-bold text-blue-primary hover:underline inline-flex items-center gap-1 shrink-0 self-start sm:self-auto"
            >
              <span>Show All Blogs</span>
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

          {/* 3 Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <a
                key={post.id}
                href={post.blogUrl}
                className="blog-card group flex flex-col gap-3 cursor-pointer"
              >
                {/* Image Container */}
                <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-gray-100 shadow-xs">
                  <img
                    src={post.imageSrc}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Date */}
                <p className="text-xs text-gray-400 font-medium pt-1">
                  {post.date}
                </p>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-blue-primary transition-colors">
                  {post.title}
                </h3>

                {/* Snippet */}
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                  {post.snippet}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* ================= 2. DOWNLOAD GARIBOOK MOBILE APP BANNER ================= */}
        <div className="app-download-banner w-full bg-blue-primary rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl text-white">
          {/* Left Text & CTA Button */}
          <div className="flex flex-col items-start gap-6 max-w-xl z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Download <br />
              Garibook Mobile App
            </h2>

            <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">
              Download our Customer, Smart Driver and Enterprise App
            </p>

            <a
              href="#"
              className="bg-btn-download hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-xl inline-flex items-center gap-3 transition-all cursor-pointer shadow-md text-base"
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

          {/* Right Phone Hand Preview Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-md h-[280px] sm:h-[360px] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop"
                alt="Garibook Mobile App Preview"
                className="max-h-full object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}