export type Category = "All" | "Web" | "Video" | "Branding";

export interface Project {
  id: string;
  client: string;
  category: Exclude<Category, "All">;
  image: string;
  description: string;
  fullDescription?: string;
  size?: "large" | "normal";
  year?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: "amazon",
    client: "Amazon",
    category: "Web",
    image: "/images/projects_clean/amazon.png",
    description: "Campaign Microsite Development",
    fullDescription: "Developed a high-traffic campaign microsite for Amazon's seasonal promotion. Focused on performance optimization and seamless user experience across devices.",
    size: "large",
    year: "2024",
    role: "Development, UI/UX Design"
  },
  {
    id: "disney",
    client: "Disney Japan",
    category: "Video",
    image: "/images/projects_clean/disney.png",
    description: "Promotional Video Production",
    fullDescription: "Produced a series of promotional videos for Disney Japan's latest attraction launch. Handled end-to-end production from storyboarding to post-production effects.",
    size: "large",
    year: "2023",
    role: "Video Production, Motion Graphics"
  },
  {
    id: "shake-shack",
    client: "Shake Shack",
    category: "Web",
    image: "/images/projects_clean/shake-shack.png",
    description: "Digital Menu Experience",
    fullDescription: "Designed and developed an interactive digital menu system for in-store kiosks, improving ordering efficiency and visual appeal.",
    year: "2023",
    role: "UI Design, Frontend Development"
  },
  {
    id: "mitsui",
    client: "Mitsui Fudosan",
    category: "Branding",
    image: "/images/projects_clean/mitsui.png",
    description: "Corporate Identity Refresh",
    fullDescription: "Revitalized the corporate identity for a major real estate development project, creating a modern visual system that reflects urban innovation.",
    year: "2024",
    role: "Brand Strategy, Visual Identity"
  },
  {
    id: "vector",
    client: "Vector",
    category: "Web",
    image: "/images/projects_clean/vector.png",
    description: "Corporate Website Renewal",
    fullDescription: "Complete renewal of the corporate website for Japan's leading PR firm. Implemented a modern CMS and dynamic content loading for news and releases.",
    year: "2023",
    role: "Web Design, CMS Development"
  },
  {
    id: "tatras",
    client: "TATRAS",
    category: "Video",
    image: "/images/projects_clean/tatras.png",
    description: "Fashion Film Production",
    fullDescription: "Created a cinematic fashion film for the AW23 collection. Focused on high-end cinematography and color grading to match the brand's luxury aesthetic.",
    year: "2023",
    role: "Direction, Cinematography, Editing"
  },
  {
    id: "yoshimoto",
    client: "Yoshimoto",
    category: "Web",
    image: "/images/projects_clean/yoshimoto.png",
    description: "Talent Portal Development",
    fullDescription: "Built a comprehensive talent portal showcasing thousands of artists. Features advanced search functionality and high-performance media loading.",
    year: "2022",
    role: "Full Stack Development"
  },
  {
    id: "charles-keith",
    client: "Charles & Keith",
    category: "Video",
    image: "/images/projects_clean/charles-keith.png",
    description: "Social Media Campaign",
    fullDescription: "Produced a series of short-form video content for social media platforms, driving engagement and brand awareness for the new season launch.",
    year: "2024",
    role: "Social Video Production"
  },
  {
    id: "money-forward",
    client: "Money Forward",
    category: "Branding",
    image: "/images/projects_clean/money-forward.png",
    description: "Visual Identity System",
    fullDescription: "Developed a comprehensive visual identity system for a new B2B service line, ensuring consistency across digital and print touchpoints.",
    year: "2023",
    role: "Art Direction, Graphic Design"
  },
  {
    id: "everyx",
    client: "EveryX",
    category: "Branding",
    image: "/images/projects_clean/everyx.png",
    description: "Brand Guidelines",
    fullDescription: "Created detailed brand guidelines covering logo usage, typography, color palettes, and tone of voice to ensure brand consistency globally.",
    year: "2024",
    role: "Brand Strategy, Guidelines"
  },
  {
    id: "memolead",
    client: "Memolead",
    category: "Web",
    image: "/images/projects_clean/memolead.png",
    description: "Web Application UI/UX",
    fullDescription: "Designed the user interface and experience for a productivity web application, focusing on intuitive workflows and clean aesthetics.",
    year: "2023",
    role: "UI/UX Design"
  },
  {
    id: "yellow-hat",
    client: "Yellow Hat",
    category: "Video",
    image: "/images/projects_clean/yellow-hat.png",
    description: "TV Commercial Production",
    fullDescription: "Produced a nationwide TV commercial campaign. Managed the entire process from creative planning to final broadcast delivery.",
    year: "2022",
    role: "TVC Production"
  }
];
