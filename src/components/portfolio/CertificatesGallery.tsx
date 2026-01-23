import * as React from "react";
import { certificates } from "@/components/portfolio/certificates";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

type CertificatesGalleryProps = {
  className?: string;
};

export function CertificatesGallery({ className }: CertificatesGalleryProps) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const total = certificates.length;
  const current = certificates[index];

  const openAt = React.useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const prev = React.useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = React.useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, next, prev]);

  return (
    <div className={cn("space-y-5", className)}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {certificates.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => openAt(i)}
            className={cn(
              "group relative overflow-hidden rounded-lg border bg-card/50 backdrop-blur",
              "transition-colors hover:bg-card/70"
            )}
          >
            <img
              src={c.imageSrc}
              alt={c.title}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-background/70 p-2 backdrop-blur">
              <p className="truncate text-xs text-muted-foreground">{c.title}</p>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl border-border bg-background p-0">
          <div className="relative">
            <div className="absolute right-3 top-3 z-20 flex items-center gap-2">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <img
                src={current.imageSrc}
                alt={current.title}
                className="max-h-[75vh] w-full object-contain bg-card"
              />

              <div className="pointer-events-none absolute inset-0">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 20%, hsl(var(--primary)/0.12), transparent 55%)",
                  }}
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-background/80 px-4 py-3 backdrop-blur">
                <div className="min-w-0">
                  <p className="truncate text-sm text-muted-foreground">{current.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="secondary" size="icon" onClick={prev} aria-label="Anterior">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon" onClick={next} aria-label="Próximo">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
