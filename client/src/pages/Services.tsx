import Layout from "@/components/Layout";
import { Code, Video, PenTool, Bot, MessageSquare, FileText, MonitorPlay, Rocket } from "lucide-react";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: t.services.web.title,
      description: t.services.web.longDesc,
      features: t.services.web.features,
      image: "/images/services/web-3d.png"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: t.services.video.title,
      description: t.services.video.longDesc,
      features: t.services.video.features,
      image: "/images/services/video-3d.png"
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: t.services.branding.title,
      description: t.services.branding.longDesc,
      features: t.services.branding.features,
      image: "/images/services/branding-3d.png"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: t.services.ai.title,
      description: t.services.ai.longDesc,
      features: t.services.ai.features,
      image: "/images/services/ai-3d.png"
    }
  ];

  const process = [
    {
      step: "01",
      icon: <MessageSquare className="w-8 h-8" />,
      title: t.services.process.steps[0].title,
      description: t.services.process.steps[0].desc,
      details: t.services.process.steps[0].details,
      image: "/images/flow/inquiry-3d.png"
    },
    {
      step: "02",
      icon: <FileText className="w-8 h-8" />,
      title: t.services.process.steps[1].title,
      description: t.services.process.steps[1].desc,
      details: t.services.process.steps[1].details,
      image: "/images/flow/quote-3d.png"
    },
    {
      step: "03",
      icon: <MonitorPlay className="w-8 h-8" />,
      title: t.services.process.steps[2].title,
      description: t.services.process.steps[2].desc,
      details: t.services.process.steps[2].details,
      image: "/images/flow/demo-3d.png"
    },
    {
      step: "04",
      icon: <Rocket className="w-8 h-8" />,
      title: t.services.process.steps[3].title,
      description: t.services.process.steps[3].desc,
      details: t.services.process.steps[3].details,
      image: "/images/flow/start-3d.png"
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
            {t.services.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            {t.services.hero.description}
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
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase mb-4 block"
            >
              {t.services.process.title}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl mb-6"
            >
              {t.services.process.subtitle}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              {t.services.process.description}
            </motion.p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Connecting Line Background (Desktop) */}
            <div className="absolute top-[120px] left-0 w-full h-1 bg-gradient-to-r from-transparent via-border to-transparent hidden md:block overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-1/3 animate-marquee opacity-50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {process.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="group relative flex flex-col items-center"
                >
                  
                  {/* 3D Icon Container */}
                  <div className="relative w-32 h-32 mb-10 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Connector Dot on Line */}
                    <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-background border-[3px] border-muted-foreground/30 rounded-full z-0 hidden md:flex items-center justify-center shadow-lg group-hover:border-blue-500 transition-colors duration-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                    />
                  </div>

                  {/* Content Card */}
                  <div className="w-full bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col h-[380px] relative overflow-hidden group-hover:-translate-y-1">
                    
                    {/* Step Number */}
                    <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">
                      Step {item.step}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-2 border-t border-border/50 pt-4">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground/70">
                          <div className="w-1 h-1 rounded-full bg-blue-500" />
                          {detail}
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom Gradient Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>

                  {/* Mobile Connector Line */}
                  {i !== 3 && (
                    <div className="md:hidden w-0.5 h-8 bg-gradient-to-b from-border to-transparent my-2" />
                  )}
                </motion.div>
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
