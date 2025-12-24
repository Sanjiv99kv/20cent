import Layout from "@/components/Layout";
import { Code, Video, PenTool, MessageSquare, FileText, MonitorPlay, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "We build high-performance websites and web applications. From corporate sites to complex platforms, we ensure scalability, security, and a premium user experience.",
      features: ["Corporate Websites", "Web Applications", "E-commerce", "CMS Development"],
      image: "/images/services/web-3d.png"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Production",
      description: "Our video production team creates compelling visual narratives. We handle everything from storyboarding to post-production, delivering broadcast-quality content.",
      features: ["Commercials", "Brand Movies", "Motion Graphics", "Social Media Content"],
      image: "/images/services/video-3d.png"
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Brand Guidelines",
      description: "We define your brand's visual identity. Our strategic approach ensures your brand is distinctive, memorable, and legally protected through trademark support.",
      features: ["Logo Design", "Visual Identity Systems", "Trademark Support", "Brand Strategy"],
      image: "/images/services/branding-3d.png"
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
      <section className="pt-32 pb-20 bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.4),rgba(0,0,0,1))]" />
        <div className="container relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-6xl md:text-8xl mb-8 tracking-tighter"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            We offer a comprehensive suite of creative services, optimized by our unique "AI × Human" workflow to deliver premium quality with efficiency.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative group perspective-1000">
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 overflow-hidden rounded-2xl shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
                {/* Decorative Elements */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-24 h-24 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20 blur-2xl -z-10`} 
                />
                <div className={`absolute -top-6 ${index % 2 === 0 ? '-left-6' : '-right-6'} w-32 h-32 border border-gray-200 rounded-2xl -z-10`} />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase"
                  >
                    0{index + 1}
                  </motion.span>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="h-px w-12 bg-gray-200 origin-left" 
                  />
                </div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight"
                >
                  {service.title}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {service.description}
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + (idx * 0.1) }}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover/item:bg-secondary/80 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                      </div>
                      <span className="text-foreground/80 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto border-4 border-background relative group">
                  {step.step}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary border-2 border-background group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-center mb-4">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
