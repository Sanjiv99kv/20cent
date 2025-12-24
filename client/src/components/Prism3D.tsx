import { useEffect, useRef } from "react";

export default function Prism3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20; // -10 to 10 deg
      const y = (clientY / innerHeight - 0.5) * 20; // -10 to 10 deg
      
      containerRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="perspective-[1000px] w-full h-full flex items-center justify-center pointer-events-none">
      <div 
        ref={containerRef}
        className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] transition-transform duration-100 ease-out transform-style-3d animate-float"
      >
        {/* Prism Faces */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl transform translate-z-[50px] shadow-2xl" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl transform translate-z-[20px] mix-blend-overlay" />
        
        {/* Internal Light Beam */}
        <div className="absolute top-1/2 left-1/2 w-[200%] h-[20px] bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45 blur-xl animate-pulse-slow" />
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full blur-md animate-float-delayed" />
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-blue-500 rounded-full blur-md animate-float" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-yellow-500 rounded-full blur-md animate-float-slow" />
      </div>
    </div>
  );
}
