import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ArrowRight, Cpu, Heart, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
            <img
                src="/images/about-hero-3d.png"
                alt="Digital Frontier"
                className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
        </div>
        
        <div className="container relative z-10 text-center">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="font-display font-bold text-6xl md:text-9xl tracking-tighter mb-8"
            >
                {t.aboutPage.hero.title}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
                {t.aboutPage.hero.subtitle}
            </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Creative Engine</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        In a world flooded with automated content, true value lies in the human touch. However, speed and scalability are non-negotiable.
                    </p>
                    <p>
                        Our "Creative Engine" methodology assigns repetitive, data-driven tasks to AI, freeing our artists and strategists to focus on emotional resonance, brand storytelling, and breakthrough innovation.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-12">
                    <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                        <Cpu className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="font-bold text-xl mb-2">AI Efficiency</h3>
                        <p className="text-sm text-muted-foreground">Data analysis, code generation, asset scaling.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                        <Heart className="w-10 h-10 text-pink-500 mb-4" />
                        <h3 className="font-bold text-xl mb-2">Human Emotion</h3>
                        <p className="text-sm text-muted-foreground">Strategy, empathy, nuance, and art direction.</p>
                    </div>
                </div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 animate-pulse-slow" />
                <img
                    src="/images/philosophy-structure.png"
                    alt="Philosophy Structure"
                    className="relative z-10 w-full h-auto drop-shadow-2xl animate-float"
                />
            </motion.div>
        </div>
      </section>

      {/* Process / Values Section (Staggered) */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="text-center mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-5xl md:text-7xl mb-6"
            >
              {t.aboutPage.values.title}
            </motion.h2>
          </div>

          <div className="space-y-40">
            {/* Value 1: Radical Efficiency */}
            <div className="flex flex-col md:flex-row items-center gap-20 group">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 relative"
              >
                 <div className="aspect-[4/3] relative z-10">
                    <motion.img 
                      src="/images/value-efficiency.png" 
                      alt="Radical Efficiency 3D Art"
                      className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                 </div>
                 {/* Decorative Elements */}
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/30">
                        <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Speed & Precision</span>
                </div>
                <h3 className="font-display font-bold text-5xl mb-8 leading-tight">{t.aboutPage.values.efficiency.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  {t.aboutPage.values.efficiency.desc}
                </p>
                <ul className="space-y-4">
                    {['Automated Asset Generation', 'Rapid Prototyping', 'Scalable Code Architecture'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {item}
                        </li>
                    ))}
                </ul>
              </motion.div>
            </div>

            {/* Value 2: Global Perspective (Reversed) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-20 group">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 relative"
              >
                 <div className="aspect-[4/3] relative z-10">
                    <motion.img 
                      src="/images/value-global.png" 
                      alt="Global Perspective 3D Art"
                      className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(168,85,247,0.3)]"
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-l from-purple-500/20 to-transparent blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/30">
                        <Globe className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">Borderless Thinking</span>
                </div>
                <h3 className="font-display font-bold text-5xl mb-8 leading-tight">{t.aboutPage.values.global.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  {t.aboutPage.values.global.desc}
                </p>
                <ul className="space-y-4">
                    {['Cross-Cultural Design', 'Multi-Language Support', 'International Market Strategy'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            {item}
                        </li>
                    ))}
                </ul>
              </motion.div>
            </div>

            {/* Value 3: Continuous Innovation */}
            <div className="flex flex-col md:flex-row items-center gap-20 group">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 relative"
              >
                 <div className="aspect-[4/3] relative z-10">
                    <motion.img 
                      src="/images/value-innovation.png" 
                      alt="Continuous Innovation 3D Art"
                      className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(236,72,153,0.3)]"
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-transparent blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-pink-500/10 border border-pink-500/30">
                        <Cpu className="w-6 h-6 text-pink-400" />
                    </div>
                    <span className="text-pink-400 font-bold tracking-widest uppercase text-sm">Future Ready</span>
                </div>
                <h3 className="font-display font-bold text-5xl mb-8 leading-tight">{t.aboutPage.values.innovation.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  {t.aboutPage.values.innovation.desc}
                </p>
                <ul className="space-y-4">
                    {['R&D Labs', 'Next-Gen Tech Stack', 'Creative Experimentation'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                            {item}
                        </li>
                    ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile (Redesigned) */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Stylized Map Background */}
        <div className="absolute inset-0 z-0 opacity-40">
            <img 
                src="/images/map-nakameguro.png" 
                alt="Nakameguro Map" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-12 md:p-16 shadow-2xl relative overflow-hidden group"
            >
                {/* Glassmorphism Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left Column: Identity */}
                    <div className="w-full md:w-1/2 space-y-10">
                        <div>
                            <h2 className="font-display font-bold text-4xl md:text-5xl mb-2 text-white">{t.aboutPage.profile.title}</h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        </div>
                        
                        <div className="space-y-2">
                            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">{t.aboutPage.profile.name}</h4>
                            <p className="text-2xl font-medium text-white">20cent Inc. <span className="text-gray-500 text-lg font-normal">(株式会社20cent)</span></p>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-xs font-bold text-purple-400 uppercase tracking-[0.2em]">{t.aboutPage.profile.business}</h4>
                            <ul className="grid grid-cols-2 gap-3">
                                {[t.services.web.title, t.services.video.title, t.services.branding.title, 'AI Consulting'].map((service) => (
                                    <li key={service} className="flex items-center gap-2 text-gray-300 text-sm">
                                        <div className="w-1 h-1 bg-white rounded-full" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Contact & Location */}
                    <div className="w-full md:w-1/2 space-y-10 relative">
                        {/* Vertical Divider (Desktop) */}
                        <div className="hidden md:block absolute left-[-2rem] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-pink-400 uppercase tracking-[0.2em]">{t.aboutPage.profile.location}</h4>
                            <a 
                                href="https://maps.google.com/?q=1-1-17+LANTIQUE105,+Nakameguro,+Meguro-ku,+Tokyo" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group/map block"
                            >
                                <p className="text-xl text-white leading-relaxed group-hover/map:text-blue-300 transition-colors">
                                    1-1-17 LANTIQUE105, Nakameguro<br />
                                    Meguro-ku, Tokyo
                                </p>
                                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 group-hover/map:text-blue-400 transition-colors">
                                    <Globe className="w-4 h-4" />
                                    <span>View on Google Maps</span>
                                </div>
                            </a>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-green-400 uppercase tracking-[0.2em]">{t.contact.title}</h4>
                            <a 
                                href="mailto:info@20cent-jp.com" 
                                className="inline-flex items-center gap-3 text-2xl font-medium text-white hover:text-green-300 transition-colors border-b border-white/20 hover:border-green-300 pb-1"
                            >
                                info@20cent-jp.com
                                <ArrowRight className="w-5 h-5 -rotate-45" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="container">
            <h2 className="font-display font-bold text-5xl mb-8">Join the Revolution</h2>
            <Link href="/contact">
                <Button size="lg" className="rounded-full px-12 py-8 text-xl bg-white text-black hover:bg-gray-200 transition-colors">
                    Get in Touch
                </Button>
            </Link>
        </div>
      </section>
    </Layout>
  );
}
