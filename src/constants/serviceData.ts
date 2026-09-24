import type {
  ServiceCardItem,
  ShowcaseCard,
  TabContent,
} from "../interfaces/service.interface";

export const TABS_DATA: Record<string, TabContent> = {
  Rides: {
    type: "cards",
    subtitle: "Every Ride One Platform",
    cards: [
      {
        id: "intercity",
        title: "Intercity Car Rental",
        description: "Travel between cities with comfort and confidence.",
        iconSrc: "/assets/services/car-tour.png",
      },
      {
        id: "rideshare",
        title: "Ride share",
        description: "Go anywhere in the city, quickly and easily.",
        iconSrc: "/assets/services/car-driver.png",
      },
      {
        id: "airport",
        title: "Airport Rental",
        description:
          "Whether you're flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
        iconSrc: "/assets/services/airport-rental.png",
      },
      {
        id: "hourly",
        title: "Hourly Rental",
        description: "Rent a car by the hour, tailored to your needs.",
        iconSrc: "/assets/services/car-clock.png",
      },
    ],
  },
  "Garibook Business": {
    type: "banner",
    banner: {
      title: "Modern Car Rentals for Business",
      description:
        "Simplify your corporate transportation, ensure on-time team mobility, and gain control with our VMS.",
      buttonText: "Learn More",
      imageSrc: "/assets/services/busines.jpeg",
    },
  },
  "Garibook Club": {
    type: "banner",
    banner: {
      title: "Turn Your Car into Earnings with Garibook Club",
      description:
        "Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and the thrill of making money doing what they love.",
      buttonText: "Learn More",
      imageSrc: "/assets/services/garibook_club.jpg",
    },
  },
  VMS: {
    type: "banner",
    banner: {
      title: "Vehicle Management System - VMS",
      description:
        "Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your own cars. VMS is a great tool that works with Garibook Business to make sure your vehicles are used the best way possible.",
      buttonText: "Learn More",
      imageSrc: "/assets/services/dashboard.png",
    },
  },
};

export const CARDS: ServiceCardItem[] = [
  {
    id: "airport",
    title: "Airport Rentals",
    imageSrc: "assets/services/Airport Rental.webp",
    imageAlt: "Airport car rental service",
  },
  {
    id: "family",
    title: "Family Trips",
    imageSrc: "assets/services/family_trips.webp",
    imageAlt: "Family trip inside car",
  },
  {
    id: "tours",
    title: "Long Tours",
    imageSrc: "assets/services/Group Tour.webp",
    imageAlt: "Group travel on long road trip",
  },
];

export const FEATURE_CARDS: ShowcaseCard[] = [
  // Top Row (2 cols + 1 col)
  {
    id: "explore-services",
    imageSrc: "assets/services/explore.jpeg",
    imageAlt: "Explore Various Ride Services App Screen",
    colSpan: "lg:col-span-2",
  },
  {
    id: "freedoom-bidding",
    imageSrc: "assets/services/freedom.jpg",
    imageAlt: "Bidding and Fare Selection Screen",
    colSpan: "lg:col-span-1",
  },
  // Bottom Row (1 col + 1 col + 1 col)
  {
    id: "safe-travel",
    imageSrc: "assets/services/prefarred_car.jpg",
    imageAlt: "Safe Travel Map & Insurance",
    colSpan: "lg:col-span-1",
  },
  {
    id: "choose-car",
    imageSrc: "assets/services/smooth.jpg",
    imageAlt: "Preferred Car Selection List",
    colSpan: "lg:col-span-1",
  },
  {
    id: "smooth-experience",
    imageSrc:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Smooth Mobile Experience Handheld",
    colSpan: "lg:col-span-1",
  },
];
