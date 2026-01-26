import { ParallaxBackdrop } from "@/components/portfolio/ParallaxBackdrop";
import { Section } from "@/components/portfolio/Section";
import { TiltCard } from "@/components/portfolio/TiltCard";
import { ProjectsGrid } from "@/components/portfolio/ProjectsGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  education,
  experiences,
  projects,
  tech,
} from "@/components/portfolio/data";
import { CertificatesGallery } from "@/components/portfolio/CertificatesGallery";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground dark">
      <ParallaxBackdrop className="pointer-events-none absolute inset-0 overflow-hidden" />

      <header className="">
        <div className="container py-8">
          <nav className="flex items-center justify-between gap-6">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold tracking-tight"
            >
              <img
                src="/favicon.png"
                width={20}
                height={20}
                alt="Ícone do portfólio"
                className="h-5 w-5 rounded-[0.25rem] border border-border bg-card"
                loading="eager"
                decoding="async"
              />
              KauanConstancio
            </a>
            <div className="hidden items-center gap-6 sm:flex">
              <a
                className="text-sm text-muted-foreground hover:text-foreground"
                href="#tecnologias"
              >
                Tecnologias
              </a>
              <a
                className="text-sm text-muted-foreground hover:text-foreground"
                href="#projetos"
              >
                Projetos
              </a>
              <a
                className="text-sm text-muted-foreground hover:text-foreground"
                href="#certificados"
              >
                Certificados
              </a>
              <a
                className="text-sm text-muted-foreground hover:text-foreground"
                href="#contato"
              >
                Contato
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="secondary" size="sm">
                <a href="#contato">Falar comigo</a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="container py-14 sm:py-20">
            <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="max-w-2xl">
                <p className="text-sm font-medium tracking-[0.22em] text-muted-foreground">
                  HELLO, I'M KAUAN.
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                  Front End Developer
                </h1>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Nascido em Vitória/ES, apaixonado por tecnologia e por
                  entender como as coisas funcionam. Construo interfaces
                  rápidas, claras e com identidade.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild>
                    <a href="#projetos">Ver projetos</a>
                  </Button>
                  <Button asChild variant="secondary">
                    <a href="#competencias">Competências</a>
                  </Button>
                  <div className="flex items-center gap-2 pl-1">
                    <a
                      className="rounded-md border border-border/70 bg-card/60 p-2 text-muted-foreground backdrop-blur hover:text-foreground"
                      href="https://github.com/kauanconstancio"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      className="rounded-md border border-border/70 bg-card/60 p-2 text-muted-foreground backdrop-blur hover:text-foreground"
                      href="#contato"
                      aria-label="E-mail"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      className="rounded-md border border-border/70 bg-card/60 p-2 text-muted-foreground backdrop-blur hover:text-foreground"
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <TiltCard className="animate-scale-in">
                  <div className="space-y-4">
                    <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground">
                      STATUS
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Foco atual
                      </p>
                      <p className="text-lg font-semibold">
                        Interfaces & Experiência do Usuário
                      </p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {["React", "TypeScript", "Tailwind", "Shadcn"].map(
                          (t) => (
                            <Badge key={t} variant="secondary">
                              {t}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
                <div
                  className="pointer-events-none absolute -inset-10 -z-10 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 30%, hsl(var(--primary)/0.15), transparent 60%)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <Section
          id="competencias"
          eyebrow="COMPETÊNCIAS"
          title="Formação & Experiência"
          description="Uma visão rápida do que estou estudando e onde já atuei."
          className="relative"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <TiltCard>
              <div className="space-y-3">
                <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground">
                  FORMAÇÃO
                </p>
                <h3 className="text-xl font-semibold">{education.course}</h3>
                <p className="text-sm text-muted-foreground">
                  {education.school} • {education.status}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {education.summary}
                </p>
              </div>
            </TiltCard>

            <div className="grid gap-6">
              {experiences.map((exp) => (
                <TiltCard key={`${exp.role}-${exp.company}`}>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {exp.summary}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="tecnologias"
          eyebrow="STACK"
          title="Tecnologias do dia a dia"
          description="Ferramentas e tecnologias que uso para construir interfaces modernas."
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {tech.map((t) => (
              <div
                key={t}
                className="rounded-lg border bg-card/50 px-3 py-3 text-sm text-muted-foreground backdrop-blur transition-colors hover:bg-card/70 hover:text-foreground"
              >
                {t}
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="projetos"
          eyebrow="PORTFÓLIO"
          title="Projetos em destaque"
          description="Alguns projetos para ver minhas escolhas de UI, organização e stack."
        >
          <ProjectsGrid projects={projects} />
        </Section>

        <Section
          id="certificados"
          eyebrow="CERTIFICAÇÕES"
          title="Certificados"
          description="Uma galeria com seus certificados (clique para ampliar e navegar)."
        >
          <TiltCard>
            <CertificatesGallery />
          </TiltCard>
        </Section>

        <Section
          id="contato"
          eyebrow="CONTATO"
          title="Vamos construir algo juntos"
          description="Se quiser, eu adiciono um formulário de contato e integração de envio depois."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <TiltCard className="lg:col-span-2">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Mensagem rápida</h3>
                <p className="text-sm text-muted-foreground">
                  Para essa primeira versão, deixei o contato direto. Se
                  preferir, posso adicionar um formulário com validação.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="mailto:seuemail@exemplo.com">Enviar e-mail</a>
                  </Button>
                  <Button asChild variant="secondary">
                    <a
                      href="https://github.com/kauanconstancio/portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver repositório
                    </a>
                  </Button>
                </div>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Links</h3>
                <div className="grid gap-2">
                  <a
                    className="inline-flex items-center justify-between rounded-md border border-border/70 bg-card/60 px-3 py-2 text-sm text-muted-foreground backdrop-blur hover:text-foreground"
                    href="https://github.com/kauanconstancio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <Github className="h-4 w-4" />
                  </a>
                  <a
                    className="inline-flex items-center justify-between rounded-md border border-border/70 bg-card/60 px-3 py-2 text-sm text-muted-foreground backdrop-blur hover:text-foreground"
                    href="mailto:seuemail@exemplo.com"
                  >
                    E-mail <Mail className="h-4 w-4" />
                  </a>
                  <a
                    className="inline-flex items-center justify-between rounded-md border border-border/70 bg-card/60 px-3 py-2 text-sm text-muted-foreground backdrop-blur hover:text-foreground"
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>
        </Section>
      </main>

      <footer className="relative py-10">
        <div className="container">
          <Separator />
          <p className="mt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kauan Constancio • Construído com React
            + Tailwind.
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default Index;
