import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ArrowRight, Cpu, Heart, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
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
                Beyond <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Boundaries.</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
                We are the architects of the new digital era, fusing algorithmic precision with human intuition to build experiences that matter.
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
      <section className="py-32 bg-black text-white">
        <div className="container">
            <div className="text-center mb-24">
                <h2 className="font-display font-bold text-5xl md:text-7xl mb-6">Our Core Values</h2>
                <p className="text-gray-400 text-xl max-w-2xl mx-auto">The principles that guide every pixel we place and every line of code we write.</p>
            </div>

            <div className="space-y-32">
                {/* Value 1 */}
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                         <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 relative group">
                            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Zap className="w-24 h-24 text-white/20 group-hover:text-white/50 transition-colors" />
                            </div>
                         </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="font-display font-bold text-4xl mb-6">Radical Efficiency</h3>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            We don't just work fast; we work smart. By leveraging custom AI workflows, we reduce production time by up to 40%, allowing us to iterate more and deliver faster without compromising quality.
                        </p>
                    </div>
                </div>

                {/* Value 2 (Reversed) */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="w-full md:w-1/2">
                         <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 relative group">
                            <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Globe className="w-24 h-24 text-white/20 group-hover:text-white/50 transition-colors" />
                            </div>
                         </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="font-display font-bold text-4xl mb-6">Global Perspective</h3>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Based in Tokyo but thinking globally. Our team comprises diverse talents who understand cross-cultural nuances, ensuring your brand resonates across borders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Company Profile (Redesigned) */}
      <section className="py-32 bg-background">
        <div className="container max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/30 backdrop-blur-sm border border-border rounded-3xl p-12 md:p-16"
            >
                <h2 className="font-display font-bold text-4xl mb-12 text-center">Company Profile</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Company Name</h4>
                            <p className="text-xl font-medium">20cent Inc. (株式会社20cent)</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Location</h4>
                            <p className="text-xl font-medium">
                                1-1-17 LANTIQUE105, Nakameguro<br />
                                Meguro-ku, Tokyo
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Contact</h4>
                            <p className="text-xl font-medium">info@20cent-jp.com</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Services</h4>
                            <ul className="text-xl font-medium space-y-1 text-muted-foreground">
                                <li>Web Development</li>
                                <li>Video Production</li>
                                <li>Brand Guidelines</li>
                                <li>AI Consulting</li>
                            </ul>
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
