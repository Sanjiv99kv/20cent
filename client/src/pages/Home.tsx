import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Play, Code, PenTool, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Prism3D from "@/components/Prism3D";
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
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-black text-white">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-60">
          <Prism3D />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-background z-0" />

        <div className="container relative z-10 pt-20">
          <div className="max-w-4xl">
            <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              Integrated <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500">Creative Studio.</span>
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 opacity-30 blur-lg animate-pulse" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
              Optimizing the boundary between AI efficiency and human creativity to deliver premium digital experiences.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Link href="/work">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                  View Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-black hover:bg-gray-100 transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
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
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="/images/about-studio.png" 
                alt="Studio Interior" 
                className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
              AI × Human <br />
              <span className="text-gray-400">Optimization</span>
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
          </div>
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
