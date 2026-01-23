import * as React from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  className?: string;
  children: React.ReactNode;
  intensity?: number;
};

export function TiltCard({ className, children, intensity = 10 }: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = React.useState<string>("perspective(900px)");
  const [isHover, setIsHover] = React.useState(false);

  const onMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      const rotY = (px - 0.5) * intensity * 2;
      const rotX = -(py - 0.5) * intensity * 2;

      setTransform(
        `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(0)`
      );
    },
    [intensity]
  );

  const reset = React.useCallback(() => {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg)");
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
        reset();
      }}
      onMouseMove={onMove}
      className={cn(
        "relative will-change-transform [transform-style:preserve-3d] transition-transform duration-150",
        className
      )}
      style={{ transform }}
    >
      <div
        className={cn(
          "relative rounded-lg border bg-card/80 p-6 backdrop-blur",
          "shadow-[0_0_0_1px_hsl(var(--border)/0.6)]",
          isHover && "shadow-[0_0_0_1px_hsl(var(--primary)/0.35),0_16px_70px_-30px_hsl(var(--primary)/0.35)]"
        )}
      >
        <div className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-200" />
        {children}
      </div>
    </div>
  );
}
