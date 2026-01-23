import * as React from "react";

import { cn } from "@/lib/utils";
import type { Project } from "@/components/portfolio/data";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react";

type ProjectsGridProps = {
  projects: Project[];
  className?: string;
};

export function ProjectsGrid({ projects, className }: ProjectsGridProps) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const total = projects.length;
  const current = projects[index];
  const gallery = current?.gallery?.length ? current.gallery : [current.imageSrc];

  const openAt = React.useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const prevProject = React.useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const nextProject = React.useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const [imageIndex, setImageIndex] = React.useState(0);

  React.useEffect(() => {
    // Reset gallery index whenever switching projects or opening.
    setImageIndex(0);
  }, [index, open]);

  const prevImage = React.useCallback(() => {
    setImageIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const nextImage = React.useCallback(() => {
    setImageIndex((i) => (i + 1) % gallery.length);
  }, [gallery.length]);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [nextProject, open, prevProject]);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <button
            key={p.title}
            type="button"
            onClick={() => openAt(i)}
            className={cn(
              "group overflow-hidden rounded-lg border bg-card/60 text-left backdrop-blur",
              "transition-colors hover:bg-card/75"
            )}
          >
            <img
              src={p.imageSrc}
              alt={`Preview do projeto ${p.title}`}
              loading="lazy"
              className="aspect-[16/10] w-full border-b object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />

            <div className="space-y-3 p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <span className="text-xs text-muted-foreground">Detalhes</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl border-border bg-background p-0">
          <div className="relative grid gap-0 lg:grid-cols-[1.45fr_1fr]">
            <div className="relative overflow-hidden border-b lg:border-b-0 lg:border-r">
              <img
                src={gallery[imageIndex]}
                alt={`Imagem ${imageIndex + 1} do projeto ${current?.title ?? ""}`}
                className="max-h-[70vh] w-full object-contain bg-background"
                decoding="async"
              />

              {gallery.length > 1 ? (
                <>
                  <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              ) : null}

              <div className="absolute bottom-3 left-3 rounded-md border border-border/70 bg-card/60 px-2 py-1 text-xs text-muted-foreground backdrop-blur">
                {imageIndex + 1}/{gallery.length}
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground">PROJETO</p>
                  <h3 className="text-2xl font-semibold tracking-tight">{current?.title}</h3>
                </div>

                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{current?.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {current?.stack.map((s) => (
                  <Badge key={s} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>

              <Separator className="my-6" />

              {current?.details?.overview ? (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Visão geral</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{current.details.overview}</p>
                </div>
              ) : null}

              {current?.details?.highlights?.length ? (
                <div className="mt-5 space-y-2">
                  <h4 className="text-sm font-semibold">Destaques</h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {current.details.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {current?.details?.learnings?.length ? (
                <div className="mt-5 space-y-2">
                  <h4 className="text-sm font-semibold">Aprendizados</h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {current.details.learnings.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-7 flex flex-wrap items-center gap-2">
                {current?.liveUrl ? (
                  <Button asChild>
                    <a href={current.liveUrl} target="_blank" rel="noreferrer">
                      Ver online <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                ) : null}

                {current?.githubUrl ? (
                  <Button asChild variant="secondary">
                    <a href={current.githubUrl} target="_blank" rel="noreferrer">
                      GitHub <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                ) : null}

                <div className="ml-auto flex items-center gap-2">
                  <Button type="button" variant="ghost" size="sm" onClick={prevProject}>
                    <ChevronLeft className="mr-1 h-4 w-4" /> Anterior
                  </Button>
                  <Button type="button" variant="ghost" size="sm" onClick={nextProject}>
                    Próximo <ChevronRight className="ml-1 h-4 w-4" />
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
