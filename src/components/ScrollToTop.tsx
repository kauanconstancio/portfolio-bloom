import * as React from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-lg backdrop-blur transition-all duration-300",
        "hover:bg-card hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "motion-reduce:transition-none",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
