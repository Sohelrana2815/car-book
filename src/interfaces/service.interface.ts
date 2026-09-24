export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  iconSrc: string; // Image path placeholder instead of emoji
}

export interface BannerContent {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl?: string;
  imageSrc: string;
}

export type TabContent =
  | { type: "cards"; subtitle: string; cards: ServiceCard[] }
  | { type: "banner"; banner: BannerContent };

  export interface ServiceCardItem {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}


export interface ShowcaseCard {
  id: string;
  imageSrc: string;
  imageAlt: string;
  colSpan?: string;
}