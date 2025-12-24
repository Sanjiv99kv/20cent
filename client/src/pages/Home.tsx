import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Play, Code, PenTool, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

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
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-background">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Light Refraction Animation */}
          <div className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay">
            {/* Input Beam (White Light) */}
            <div className="absolute top-1/2 left-0 w-1/2 h-2 bg-white blur-md origin-left animate-beam" 
                 style={{ transform: 'translateY(-50%) rotate(-15deg)', top: '60%' }} />
            
            {/* Output Spectrum (Rainbow) */}
            <div className="absolute top-1/2 left-1/2 w-full h-[400px] origin-left animate-spectrum opacity-0"
                 style={{ 
                   background: 'conic-gradient(from 270deg at 0% 50%, rgba(255,0,0,0.5), rgba(255,165,0,0.5), rgba(0,128,0,0.5), rgba(0,0,255,0.5), rgba(128,0,128,0.5))',
                   transform: 'translateY(-50%) rotate(-15deg)',
                   top: '60%',
                   filter: 'blur(40px)'
                 }} />
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
              Integrated <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-[length:200%_auto] animate-gradient">Creative Studio.</span>
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 opacity-30 blur-lg animate-pulse" />
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
              Optimizing the boundary between AI efficiency and human creativity to deliver premium digital experiences.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/work">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-black hover:bg-gray-100 transition-all duration-300">
                  Contact Us
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
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Trusted By Industry Leaders</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span key={i} className="text-3xl md:text-5xl font-display font-bold text-gray-300 hover:text-black transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-red-500/5 to-blue-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Animated Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse-slow" />
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-xl hidden md:block"
            >
              <Code className="w-6 h-6 text-blue-400" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-xl hidden md:block"
            >
              <PenTool className="w-6 h-6 text-pink-400" />
            </motion.div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="/images/ai-human-fusion.png" 
                alt="AI x Human Fusion" 
                className="w-full aspect-square object-cover transition-all duration-700"
              />
              {/* Interactive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
              AI × Human <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Optimization</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are an "Integrated Creative Studio" that draws a clear line between areas where AI can save labor and areas where human creativity is essential.
              </p>
              <p>
                By establishing unique rules to separate these domains, we eliminate unnecessary work while delivering high-quality creative tailored to your needs.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/about">
                <a className="group flex items-center gap-2 font-bold text-lg hover:gap-4 transition-all">
                  Read our philosophy <ArrowRight className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-900 to-transparent opacity-50" />
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/20 pb-8">
            <h2 className="font-display font-bold text-5xl md:text-7xl">Services</h2>
            <p className="text-gray-400 max-w-md text-right mt-4 md:mt-0">
              Comprehensive creative solutions for modern brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <Code className="w-12 h-12 mb-6 text-gray-400 group-hover:text-white transition-colors" />
              <h3 className="font-display font-bold text-2xl mb-4">Web Development</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                High-performance websites and web applications built with cutting-edge technology.
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
              <h3 className="font-display font-bold text-2xl mb-4">Video Production</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Commercials, promotional content, and motion graphics that capture attention.
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
              <h3 className="font-display font-bold text-2xl mb-4">Brand Guidelines</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Strategic logo design, trademark support, and comprehensive brand identity systems.
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
            Ready to elevate your brand?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let's discuss how our AI × Human approach can transform your digital presence.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-12 py-8 text-xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 hover:opacity-90 transition-opacity border-0">
              Start a Project
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
