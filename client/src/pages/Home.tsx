import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Play, Code, PenTool, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

import { cn } from "@/lib/utils";

export default function Home() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  
  // Mouse interaction for light beam
  const mouseY = useMotionValue(500); // Default center-ish
  
  // Map mouse Y to rotation angles
  // Input beam rotates between -25deg (top) and -5deg (bottom)
  const inputRotate = useTransform(mouseY, [0, 1000], [-25, -5]);
  
  // Output spectrum rotates inversely for refraction effect
  const outputRotate = useTransform(mouseY, [0, 1000], [-5, -25]);
  
  // Add spring physics for smooth movement
  const springConfig = { stiffness: 100, damping: 30 };
  const springInput = useSpring(inputRotate, springConfig);
  const springOutput = useSpring(outputRotate, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseY.set(e.clientY - rect.top);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clients = [
    "Amazon", "Disney", "Shake Shack", "Mitsui Fudosan", "Vector", "TATRAS", "Yoshimoto", "Charles & Keith"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-[90vh] flex items-center overflow-hidden bg-background"
      >
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Light Refraction Animation */}
          <div className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay">
            {/* Input Beam (White Light) */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ 
                rotate: springInput,
                top: '60%',
                transformOrigin: 'left center'
              }}
              className="absolute top-1/2 left-0 w-1/2 h-2 bg-white blur-md origin-left" 
            />
            
            {/* Output Spectrum (Rainbow) */}
            <motion.div 
              initial={{ scaleX: 0, scaleY: 0.5, opacity: 0 }}
              animate={{ scaleX: 1, scaleY: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
              style={{ 
                rotate: springOutput,
                top: '60%',
                transformOrigin: 'left center',
                background: 'conic-gradient(from 270deg at 0% 50%, rgba(255,0,0,0.5), rgba(255,165,0,0.5), rgba(0,128,0,0.5), rgba(0,0,255,0.5), rgba(128,0,128,0.5))',
                filter: 'blur(40px)'
              }}
              className="absolute top-1/2 left-1/2 w-full h-[400px] origin-left"
            />
          </div>

          {/* Animated Gradient Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-red-500/10 to-yellow-500/10 rounded-full blur-[120px]" 
          />

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, Math.random() * -100],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
              }}
            />
          ))}
        </div>

        <div 
          ref={heroRef}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/images/hero-abstract.png" 
            alt="Abstract Prism" 
            className="w-full h-full object-cover opacity-90 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-background" />
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-display font-bold text-6xl md:text-8xl tracking-tighter leading-[0.9] mb-8"
            >
              {t.hero.title} <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-[length:200%_auto] animate-gradient">{t.hero.subtitle}</span>
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 opacity-30 blur-lg animate-pulse" />
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/work">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {t.hero.viewWork}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-black hover:bg-gray-100 transition-all duration-300">
                  {t.hero.contactUs}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </section>

      {/* Client Ticker */}
      <section className="py-12 border-y border-border bg-secondary/30 overflow-hidden">
        <div className="container mb-6">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t.ticker.trustedBy}</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-24 items-center" style={{ animationDuration: '40s' }}>
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-24 items-center">
                {/* Extracted Logos */}
                {Array.from({ length: 19 }, (_, i) => i + 1).map((i) => (
                  <div key={`extracted-${i}`} className="w-[140px] h-[80px] flex items-center justify-center">
                    <img 
                      src={`/images/logos/logo_${i}.png`}
                      alt="Client Logo"
                      className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-bg-abstract.jpg" 
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              />
              <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-white leading-tight">
                {t.about.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                  {t.about.subtitle}
                </span>
              </h2>
            </div>

            <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              <p className="backdrop-blur-sm bg-black/30 p-6 rounded-2xl border border-white/10 shadow-xl hover:border-white/20 transition-colors duration-300">
                {t.about.p1}
              </p>
              <p className="backdrop-blur-sm bg-black/30 p-6 rounded-2xl border border-white/10 shadow-xl hover:border-white/20 transition-colors duration-300 delay-100">
                {t.about.p2}
              </p>
            </div>

            <div className="pt-6">
              <Link href="/about">
                <a className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                  {t.about.readPhilosophy} 
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
              <img 
                src="/images/about-bg-abstract.jpg" 
                alt="Creative Fusion" 
                className="w-full h-[600px] object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 z-30 bg-black/60 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/20 rounded w-3/4" />
                  <div className="h-2 bg-white/20 rounded w-1/2" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 z-30 bg-black/60 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">AI Powered</div>
                  <div className="text-gray-400 text-sm">Efficiency</div>
                </div>
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl -z-10 animate-pulse-slow" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-900 to-transparent opacity-50" />
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/20 pb-8">
            <h2 className="font-display font-bold text-5xl md:text-7xl">{t.services.title}</h2>
            <p className="text-gray-400 max-w-md text-right mt-4 md:mt-0">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <Code className="w-12 h-12 mb-6 text-gray-400 group-hover:text-white transition-colors" />
              <h3 className="font-display font-bold text-2xl mb-4">{t.services.web.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t.services.web.desc}
              </p>
              <img 
                src="/images/service-web.png" 
                alt="Web Dev" 
                className="w-full h-48 object-cover rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Service 2 */}
            <div className="group relative p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <Play className="w-12 h-12 mb-6 text-gray-400 group-hover:text-white transition-colors" />
              <h3 className="font-display font-bold text-2xl mb-4">{t.services.video.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t.services.video.desc}
              </p>
              <img 
                src="/images/service-video.png" 
                alt="Video" 
                className="w-full h-48 object-cover rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Service 3 */}
            <div className="group relative p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <PenTool className="w-12 h-12 mb-6 text-gray-400 group-hover:text-white transition-colors" />
              <h3 className="font-display font-bold text-2xl mb-4">{t.services.branding.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t.services.branding.desc}
              </p>
              <img 
                src="/images/service-branding.png" 
                alt="Branding" 
                className="w-full h-48 object-cover rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 tracking-tight">
            {t.cta.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            {t.cta.desc}
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-12 py-8 text-xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 hover:opacity-90 transition-opacity border-0">
              {t.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
