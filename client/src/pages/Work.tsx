import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Category = "All" | "Web" | "Video" | "Branding";

interface Project {
  id: number;
  client: string;
  category: Exclude<Category, "All">;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    client: "EveryX",
    category: "Branding",
    image: "/images/service-branding.png",
    description: "Brand Strategy & Logo Design"
  },
  {
    id: 2,
    client: "Amazon",
    category: "Web",
    image: "/images/service-web.png",
    description: "Campaign Microsite Development"
  },
  {
    id: 3,
    client: "Disney Japan",
    category: "Video",
    image: "/images/service-video.png",
    description: "Promotional Video Production"
  },
  {
    id: 4,
    client: "Shake Shack",
    category: "Web",
    image: "/images/service-web.png",
    description: "Digital Menu Experience"
  },
  {
    id: 5,
    client: "Mitsui Fudosan",
    category: "Branding",
    image: "/images/service-branding.png",
    description: "Corporate Identity Refresh"
  },
  {
    id: 6,
    client: "TATRAS",
    category: "Video",
    image: "/images/service-video.png",
    description: "Fashion Film Production"
  },
  {
    id: 7,
    client: "Yoshimoto",
    category: "Web",
    image: "/images/service-web.png",
    description: "Talent Portal Development"
  },
  {
    id: 8,
    client: "Charles & Keith",
    category: "Video",
    image: "/images/service-video.png",
    description: "Social Media Campaign"
  },
  {
    id: 9,
    client: "Money Forward",
    category: "Branding",
    image: "/images/service-branding.png",
    description: "Visual Identity System"
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <div className="container py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h1 className="font-display font-bold text-6xl md:text-8xl mb-6 tracking-tighter">
              Selected Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              A collection of projects where we've applied our AI × Human philosophy to deliver exceptional results.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex gap-2 mt-8 md:mt-0 overflow-x-auto pb-2 md:pb-0">
            {(["All", "Web", "Video", "Branding"] as Category[]).map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-6",
                  activeCategory === cat ? "bg-black text-white" : "hover:bg-secondary"
                )}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.client}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-bold text-white/60 uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display font-bold text-3xl text-white mb-2">
                    {project.client}
                  </h3>
                  <p className="text-white/80 mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-white font-bold group/btn">
                    View Case Study <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
