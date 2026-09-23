export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const FOOTER_NAV_COLUMNS: FooterColumn[] = [
  {
    title: "garibook",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Customer Reviews", href: "/reviews" },
      { label: "Career", href: "/career" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Garibook Map", href: "/map" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Intercity Rental", href: "/services/intercity" },
      { label: "Airport Pick and Drop", href: "/services/airport" },
      { label: "Hourly Rental", href: "/services/hourly" },
      { label: "Vehicle Management System (VMS)", href: "/services/vms" },
    ],
  },
  {
    title: "Become Our Partner",
    links: [
      { label: "Become a Smart Driver", href: "/partner/driver" },
      { label: "Become a member of Garibook Club", href: "/partner/club" },
      { label: "Garibook Business for Corporate Travel", href: "/partner/corporate" },
    ],
  },
];

export const FOOTER_CONTACTS = {
  email: "support@garibook.com",
  address: "Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road-144, Gulshan, Dhaka-1212",
  phone: "+88 09 678 11 22 33",
};

export const LEGAL_LINKS: FooterLink[] = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];