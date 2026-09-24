import type { FeatureItem } from "../interfaces/freedomJourney.interface";

export const FEATURES: FeatureItem[] = [
  {
    id: "car",
    title: "Choose the Car",
    description: "Pick what suits your comfort.",
    iconSrc: "/assets/services/car.png",
    bgColor: "bg-blue-primary",
  },
  {
    id: "driver",
    title: "Choose the Driver",
    description: "Based on ratings and reviews.",
    iconSrc: "/assets/services/steering-wheel.png",
    bgColor: "bg-btn-download",
  },
  {
    id: "fare",
    title: "Choose the Fare",
    description: "Select the bid that fits your budget.",
    iconSrc: "/assets/services/cash.png",
    bgColor: "bg-emerald-500",
  },
];