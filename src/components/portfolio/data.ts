export type Project = {
  title: string;
  description: string;
  stack: string[];
  imageSrc: string;
  gallery?: string[];
  details?: {
    overview?: string;
    highlights?: string[];
    learnings?: string[];
  };
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Chat Bot AI (Open AI)",
    description: "Chatbot com UI moderna e foco em produtividade, feito com Next.js.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Shadcn"],
    imageSrc: "/assets/projects-img/chat-bot.png",
    gallery: ["/assets/projects-img/chat-bot.png"],
    details: {
      overview:
        "Um chatbot com interface moderna, pensado para produtividade e conversas rápidas com boa leitura.",
      highlights: [
        "Componentização e UI consistente",
        "Foco em UX (layout, espaçamento e legibilidade)",
        "Integração com API de IA",
      ],
      learnings: [
        "Organização de componentes e estados",
        "Criação de UI escalável com Tailwind",
      ],
    },
    liveUrl: "https://chat-bot-one-olive.vercel.app/",
    githubUrl: "https://github.com/kauanconstancio/chat-bot",
  },
  {
    title: "Portfolio", 
    description: "Meu portfólio com projetos, certificados e contato.",
    stack: ["React", "Vite", "Tailwind", "Lucide"],
    imageSrc: "/assets/projects-img/portfolio.png",
    gallery: ["/assets/projects-img/portfolio.png"],
    details: {
      overview:
        "Um portfólio com layout limpo, seções bem definidas e foco em performance e apresentação do trabalho.",
      highlights: [
        "Seções modulares (competências, stack, projetos, certificados)",
        "Galeria de certificados com modal e navegação",
        "Design tokens e componentes reutilizáveis",
      ],
      learnings: [
        "Padronização visual com tokens",
        "Componentes acessíveis com Radix/shadcn",
      ],
    },
    liveUrl: "https://portfolio-five-eosin-41.vercel.app/",
    githubUrl: "https://github.com/kauanconstancio/portfolio",
  },
  {
    title: "Biblioteca de Jogos",
    description: "Catálogo de jogos com interface simples e foco em organização.",
    stack: ["HTML", "CSS", "JavaScript", "Sass"],
    imageSrc: "/assets/projects-img/biblioteca-de-jogos.png",
    gallery: ["/assets/projects-img/biblioteca-de-jogos.png"],
    details: {
      overview:
        "Catálogo de jogos para treinar organização de conteúdo, layout e responsividade em um projeto front-end clássico.",
      highlights: [
        "Estruturação de páginas e componentes simples",
        "Estilização com foco em clareza",
        "Boas práticas de CSS/Sass",
      ],
      learnings: ["Responsividade", "Organização de CSS", "Estados simples em JS"],
    },
    liveUrl: "https://imerss-o-dev-alura-google-gemini.vercel.app/",
    githubUrl: "https://github.com/kauanconstancio/Imersao-DEV-Alura-Google-Gemini",
  },
  {
    title: "Adivinhação de Números",
    description: "Projeto de lógica em JS com UX direta e feedback do usuário.",
    stack: ["HTML", "CSS", "JavaScript", "Sass"],
    imageSrc: "/assets/projects-img/adivinhacao.png",
    gallery: ["/assets/projects-img/adivinhacao.png"],
    details: {
      overview:
        "Jogo simples para praticar lógica, validação e feedback imediato para o usuário.",
      highlights: [
        "Fluxo de jogo objetivo",
        "Feedback de acerto/erro",
        "Código direto e fácil de manter",
      ],
      learnings: ["Lógica e controle de fluxo", "Feedback e UX", "Validações básicas"],
    },
    liveUrl: "https://l-gica-com-js.vercel.app/",
    githubUrl:
      "https://github.com/kauanconstancio/L-gica-com-JS/tree/main/parte-2/numero%20secreto%202.0",
  },
];

export const tech: string[] = [
  "Figma",
  "VSCode",
  "Git",
  "GitHub",
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "React",
  "Vite",
  "TailwindCSS",
  "Next.js",
  "Lucide",
  "Shadcn",
  "TypeScript",
  "Lovable",
  "Claude",
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export const experiences: Experience[] = [
  {
    role: "Operador de Vendas e Atendimento",
    company: "C&A",
    period: "10/2024 – 11/2024",
    summary:
      "Atendimento ao público, suporte às necessidades do cliente e operação de caixa.",
  },
];

export const education = {
  course: "Análise e Desenvolvimento de Sistemas",
  school: "Estácio",
  status: "Em andamento",
  summary:
    "Desenvolvendo habilidades em software, arquitetura e banco de dados, mantendo foco em prática e evolução contínua.",
};
