import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [lang, setLang] = useState<"en" | "ja">("en");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleLang = () => {
    setLang(prev => prev === "en" ? "ja" : "en");
  };

  const navLinks = [
    { name: lang === "en" ? "Work" : "実績", href: "/work" },
    { name: lang === "en" ? "Services" : "サービス", href: "/services" },
    { name: lang === "en" ? "About" : "会社概要", href: "/about" },
    { name: lang === "en" ? "Contact" : "お問い合わせ", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-black selection:text-white">
      {/* Prism Line - Top Border */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 z-50" />

      {/* Navigation */}
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out border-b border-transparent",
          isScrolled ? "bg-background/90 backdrop-blur-md py-4 border-border/50" : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="group flex items-center gap-2 z-50 relative">
              <div className="font-display font-bold text-2xl tracking-tighter">
                Twenty Cents<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">.</span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={cn(
                  "text-sm font-medium uppercase tracking-widest hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-red-500 after:to-blue-500 after:transition-all hover:after:w-full",
                  location === link.href ? "text-black font-bold" : "text-muted-foreground"
                )}>
                  {link.name}
                </a>
              </Link>
            ))}
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLang}
              className="ml-4 rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <Globe className="w-4 h-4 mr-2" />
              {lang === "en" ? "EN" : "JP"}
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 relative p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-background z-30 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden",
        isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className="font-display text-4xl font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button 
            variant="outline" 
            size="lg" 
            onClick={toggleLang}
            className="mt-8 rounded-full"
          >
            <Globe className="w-4 h-4 mr-2" />
            {lang === "en" ? "Switch to Japanese" : "英語に切り替え"}
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-20 relative overflow-hidden">
        {/* Footer Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 opacity-50" />
        
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="md:col-span-2 space-y-6">
            <div className="font-display font-bold text-3xl tracking-tighter">
              Twenty Cents<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">.</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              An integrated creative studio optimizing the boundary between AI efficiency and human creativity.
            </p>
            <div className="flex gap-4 pt-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Sitemap</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/work"><a className="hover:text-white transition-colors">Work</a></Link></li>
              <li><Link href="/services"><a className="hover:text-white transition-colors">Services</a></Link></li>
              <li><Link href="/about"><a className="hover:text-white transition-colors">About</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Contact</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>1-1-17 LANTIQUE105</p>
              <p>Nakameguro, Meguro-ku</p>
              <p>Tokyo, Japan</p>
              <p className="pt-2"><a href="mailto:info@20cent-jp.com" className="hover:text-white transition-colors">info@20cent-jp.com</a></p>
            </address>
          </div>
        </div>

        <div className="container mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 20cent Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
