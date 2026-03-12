export const projectsData = [
  {
    id: 1,
    title: "Portfólio Pessoal",
    shortTitle: "LandingPage",
    description:
      "Portfólio pessoal responsivo desenvolvido para apresentar projetos, habilidades técnicas e formas de contato.",
    longDescription:
      "Projeto de portfólio pessoal desenvolvido com HTML, CSS e JavaScript. O site foi estruturado para apresentar informações profissionais, projetos e contatos de forma clara, com layout moderno, navegação fluida e foco em boa experiência de uso.",
    technologies: ["HTML", "CSS", "JavaScript"],
    challengeSolved:
      "Organizar a apresentação do conteúdo em uma interface responsiva, com navegação intuitiva e estrutura visual bem definida.",
    role: "Desenvolvedor Frontend",
    duration: "Projeto pessoal",
    github: "https://github.com/JoaoVictorMatos/LandingPage",
    demo: "https://joaovictormatos.github.io/LandingPage/",
    image: "💼",
    stage: "Projeto 1",
  },
  {
    id: 2,
    title: "Landing Page Intech",
    shortTitle: "Intech Page",
    description:
      "Landing page responsiva com foco em organização visual, experiência do usuário e apresentação de serviços.",
    longDescription:
      "Landing page desenvolvida com HTML, CSS e JavaScript, com atenção à hierarquia visual, responsividade e clareza na exibição das informações. O projeto foi estruturado para apresentar serviços e facilitar o contato do usuário.",
    technologies: ["HTML", "CSS", "JavaScript"],
    challengeSolved:
      "Construir uma página visualmente organizada, responsiva e com navegação simples para melhorar a experiência do usuário.",
    role: "Desenvolvedor Frontend",
    duration: "Projeto pessoal",
    github: "https://github.com/JoaoVictorMatos/Intech-Page",
    demo: "",
    image: "📱",
    stage: "Projeto 2",
  },
  {
    id: 3,
    title: "Gerador de Tabuada",
    shortTitle: "Tabuada",
    description:
      "Aplicação web interativa que gera tabuadas dinamicamente a partir do valor informado pelo usuário.",
    longDescription:
      "Projeto desenvolvido com HTML, CSS e JavaScript para praticar manipulação do DOM, eventos de formulário e validação de entrada. A aplicação exibe a tabuada de forma dinâmica e sem recarregar a página.",
    technologies: ["HTML", "CSS", "JavaScript"],
    challengeSolved:
      "Implementar atualização dinâmica da interface com base na entrada do usuário, mantendo o código simples e organizado.",
    role: "Desenvolvedor Frontend",
    duration: "Projeto de estudo",
    github: "https://github.com/JoaoVictorMatos/Tabuada",
    demo: "",
    image: "🧮",
    stage: "Projeto 3 ",
  },
];

export const aboutData = {
  title: "Sobre João Victor",
  introduction:
    "Desenvolvedor web com foco em React, interfaces responsivas e soluções bem estruturadas.",
  mainText: `Sou estudante de Sistemas de Informação pela Universidade Federal de Lavras (UFLA) e atuo na área de Tecnologia da Informação com foco em desenvolvimento web.

Tenho experiência no desenvolvimento de aplicações front-end utilizando React, JavaScript, HTML e CSS, além de integração com APIs REST e construção de interfaces responsivas e organizadas.

Também possuo experiência em suporte e infraestrutura de TI, o que me proporciona uma visão prática do funcionamento dos sistemas e das necessidades dos usuários.

Busco desenvolver soluções web funcionais, intuitivas e bem estruturadas, aplicando boas práticas de desenvolvimento, organização de código e foco constante em qualidade.`,
  highlights: [
    {
      title: "React e JavaScript",
      description:
        "Foco no desenvolvimento de interfaces modernas, reutilizáveis e organizadas.",
    },
    {
      title: "Integração com APIs",
      description:
        "Experiência no consumo de APIs REST e atualização dinâmica de interfaces.",
    },
    {
      title: "Interfaces Responsivas",
      description:
        "Construção de páginas adaptáveis para desktop e dispositivos móveis.",
    },
    {
      title: "Aprendizado Contínuo",
      description:
        "Sempre buscando evoluir tecnicamente e acompanhar boas práticas do desenvolvimento web.",
    },
  ],
};

export const skillsData = {
  frontend: {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 80, icon: "⚛️" },
      { name: "JavaScript", level: 80, icon: "📜" },
      { name: "HTML5", level: 90, icon: "🏗️" },
      { name: "CSS3", level: 85, icon: "🎨" },
      { name: "Responsive Design", level: 85, icon: "📱" },
    ],
  },
  backend: {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 55, icon: "🟢" },
      { name: "Express", level: 50, icon: "🚀" },
      { name: "REST APIs", level: 70, icon: "🔌" },
    ],
  },
  tools: {
    category: "Ferramentas",
    icon: "🛠️",
    skills: [
      { name: "Git/GitHub", level: 80, icon: "🐙" },
      { name: "Vite", level: 70, icon: "⚡" },
      { name: "VS Code", level: 85, icon: "💻" },
    ],
  },
  soft: {
    category: "Soft Skills",
    icon: "👥",
    skills: [
      { name: "Comunicação", level: 85, icon: "💬" },
      { name: "Organização", level: 85, icon: "📋" },
      { name: "Resolução de Problemas", level: 80, icon: "🧩" },
      { name: "Trabalho em Equipe", level: 85, icon: "🤝" },
    ],
  },
};

export const contactData = {
  title: "Vamos Conversar?",
  subtitle:
    "Estou aberto a oportunidades, projetos freelance e colaborações na área de desenvolvimento web.",
  contacts: [
    {
      type: "email",
      label: "Email",
      value: "joaovictor@example.com",
      icon: "✉️",
      link: "mailto:joao.digivendas@gmail.com",
      display: "joao.digivendas@gmail.com",
    },
    {
      type: "github",
      label: "GitHub",
      value: "github.com/JoaoVictorMatos",
      icon: "🐙",
      link: "https://github.com/JoaoVictorMatos",
      display: "github.com/JoaoVictorMatos",
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/joao-victor-matos",
      icon: "💼",
      link: "https://www.linkedin.com/in/joaomatos02",
      display: "linkedin.com/in/joao-victor-matos",
    },
    {
      type: "whatsapp",
      label: "WhatsApp",
      value: "+55 35 99761-4966",
      icon: "📱",
      link: "https://w.app/jvmatosdev",
      display: "+55 35 99761-4966",
    },
  ],
  cta: "Vamos construir algo relevante juntos.",
};

export const mapStages = [
  {
    id: "about",
    title: "Sobre Mim",
    shortTitle: "SOBRE",
    position: 15,
    icon: "👨‍💻",
    color: "#FF6B6B",
    type: "section",
    description: "Conheça meu perfil profissional",
  },
  {
    id: "skills",
    title: "Habilidades",
    shortTitle: "SKILLS",
    position: 35,
    icon: "⚡",
    color: "#4ECDC4",
    type: "section",
    description: "Tecnologias e competências",
  },
  {
    id: "projects",
    title: "Projetos",
    shortTitle: "PROJETOS",
    position: 55,
    icon: "🚀",
    color: "#FFE66D",
    type: "section",
    description: "Projetos desenvolvidos e estudos práticos",
  },
  {
    id: "contact",
    title: "Contato",
    shortTitle: "CONTATO",
    position: 75,
    icon: "💌",
    color: "#95E1D3",
    type: "section",
    description: "Entre em contato comigo",
  },
];
