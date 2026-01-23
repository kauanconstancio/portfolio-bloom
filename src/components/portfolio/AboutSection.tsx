import avatarImage from "@/assets/avatar.png";
import { Section } from "@/components/portfolio/Section";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/portfolio/TiltCard";
import { education, experiences } from "@/components/portfolio/data";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap } from "lucide-react";

type TimelineItemProps = {
  title: string;
  subtitle?: string;
  meta?: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
};

function TimelineItem({ title, subtitle, meta, icon, children }: TimelineItemProps) {
  return (
    <div className="relative grid gap-3 pl-10">
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card/70 text-muted-foreground">
        {icon}
      </div>
      <div className="absolute left-4 top-8 h-[calc(100%-2rem)] w-px bg-border/70" aria-hidden="true" />

      <div className="space-y-1">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold tracking-tight sm:text-lg">{title}</h3>
            {subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null}
          </div>
          {meta ? (
            <Badge variant="secondary" className="shrink-0">
              {meta}
            </Badge>
          ) : null}
        </div>
        {children ? <div className="text-sm leading-relaxed text-muted-foreground">{children}</div> : null}
      </div>
    </div>
  );
}

export function AboutSection({ className }: { className?: string }) {
  return (
    <Section
      id="sobre"
      eyebrow="SOBRE"
      title="Construo UI com intenção"
      description="Um resumo editorial do meu momento, com uma linha do tempo do que estou estudando e onde já atuei."
      className={cn("relative", className)}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <TiltCard className="animate-fade-in">
          <div className="flex items-start gap-5">
            <div className="relative shrink-0">
              <img
                src={avatarImage}
                alt="Avatar editorial do Kauan"
                className="h-20 w-20 rounded-xl border border-border bg-card object-cover"
                loading="lazy"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[1.25rem] blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 40% 30%, hsl(var(--primary)/0.18), transparent 60%)",
                }}
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground">MANIFESTO</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Gosto de interfaces que parecem simples, mas foram pensadas nos detalhes: hierarquia, espaçamento,
                acessibilidade e consistência. Meu foco é transformar requisitos em telas claras e rápidas, com uma
                identidade visual que não pareça genérica.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Design system",
                  "Componentização",
                  "Acessibilidade",
                  "Performance",
                  "Consistência visual",
                ].map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>

        <TiltCard className="animate-fade-in">
          <div className="space-y-5">
            <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground">TIMELINE</p>

            <div className="space-y-6">
              <TimelineItem
                title={education.course}
                subtitle={education.school}
                meta={education.status}
                icon={<GraduationCap className="h-4 w-4" />}
              >
                {education.summary}
              </TimelineItem>

              {experiences.map((exp) => (
                <TimelineItem
                  key={`${exp.role}-${exp.company}-${exp.period}`}
                  title={exp.role}
                  subtitle={exp.company}
                  meta={exp.period}
                  icon={<Briefcase className="h-4 w-4" />}
                >
                  {exp.summary}
                </TimelineItem>
              ))}
            </div>
          </div>
        </TiltCard>
      </div>
    </Section>
  );
}
