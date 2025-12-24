import Layout from "@/components/Layout";
import { Code, Video, PenTool, MessageSquare, FileText, MonitorPlay, Rocket } from "lucide-react";
import FAQ from "@/components/FAQ";
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

      {/* Proposal Flow */}
      <section className="pt-32 pb-20 bg-secondary/30 overflow-hidden">
        <div className="container relative">
          <div className="text-center mb-24">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Proposal Flow</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined process designed to move from concept to execution with precision and clarity.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line Background (Desktop) */}
            <div className="absolute top-[140px] left-0 w-full h-2 bg-border/30 rounded-full hidden md:block overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent w-1/2 animate-marquee" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Inquiry",
                  desc: "Contact us via form or email to discuss your vision.",
                  image: "/images/flow/inquiry-3d.png"
                },
                {
                  step: "02",
                  title: "Quotation",
                  desc: "We analyze requirements and provide a detailed estimate.",
                  image: "/images/flow/quote-3d.png"
                },
                {
                  step: "03",
                  title: "Demo Production",
                  desc: "We create a high-fidelity prototype to visualize the outcome.",
                  image: "/images/flow/demo-3d.png"
                },
                {
                  step: "04",
                  title: "Service Start",
                  desc: "Official kickoff with a dedicated team and roadmap.",
                  image: "/images/flow/start-3d.png"
                }
              ].map((item, i) => (
                <div key={i} className="group relative flex flex-col items-center">
                  
                  {/* 3D Icon Container - Perfectly Aligned */}
                  <div className="relative w-40 h-40 mb-12 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    {/* Connector Dot on Line */}
                    <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-background border-4 border-accent rounded-full z-0 hidden md:block shadow-[0_0_15px_rgba(0,0,0,0.1)] group-hover:scale-150 transition-transform duration-300" />

                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                    />
                  </div>

                  {/* Content Card - Symmetrical Height */}
                  <div className="w-full bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex flex-col items-center text-center h-[280px] relative overflow-hidden group-hover:-translate-y-1">
                    
                    {/* Step Number Watermark */}
                    <div className="absolute -top-4 -right-4 text-8xl font-bold text-muted-foreground/5 select-none group-hover:text-accent/5 transition-colors duration-500 font-display">
                      {item.step}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300 relative z-10">
                      {item.title}
                    </h3>
                    
                    <div className="w-12 h-1 bg-accent/20 rounded-full mb-6 group-hover:w-24 group-hover:bg-accent transition-all duration-500" />

                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      {item.desc}
                    </p>
                  </div>

                  {/* Mobile Connector Line */}
                  {i !== 3 && (
                    <div className="md:hidden w-1 h-12 bg-gradient-to-b from-border to-transparent my-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </Layout>
  );
}
