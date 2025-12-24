import Layout from "@/components/Layout";
import { Code, Video, PenTool, MessageSquare, FileText, MonitorPlay, Rocket } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "We build high-performance websites and web applications. From corporate sites to complex platforms, we ensure scalability, security, and a premium user experience.",
      features: ["Corporate Websites", "Web Applications", "E-commerce", "CMS Development"]
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Production",
      description: "Our video production team creates compelling visual narratives. We handle everything from storyboarding to post-production, delivering broadcast-quality content.",
      features: ["Commercials", "Brand Movies", "Motion Graphics", "Social Media Content"]
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Brand Guidelines",
      description: "We define your brand's visual identity. Our strategic approach ensures your brand is distinctive, memorable, and legally protected through trademark support.",
      features: ["Logo Design", "Visual Identity Systems", "Trademark Support", "Brand Strategy"]
    }
  ];

  const process = [
    {
      step: "01",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Inquiry",
      description: "Contact us via our form, email, or phone. We'll discuss your initial requirements and schedule a consultation."
    },
    {
      step: "02",
      icon: <FileText className="w-8 h-8" />,
      title: "Quotation",
      description: "After detailed hearings, we propose the optimal service plan and budget tailored to your specific needs."
    },
    {
      step: "03",
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "Demo Production",
      description: "We create a simple demo, storyboard, or prototype to visualize the direction before full production begins."
    },
    {
      step: "04",
      icon: <Rocket className="w-8 h-8" />,
      title: "Service Start",
      description: "Our expert team takes over the project, delivering high-quality results while maintaining flexible communication."
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container">
          <h1 className="font-display font-bold text-6xl md:text-8xl mb-8 tracking-tighter">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            We offer a comprehensive suite of creative services, optimized by our unique "AI × Human" workflow to deliver premium quality with efficiency.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-background">
        <div className="container space-y-32">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h2 className="font-display font-bold text-4xl md:text-5xl">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-4 pt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 font-medium">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                <div className="relative aspect-video bg-secondary rounded-2xl overflow-hidden border border-border">
                  {/* Placeholder for service detail image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                    <span className="font-display font-bold text-2xl opacity-20">{service.title} Image</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-32 bg-secondary/30 border-t border-border">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Proposal Flow</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A streamlined process designed to get your project moving quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-border z-0" />

            {process.map((step, index) => (
              <div key={index} className="relative z-10 bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto border-4 border-background relative">
                  {step.step}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary border-2 border-background">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-center mb-4">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
