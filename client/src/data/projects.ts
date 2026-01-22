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
    id: "entertainment",
    client: "Entertainment",
    category: "Web",
    image: "/images/projects_clean/amazon.png",
    description: "Video Production & SNS Management",
    fullDescription: "We handled all aspects of planning, filming, and editing for the official YouTube channel of Avex Chairman Katsuhito Matsuura.We continuously executed large-scale, high-impact projects one after another.",
    size: "large",
    year: "2024",
    role: "Development, UI/UX Design"
  },
  {
    id: "entertainment-2",
    client: "Entertainment",
    category: "Video",
    image: "/images/projects_clean/disney.png",
    description: "Video Production & SNS Management",
    fullDescription: "The official YouTube channel of Momoko Aoi and Yuta Misaki. We developed content tailored to viewer demand, including talk sessions, exposés, undercover features, and viral-style projects.",
    size: "large",
    year: "2023",
    role: "Video Production, Motion Graphics"
  },
  {
    id: "clinic",
    client: "Clinic",
    category: "Web",
    image: "/images/projects_clean/shake-shack.png",
    description: "Video Production & SNS Management",
    fullDescription: "We supported the launch and operation of 10 doctor-led YouTube channels for TCB (Tokyo Central Cosmetic Surgery).Afterward, we provided consulting support to transition operations in-house.",
    year: "2023",
    role: "UI Design, Frontend Development"
  },
  {
    id: "live-events",
    client: "Live Events",
    category: "Branding",
    image: "/images/projects_clean/mitsui.png",
    description: "FPV Drone",
    fullDescription: "We served as the official live camerawork team and launched the official YouTube channel for Tsuyoshi Nagabuchi.Beyond acting as the official camera crew for the 2024 arena tour, we handled YouTube operations from scratch, surpassing 100,000 subscribers within one month.",
    year: "2024",
    role: "Brand Strategy, Visual Identity"
  },
  {
    id: "advertising",
    client: "Advertising",
    category: "Web",
    image: "/images/projects_clean/vector.png",
    description: "SNS Short-Form Advertising",
    fullDescription: "We created a visually striking campaign by symbolically placing Pride Rock and depicting Timon & Pumbaa appearing in Tokyo, delivering a fresh, highly shareable experience.The campaign achieved over 20 million total impressions on SNS through Disney's official accounts.",
    year: "2023",
    role: "Web Design, CMS Development"
  },
  {
    id: "advertising-2",
    client: "Advertising",
    category: "Video",
    image: "/images/projects_clean/tatras.png",
    description: "SNS Short-Form Advertising",
    fullDescription: "We translated the sense of security—\"fast, affordable, and all-in-one\"—that comes with Amazon Prime into compelling video storytelling.The ads are regularly distributed on Instagram and TikTok, driving consistent reach and engagement.",
    year: "2023",
    role: "Direction, Cinematography, Editing"
  },
  {
    id: "development",
    client: "Development",
    category: "Web",
    image: "/images/projects_clean/yoshimoto.png",
    description: "System Development",
    fullDescription: "We were responsible for developing the video streaming platform \"Finap\" for Rheos Capital Academy. The project delivered a stable viewing environment along with an intuitive, user-friendly UI/UX, ensuring a smooth and reliable learning experience.",
    year: "2022",
    role: "Full Stack Development"
  },
  {
    id: "large-scale-product",
    client: "Large-Scale Product",
    category: "Video",
    image: "/images/projects_clean/charles-keith.png",
    description: "Blockchain Development",
    fullDescription: "We were responsible for the design and system development of the prediction marketplace EveryX. We built a secure blockchain-based trading environment and designed crypto-asset incentive mechanisms.At launch, the platform surpassed 30,000 users.",
    year: "2024",
    role: "Social Video Production"
  },
  {
    id: "large-scale-product-2",
    client: "Large-Scale Product",
    category: "Branding",
    image: "/images/projects_clean/money-forward.png",
    description: "Blockchain Development",
    fullDescription: "We were responsible for the UI design of the investment platform Profit.com.We built a simulation trading environment covering stocks, FX, and crypto assets, and implemented AI-powered analysis features.With a beginner-friendly UI, the platform delivers high usability and accessibility for new investors.",
    year: "2023",
    role: "Art Direction, Graphic Design"
  },
  {
    id: "logo-examples",
    client: "Logo Examples",
    category: "Branding",
    image: "/images/projects_clean/everyx.png",
    description: "Brand Guideline Development",
    fullDescription: "From logo design based on brand strategy to ensuring originality and distinctiveness with trademark registration in mind, we provided end-to-end support, including legal risk checks.",
    year: "2024",
    role: "Brand Strategy, Guidelines"
  },
  {
    id: "case-studies-2",
    client: "Case Studies (2)",
    category: "Web",
    image: "/images/projects_clean/memolead.png",
    description: "",
    fullDescription: "While maintaining a high level of expertise in both development and video production, we provide flexible delivery timelines aligned with each client's pace.We also offer scalable budget proposals tailored to companies of all sizes and stages.",
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
