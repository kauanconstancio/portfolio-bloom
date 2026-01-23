import * as React from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  className?: string;
  children: React.ReactNode;
  intensity?: number;
};

export function TiltCard({ className, children, intensity = 10 }: TiltCardProps) {
  // NOTE: Tilt/3D effect intentionally removed (clean static cards)
  // Keeping the same component API to avoid touching all call-sites.
  void intensity;

  return (
    <div
      className={cn(
        "relative",
        className
      )}
    >
      <div
        className={cn(
          "relative rounded-lg border bg-card/80 p-6 backdrop-blur",
          "shadow-[0_0_0_1px_hsl(var(--border)/0.6)]",
          "transition-shadow duration-200 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.25),0_18px_80px_-40px_hsl(var(--primary)/0.25)]"
        )}
      >
        <div className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-200" />
        {children}
      </div>
    </div>
  );
}
