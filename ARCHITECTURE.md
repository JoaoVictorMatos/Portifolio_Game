# 📋 Documentação do Projeto - Landing Game Portfolio

## Visão Geral

Um portfólio interativo desenvolvido com **React** que simula um jogo 8-bits onde o usuário se move através de estágios, encontrando diferentes seções (Sobre, Skills, Projetos, Contato).

## Estrutura de Arquivo

```
src/
├── components/
│   ├── Cards/
│   │   ├── ProjectCard.jsx          # Card reutilizável para projetos
│   │   ├── ProjectCard.module.css
│   │   ├── SkillCard.jsx            # Card reutilizável para skills
│   │   └── SkillCard.module.css
│   ├── GameBackground/              # Fundo paralax do jogo
│   ├── LandingPage/                 # Página inicial
│   ├── Modals/
│   │   └── ContentModal.jsx         # Modal dinâmico de conteúdo
│   ├── Player/                      # Componente do skate/personagem
│   ├── Sections/                    # Seções de conteúdo
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── ContactSection.jsx
│   └── StageMarker/                 # Marcadores de estágios
├── data/
│   ├── projectsData.js              # Projetos e mapStages
│   ├── aboutData.js                 # Info sobre o desenvolvedor
│   ├── skillsData.js                # Skills organizadas por categoria
│   └── contactData.js               # Informações de contato
├── hooks/
│   └── useGameControls.js           # Lógica de controles e proximidade
├── pages/
│   ├── MainGame.jsx                 # Página principal do jogo
│   └── LandingPage.jsx              # Redirecionado para componente
├── styles/
│   └── colors.css                   # Variáveis de cores
├── App.jsx                          # Componente raiz
└── main.jsx
```

## Componentes Principais

### ProjectCard

- Reutilizável para exibir projetos de forma limpa
- Props: `project`, `isHighlighted`
- Exibe: título, descrição, tecnologias, links GitHub/Demo

### SkillCard

- Exibe skill com barra de progresso visual
- Props: `skill`, `animated`
- Inclui ícone, nome e nível de proficiência

### ContentModal

- Modal dinâmico que renderiza diferentes seções
- Switch baseado em `stage.id`
- Suporta ESC para fechar e click outside

## Dados

### projectsData.js

- Array de projetos com (id, title, description, technologies, github, demo)
- mapStages: 4 estágios principais (about, skills, projects, contact)

### aboutData.js

- Informações profissionais do desenvolvedor
- Highlights com ícones e descrições

### skillsData.js

- Organizado por categorias: frontend, backend, tools, soft skills
- Cada skill tem: name, level (0-100), icon

### contactData.js

- Redes sociais e emails
- Estrutura de contatos com links

## Hooks Customizados

### useGameControls

- `useKeyboardControls`: Movimento com setas do teclado
- `useStageProximity`: Detecta estágios próximos (threshold = 3)

## Estilo

- CSS Modules para encapsulamento de estilos
- Tema dark com gradientes cyberneticos
- Cores via variáveis CSS (`--color-blue`, `--color-cyan`, etc)
- Responsivo para desktop, tablet e mobile

## Responsividade

- Mobile-first approach
- Breakpoint principal: 768px
- Elementos adaptativos com `auto-fit`, `minmax` no grid
- Touch-friendly buttons e interactions

## Performance

- React.memo em componentes puros quando necessário
- Lazy loading para sections (Suspense)
- Otimização de re-renders com useCallback
- CSS transitions em vez de JS animations quando possível

## Fluxo de Usuário

1. **LandingPage**: Apresentação inicial com botão "Iniciar Jogo"
2. **MainGame**: Controles para mover o skate
3. **Estágios**: Ao se aproximar (threshold 3), modal abre com conteúdo
4. **Interação**: Espaço (desktop) ou botão (mobile) para abrir stage
5. **Modal**: Conteúdo específico, ESC para fechar

## Próximas Melhorias Sugeridas

- [ ] Adicionar transições suaves entre stages
- [ ] Implementar som/música de fundo
- [ ] Adicionar animação de "boss fight" ao completar porfolio
- [ ] Sistema de "achievements" ou badges
- [ ] Dark/Light mode toggle
- [ ] Suporte a múltiplos idiomas
- [ ] Otimização de imagens com lazy loading
- [ ] PWA (Progressive Web App)

## Tecnologias Utilizadas

- **React 18+**
- **Vite** (build tool)
- **CSS Modules** (escoping)
- **JavaScript ES6+**

## Como Contribuir

1. Manter estrutura de pastas organizada
2. Usar CSS Modules para novos componentes
3. Documentar novos hooks e componentes
4. Testar responsividade em múltiplos dispositivos
5. Seguir padrão de nomenclatura (camelCase para funções, PascalCase para componentes)
