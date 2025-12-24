import Layout from "@/components/Layout";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  const clients = [
    "Money Forward", "Mitsui Fudosan", "Vector", "Memolead", "Yellow Hat", "Ota Pro",
    "TATRAS", "Walt Disney Company", "Yoshimoto", "TCB", "Amazon", "Ultra Japan",
    "Shake Shack", "CASETiFY", "Nobel", "AMATERAS", "Sol Octagon Tokyo", "Charles & Keith"
  ];

  return (
    <Layout>
      <div className="container py-32">
        <div className="mb-20">
          <h1 className="font-display font-bold text-6xl md:text-8xl mb-6 tracking-tighter">
            Selected Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl">
            A collection of projects where we've applied our AI × Human philosophy to deliver exceptional results.
          </p>
        </div>

        {/* Featured Case Study: EveryX */}
        <section className="mb-32">
          <h2 className="font-display font-bold text-3xl mb-8 flex items-center gap-4">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest border border-border px-3 py-1 rounded-full">Case Study</span>
            EveryX
          </h2>
          
          <div className="group relative rounded-2xl overflow-hidden bg-black border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden">
                <img 
                  src="/images/everyx-branding.webp" 
                  alt="EveryX Brand Guidelines"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6 bg-secondary/5">
                <div>
                  <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 uppercase tracking-widest mb-2">
                    Branding
                  </p>
                  <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                    Brand Guidelines
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    From logo design based on brand strategy to uniqueness and distinctiveness verification assuming trademark registration, and legal risk checks, we handle everything consistently.
                  </p>
                </div>
                
                <div className="pt-4">
                  <button className="flex items-center gap-2 text-white font-bold group/btn hover:text-gray-300 transition-colors">
                    View Project Details <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client List Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl">Client List</h2>
            <p className="text-muted-foreground max-w-md text-right mt-4 md:mt-0">
              We maintain high expertise in both development and video while realizing flexible delivery timelines matching client speed.
            </p>
          </div>

          {/* Client Logos Image from PDF */}
          <div className="w-full bg-white rounded-2xl p-8 md:p-16 border border-border mb-12">
            <img 
              src="/images/client-logos.webp" 
              alt="Client Logos: Money Forward, Mitsui Fudosan, Vector, Yellow Hat, TATRAS, Disney, Amazon, Shake Shack, etc."
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </div>

          {/* Text List for Accessibility/SEO */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center text-muted-foreground text-sm font-medium uppercase tracking-wider">
            {clients.map((client, i) => (
              <span key={i} className="hover:text-foreground transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
