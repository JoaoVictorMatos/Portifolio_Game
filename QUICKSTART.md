# GUIA RÁPIDO - Portfólio de Jogo em React

## ⚡ Início Rápido

### 1. Instalação de Dependências

```bash
npm install
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

A aplicação abrirá automaticamente em `http://localhost:5173`

---

## 🎮 Como Funciona

### Landing Page (Tela Inicial)

- **O que é:** Tela de boas-vindas com tema de jogo retrô
- **Como acessar:** Aplica automáticamente ao carregar
- **Interações:**
  - Clique em "INICIAR JOGO" para começar
  - O personagem animado é responsivo

### Game Map (Mapa Principal)

- **O que é:** Cenário interativo onde você navega por fases
- **Controles Desktop:**
  - `← Seta esquerda` = Mover para esquerda
  - `→ Seta direita` = Mover para direita
  - `Clique` = Interagir com fase
- **Controles Mobile:**
  - Botões "Esquerda" e "Direita" na parte inferior
  - Toque nos marcadores de fase para interagir

### Fases Disponíveis

1. **Sobre Mim** 👨‍💻 - Apresentação profissional
2. **Habilidades** ⚡ - Stack de tecnologias
3. **Projetos** 🚀 - Portfolio de trabalhos
4. **Contato** 💌 - Informações de contato

### Navegação de Modal

- Cada fase abre um modal com conteúdo
- Clique no X ou fora do modal para fechar
- Pressione ESC para sair (desktop)

---

## ✏️ Personalizando seu Portfólio

### 1. Editar Seus Dados Pessoais

Abra: `src/data/projectsData.js`

```javascript
// Atualize seu nome
export const aboutData = {
  title: "Sobre você",
  introduction: "Sua apresentação curta",
  // ... etc
};

// Atualize seus contatos
export const contactData = {
  contacts: [
    {
      label: "Email",
      value: "seu.email@example.com",
      link: "mailto:seu.email@example.com",
      // ... etc
    },
  ],
};
```

### 2. Editar Projetos

No mesmo arquivo `projectsData.js`, modifique o array `projectsData`:

```javascript
export const projectsData = [
  {
    title: "Nome do seu projeto",
    description: "Descrição curta",
    longDescription: "Descrição detalhada",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/seu-usuario/seu-projeto",
    demo: "https://seu-projeto-demo.com",
    // ... etc
  },
];
```

### 3. Editar Habilidades

No arquivo `projectsData.js`, atualize `skillsData`:

```javascript
export const skillsData = {
  frontend: {
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Sua tecnologia", level: 90, icon: "🎯" },
    ],
  },
};
```

### 4. Customizar Cores

Abra: `src/styles/colors.css`

Modifique as variáveis CSS:

```css
:root {
  --color-red: #ff4757; /* Cor primária 1 */
  --color-blue: #40a9ff; /* Cor primária 2 */
  --color-cyan: #4ecdc4; /* Cor primária 3 */
  /* ... etc */
}
```

### 5. Personalizar Personagem

Edite `src/components/LandingPage/LandingPage.jsx` e `src/components/Player/Player.jsx`

Modifique as cores e formas:

```jsx
// Mude as cores dos componentes CSS:
background: linear-gradient(135deg, #suas-cores 0%, #suas-cores 100%);
```

---

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── GameBackground/     # Fundo parallax
│   ├── LandingPage/       # Página inicial
│   ├── Modals/            # Modais de conteúdo
│   ├── Player/            # Personagem do jogador
│   ├── Sections/          # Conteúdo das fases
│   │   ├── AboutSection
│   │   ├── ContactSection
│   │   ├── ProjectsSection
│   │   └── SkillsSection
│   └── StageMarker/       # Marcadores de fases
├── data/                  # Dados mockados
│   └── projectsData.js
├── hooks/                 # Custom hooks
│   └── useGameControls.js
├── pages/                 # Páginas
│   ├── LandingPage.jsx
│   └── MainGame.jsx
├── styles/                # Estilos globais
│   └── colors.css
├── utils/                 # Funções auxiliares
│   └── helpers.js
├── App.jsx
└── main.jsx
```

---

## 📦 Build para Produção

```bash
npm run build
```

Gera pasta `dist/` pronta para deploy.

### Deploy sugerido:

- **Vercel:** `vercel deploy`
- **Netlify:** Conectar repositório GitHub
- **GitHub Pages:** `npm run build && gh-pages -d dist`

---

## 🔧 Tecnologias Usadas

- **React 18** - UI Framework
- **Vite** - Build tool ultra-rápido
- **CSS3** - Estilos e animações
- **JavaScript ES6+** - Lógica

Nenhuma dependência desnecessária! Apenas o essencial.

---

## ⚙️ Troubleshooting

### Problema: Tela em branco

**Solução:** Limpe cache do navegador (Ctrl+Shift+Del) e recarregue

### Problema: Mensagem "Module not found"

**Solução:** Rode `npm install` novamente

### Problema: Personagem fora da tela

**Solução:** Verifique as dimensões no mobile, redimensione navegador

### Problema: CSS não está aplicando

**Solução:** Verifique se você salvou o arquivo (Ctrl+S) e recarregue

---

## 💡 Dicas Avançadas

### Adicionar Nova Fase

1. Edite `mapStages` em `projectsData.js`
2. Crie novo componente em `src/components/Sections/`
3. Adicione case em `ContentModal.jsx`

### Melhorar Performance

- Use `React.memo()` em componentes que não mudam frequentemente
- Implemente lazy loading para modais grandes
- Otimize imagens/SVGs

### Adicionar Som

- Considere biblioteca `howler.js` (leve e simples)
- Sons devem ser opcionais/silenciáveis

---

## 📚 Próximas Melhorias Sugeridas

- [ ] Dark/Light mode toggle
- [ ] Formulário de contato funcional
- [ ] Blog integrado
- [ ] Animações com Framer Motion
- [ ] PWA (offline support)
- [ ] Análise de visitantes (Google Analytics)
- [ ] Internacionalização (English/PT-BR)
- [ ] Efeitos de som subtis

---

## 📄 Suporte e Dúvidas

Se encontrar problemas:

1. Verifique o console (F12 > Console)
2. Consulte a documentação de React: https://react.dev
3. Verифуque sua versão de Node.js: `node -v` (recomendado 16+)

---

**Desenvolvido com ❤️ por João Victor**
