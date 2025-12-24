import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { projects, Category } from "@/data/projects";

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
                  "rounded-full px-6 transition-all duration-300",
                  activeCategory === cat 
                    ? "bg-black text-white scale-105 shadow-lg" 
                    : "hover:bg-secondary hover:scale-105"
                )}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
          {filteredProjects.map((project, index) => (
            <Link key={project.id} href={`/work/${project.id}`}>
              <a
                className={cn(
                  "group relative block h-full overflow-hidden rounded-2xl bg-secondary cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both shadow-sm hover:shadow-2xl transition-all",
                  project.size === "large" && activeCategory === "All" ? "md:col-span-2 lg:col-span-2" : ""
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={project.image} 
                  alt={project.client}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 object-center"
                />
                
                {/* Luxury Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-10">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-[1px] bg-gradient-to-r from-red-500 to-blue-500" />
                      <p className="text-xs font-bold text-white/80 uppercase tracking-[0.2em]">
                        {project.category}
                      </p>
                    </div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
                      {project.client}
                    </h3>
                    <p className="text-white/70 mb-6 font-light text-lg max-w-md">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-white font-bold group/btn">
                      <span className="border-b border-white/30 pb-1 group-hover/btn:border-white transition-colors">View Case Study</span>
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
