# Garibook Homepage Recreation

A responsive, production-quality recreation of the [Garibook](https://garibook.com/?utm_source=gemini) homepage built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **GSAP**. Developed as a technical assessment for the **Endow Tech Frontend Intern** role.

---

## 🔗 Project Links

* **Live Demo:** [https://garibook-clone.vercel.app](https://www.google.com/search?q=https://garibook-clone.vercel.app&utm_source=gemini) *(Replace with your live link)*

* **2-Minute Video Walkthrough:** [Watch Video Demo](https://www.google.com/search?q=https://loom.com/your-video-link&utm_source=gemini) *(Replace with your Loom/YouTube link)*


---

## 🚀 Key Features

* **Visual Accuracy & Precision:** Closely matches Garibook's spacing, typography, layout hierarchy, and brand colors `#F1F6FF` and `#0057FF`[cite: 23, 25, 31].
* **Responsive Layout:** Optimized for Mobile, Tablet, and Desktop screen sizes.


* **GSAP Animations:**
* **Hero Typewriter Effect:** Character-by-character headline typing loop powered by GSAP `TextPlugin`[cite: 30].
* **Hero Right Entrance:** Smooth staggered bottom-to-top entrance animation for description text and CTA button on page load[cite: 30].
* **Scroll & Carousel Controls:** Interactive testimonial slider and video overlays[cite: 23].


* **Modular Code Structure:** Clean separation of UI components, section layouts, and data configs.



---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **React 18** | UI Library

 |
| **TypeScript** | Type Safety & Developer Ergonomics |
| **Vite** | Lightning-fast Build Tool & Dev Server |
| **Tailwind CSS** | Utility-first CSS Framework |
| **GSAP & TextPlugin** | Smooth Web Animations[cite: 30, 31] |

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── ui/                    # Reusable atomic elements (Buttons, Headings)
│   ├── home/                  # Modular Homepage Sections
│   │   ├── HeroBanner.tsx               # Hero Section + GSAP Animations
│   │   ├── BookingWidget.tsx            # Ride Search Form
│   │   ├── JourneySection.tsx           # Blue Banner
│   │   ├── ServicesSection.tsx          # Card Grid
│   │   ├── FreedomJourneySection.tsx    # Black Section
│   │   ├── PassengerTestimonialsSection.tsx # Video Testimonial Carousel
│   │   └── BeyondDestinationsSection.tsx    # Blog Cards + App Download Banner
│   └── footer/                # Sub-divided Footer Architecture
│       ├── footerData.ts               # Link & Config Data
│       ├── FooterNavColumns.tsx        # Link Columns & Contact Info
│       ├── FooterAppAndPartners.tsx    # App CTA & Partner Logos
│       ├── FooterBottomBar.tsx         # Legal & Trade License
│       ├── FooterPaymentMethods.tsx    # Gateway Strip
│       └── Footer.tsx                  # Root Footer Component
├── pages/
│   └── Home.tsx               # Main Homepage Composition
├── App.tsx                    # Layout Wrapper
└── main.tsx                   # Application Entrypoint

```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0 or higher) and **npm** installed on your system.

### Installation

1. **Clone the Repository:**
```bash
git clone https://github.com/your-username/garibook-homepage.git
cd garibook-homepage

```


2. **Install Dependencies:**
```bash
npm install

```


3. **Start the Local Development Server:**
```bash
npm run dev

```


Open `http://localhost:5173` in your browser.

---

## 📦 Build & Deployment

To generate a production-ready build:

```bash
npm run build

```

To preview the production build locally:

```bash
npm run preview

```

---

## 🎥 Video Demonstration Points

As requested by Endow Tech, the 2-minute video presentation covers:

1. **Live Homepage Demo:** Showing layout responsiveness and interaction states.


2. **Component Organization:** Explaining the modular React architecture.


3. **GSAP Integration:** Demonstrating `TextPlugin` for the typewriter loop and GSAP timelines for entrance transitions.
4. **Technical Decisions:** Discussing React state handling for controls and dynamic viewport layout balance.