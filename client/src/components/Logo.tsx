import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "compact";
}

export default function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 select-none", className)}>
      {variant === "default" ? (
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-2xl tracking-tighter text-foreground">
            Twenty Cents.
          </span>
          {/* Rainbow Gradient Bar */}
          <div className="h-[1em] w-[1.5em] bg-gradient-to-r from-[#ff0000] via-[#ffff00] via-[#00ff00] via-[#00ffff] to-[#0000ff] ml-1" />
        </div>
      ) : (
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-xl tracking-tighter text-foreground">
            TweCen
          </span>
          <div className="h-[0.8em] w-[1.2em] bg-gradient-to-r from-[#ff0000] via-[#ffff00] via-[#00ff00] via-[#00ffff] to-[#0000ff] ml-1" />
        </div>
      )}
    </div>
  );
}
