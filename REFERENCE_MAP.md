# 📊 MAPA DE REFERÊNCIA - Portfólio de João Victor

## 🗂️ Onde Fazer Alterações

### Personalizando Conteúdo

```
🎯 MEUS DADOS
  └─ src/data/projectsData.js
      ├─ aboutData          👈 Sua apresentação
      ├─ contactData        👈 Email, LinkedIn, GitHub, WhatsApp
      ├─ projectsData       👈 Seus projetos
      ├─ skillsData         👈 Suas habilidades
      └─ mapStages          👈 Fases do mapa

🎨 CORES E TEMA
  └─ src/styles/colors.css
      ├─ --primary-dark, --primary-light
      ├─ --color-red, --color-blue, --color-cyan, etc
      └─ Variáveis CSS customizáveis

👤 PERSONAGEM
  └─ src/components/LandingPage/LandingPage.jsx
      └─ .character (modifique cores, formas)

  └─ src/components/Player/Player.jsx
      └─ .head, .body, .arms, .legs (customize visual)
```

---

## 🔧 COMPONENTES PRINCIPAIS

### Landing Page (Tela Inicial)

```
src/components/LandingPage/
├── LandingPage.jsx          # Componente
└── LandingPage.module.css   # Estilos
    ├─ .character           👈 Personagem animado
    ├─ .startButton         👈 Botão "Iniciar"
    └─ .backgroundLayers    👈 Efeito parallax
```

**Customizar:** Edite cores em `.character` para mudar personagem

---

### Game Map (Mapa Principal)

```
src/pages/MainGame.jsx
├─ Estado do jogo
│   ├─ playerPosition      (0-100%)
│   ├─ activeStage        (qual seção aberta)
│   └─ isMoving           (animação)
│
├─ Componentes filhos:
│   ├─ GameBackground     (fundo com parallax)
│   ├─ Player             (personagem)
│   ├─ StageMarker (x4)   (bandeiras de fase)
│   └─ ContentModal       (caixas de conteúdo)
```

---

### Controles

```
src/hooks/useGameControls.js
├─ useKeyboardControls()  📌 Setas ← →
├─ useStageProximity()    📌 Detecta proximidade
└─ useParallax()          📌 Efeito de câmera
```

---

## 📝 SEÇÕES DE CONTEÚDO

### Sobre Mim

```
src/components/Sections/AboutSection.jsx
├─ aboutData.introduction
├─ aboutData.mainText
├─ aboutData.highlights
└─ CSS responsivo em AboutSection.module.css
```

### Habilidades

```
src/components/Sections/SkillsSection.jsx
├─ skillsData (4 categorias)
│   ├─ frontend
│   ├─ backend
│   ├─ tools
│   └─ soft skills
└─ Barra visual de progresso (skill.level %)
```

### Projetos

```
src/components/Sections/ProjectsSection.jsx
├─ projectsData (array de projetos)
├─ Cards expansíveis
├─ Stack de tecnologias
├─ Links para GitHub/Demo
└─ Animação de expansão suave
```

### Contato

```
src/components/Sections/ContactSection.jsx
├─ contactData
├─ Links clicáveis
├─ Ícones (📧 💼 🐙 📱)
└─ CTA destacado
```

---

## 🚀 FLUXO DA APLICAÇÃO

```
App.jsx
├─ gameStarted = false → LandingPage
│   │
│   └─ [Clique "INICIAR JOGO"]
│
├─ gameStarted = true → MainGame
│   │
│   ├─ [Pressione ← →]
│   │   └─ playerPosition muda
│   │
│   ├─ [Chegue perto de fase]
│   │   └─ StageMarker mostra aura
│   │
│   ├─ [Clique em fase]
│   │   └─ activeStage = stage
│   │       └─ ContentModal abre
│   │           └─ Exibe seção apropriada
│   │
│   └─ [Feche modal]
│       └─ activeStage = null
│           └─ Volta ao mapa
```

---

## 🎯 MODIFICAÇÕES COMUNS

### Adicionar Novo Projeto

```javascript
// Em src/data/projectsData.js
projectsData.push({
  id: 5,
  title: "Meu Projeto Incrível",
  shortTitle: "PROJETO",
  description: "Descrição curta",
  longDescription: "Descrição detalhada",
  technologies: ["React", "Node.js"],
  challengeSolved: "Qual foi o desafio?",
  github: "https://github.com/...",
  demo: "https://seu-projeto.com",
  image: "🚀", // Emoji da sua escolha
  stage: "Estágio 5", // Incrementar
});
```

### Adicionar Habilidade Nova

```javascript
// Em src/data/projectsData.js -> skillsData
frontend: {
  skills: [
    // ... existentes
    { name: "TypeScript", level: 80, icon: "📘" }, // 👈 Nova
  ];
}
```

### Mudar Cores Principais

```css
/* Em src/styles/colors.css */
--color-blue: #seu-azul;
--color-cyan: #seu-cyan;
--color-red: #seu-vermelho;
--color-yellow: #seu-amarelo;
```

### Adicionar Nova Fase (Seção)

```javascript
// 1. Adicione em mapStages
mapStages.push({
  id: "nova",
  title: "Nova Seção",
  position: 95,
  icon: "🎯",
  color: "#FFE66D",
  type: "section",
});

// 2. Crie src/components/Sections/NovaSection.jsx
// 3. Importe e adicione case em ContentModal.jsx
```

---

## 📦 ARQUIVOS CRÍTICOS

| Arquivo                    | Propósito        | Editar?              |
| -------------------------- | ---------------- | -------------------- |
| `src/data/projectsData.js` | Todos seus dados | ✏️ SIM               |
| `src/styles/colors.css`    | Cores e tema     | ✏️ SIM               |
| `src/App.jsx`              | Lógica principal | ⚠️ Cuidado           |
| `src/pages/MainGame.jsx`   | Mapa do jogo     | ⚠️ Cuidado           |
| `src/components/**`        | Componentes      | ✏️ SIM (criar novos) |
| `package.json`             | Dependências     | ⚠️ Deixar como tá    |
| `vite.config.js`           | Config build     | ⚠️ Deixar como tá    |

---

## 🐛 DEBUGGING

### Personagem não move?

```javascript
// Verifique em MainGame.jsx
const { moveLeft, moveRight } = useKeyboardControls(...)
console.log('playerPosition:', playerPosition)  // Deve mudar
```

### Modal não abre?

```javascript
// Em ContentModal.jsx
const renderContent = () => {
  console.log('stage.id:', stage.id)  // Verificar ID
  switch(stage.id) { ... }
}
```

### Cores não mudam?

1. Verifique se salvou o arquivo (Ctrl+S)
2. Recarregue navegador (Ctrl+R ou Cmd+R)
3. Limpe cache (Ctrl+Shift+Del se necessário)

---

## 📱 RESPONSIVIDADE

```css
/* Desktop (padrão) */
.elemento {
  display: flex;
}

/* Tablet */
@media (max-width: 768px) {
  .elemento {
    padding: 0.5rem;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .elemento {
    font-size: 0.9rem;
  }
}
```

Todos os componentes já têm breakpoints!

---

## 🎬 ANIMAÇÕES

### CSS Animations Disponíveis

```css
@keyframes float    /* Sobe e desce */
@keyframes pulse    /* Fade in/out */
@keyframes slideUp  /* Desliza para cima */
@keyframes bounce   /* Pulo */
@keyframes glow; /* Brilho */
```

### Uso

```css
.elemento {
  animation: float 3s ease-in-out infinite;
}
```

---

## 🔌 INTEGRAR COM BACKEND

Se quiser dados reais:

```javascript
// Em MainGame.jsx ou novo hook
useEffect(() => {
  fetch("https://sua-api.com/projects")
    .then((res) => res.json())
    .then(setProjects);
}, []);
```

Basta substituir dados mockados por fetch!

---

## 📊 ESTRUTURA DE DADOS

### projectsData

```javascript
{
  id: NUMBER,
  title: STRING,
  description: STRING,
  technologies: STRING[],
  github: STRING(URL),
  demo: STRING(URL),
}
```

### skillsData

```javascript
{
  [category]: {
    category: STRING,
    skills: [
      { name: STRING, level: NUMBER(0-100), icon: STRING(emoji) }
    ]
  }
}
```

### contactData

```javascript
{
  contacts: [
    {
      type: STRING,
      label: STRING,
      value: STRING,
      link: STRING(URL),
      icon: STRING(emoji),
    },
  ];
}
```

---

## ✅ PRÉ-LAUNCH CHECKLIST

- [ ] `src/data/projectsData.js` - Dados atualizados
- [ ] `src/styles/colors.css` - Cores personalizadas
- [ ] `public/favicon.ico` - Ícone da aba (opcional)
- [ ] Links de contato funcionando
- [ ] Teste em mobile
- [ ] Teste em navegadores diferentes
- [ ] `npm run build` suporta sem erros
- [ ] Documentação lida e entendida

---

## 🚀 DEPLOY

```bash
# Build
npm run build

# Vercel (recomendado)
npm install -g vercel
vercel

# Netlify
# Conectar repo no netlify.com

# GitHub Pages
npm install gh-pages
# Adicionar a package.json:
# "homepage": "https://seu-usuario.github.io/seu-repo"
# npm run build && npx gh-pages -d dist
```

---

## 📞 REFERÊNCIA RÁPIDA

```bash
npm install        # Instalar dependências
npm run dev        # Iniciar dev server
npm run build      # Build para produção
npm run preview    # Visualizar build
```

---

**Pronto? Comece editando `src/data/projectsData.js` agora! 🚀**

Quer ajuda? Consulte:

- `README.md` - Documentação completa
- `QUICKSTART.md` - Guia rápido
- `TECHNICAL_DECISIONS.md` - Decisões arquiteturais
