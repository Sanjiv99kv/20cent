import { useRoute, Link } from "wouter";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const [match, params] = useRoute("/work/:id");
  
  if (!match) return <NotFound />;

  const project = projects.find(p => p.id === params.id);

  if (!project) return <NotFound />;

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-32 pb-20">
        <div className="container">
          {/* Back Link */}
          <Link href="/work">
            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </a>
          </Link>

          {/* Header */}
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-gradient-to-r from-red-500 to-blue-500" />
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">
                {project.category}
              </p>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tighter">
              {project.client}
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl leading-tight">
              {project.description}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <img 
              src={project.image} 
              alt={project.client}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="md:col-span-2 space-y-8">
              <h2 className="font-display font-bold text-3xl">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription || project.description}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Twenty Cents Studio, we approached this project by combining data-driven insights with human creativity. The result is a solution that not only meets the functional requirements but also elevates the brand experience.
              </p>
            </div>

            <div className="space-y-8 p-8 bg-secondary/30 rounded-xl border border-border h-fit">
              <div>
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Client</h3>
                <p className="text-lg font-medium">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Services</h3>
                <p className="text-lg font-medium">{project.role || project.category}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Year</h3>
                <p className="text-lg font-medium">{project.year || "2024"}</p>
              </div>
              
              <div className="pt-4">
                <Button className="w-full rounded-full bg-black text-white hover:bg-gray-800">
                  Visit Site <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
