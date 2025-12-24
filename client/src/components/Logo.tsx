import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "compact";
}

export default function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <div className={cn("flex items-center select-none", className)}>
      <img 
        src="/images/logo-new-transparent.png" 
        alt="Twenty Cents Studio" 
        className={cn(
          "h-auto object-contain",
          variant === "default" ? "w-48" : "w-32"
        )}
      />
    </div>
  );
}
