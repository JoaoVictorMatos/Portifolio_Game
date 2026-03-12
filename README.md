# Portfólio de João Victor - Desenvolvedor Web

Um portfólio interativo inspirado em jogos de plataforma retrô 2D, desenvolvido em React com Vite.

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **Vite** - Build tool e servidor de desenvolvimento
- **CSS3** - Animações e responsividade
- **JavaScript (ES6+)** - Lógica da aplicação

## 📦 Instalação

```bash
# Clone ou faça download do projeto
cd Landing_Game

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O aplicativo abrirá automaticamente em `http://localhost:5173`

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── LandingPage/    # Página inicial com tema de jogo
│   ├── GameMap/        # Mapa interativo com personagem
│   ├── Modals/         # Modais para seções
│   ├── Player/         # Componente do personagem
│   └── ...
├── pages/              # Páginas completas
├── data/               # Dados mockados
├── hooks/              # Custom hooks
├── styles/             # Estilos globais
├── utils/              # Funções auxiliares
├── assets/             # Imagens, ícones
├── App.jsx            # Componente principal
└── main.jsx           # Ponto de entrada
```

## ⌨️ Controles

### Desktop

- **Setas esquerda/direita** - Mover personagem
- **Espaço** - Interagir com fases
- **Clique do mouse** - Interagir diretamente com fases

### Mobile

- **Botões de navegação** - Mover personagem
- **Toque em fases** - Interagir

## 🎮 Seções do Portfólio

1. **Landing Page** - Apresentação inicial com tema de jogo
2. **Mapa Interativo** - Navegação pelo portfólio
3. **Sobre Mim** - Apresentação profissional
4. **Habilidades** - Stack de tecnologias
5. **Projetos** - Portfolio de trabalhos
6. **Contato** - Links e CTA

## 🎨 Personalização

### Dados Mockados

Edite os arquivos em `src/data/`:

- `projectsData.js` - Adicione seus projetos
- `skillsData.js` - Atualize suas habilidades
- `contactData.js` - Seus links de contato
- `aboutData.js` - Sua apresentação profissional

### Cores e Temas

Edite `src/styles/colors.css` para customizar a paleta

### Personagem

Substitua a implementação do componente `Player` para usar sua própria arte

## 🚀 Deploy

```bash
# Build para produção
npm run build

# Visualizar build localmente
npm run preview
```

Deploy sugerido: Vercel, GitHub Pages ou Netlify

## 💡 Decisões Técnicas

### Por que React com Vite?

- Vite oferece hot module replacement rápido
- React é ideal para UIs interativas
- Setup mínimo, sem configuração complexa

### Componentização

- Components isolados e reutilizáveis
- Responsabilidade única
- Fácil manutenção e expansão

### Estado

- Contexto React para estado global (fase atual)
- useState para estado local de componentes
- Sem dependências externas desnecessárias

### CSS Organização

- CSS Modules para componentes
- Arquivo global para variáveis e reset
- Mobile-first responsive design

### Performance

- Lazy loading de modais
- Sem animações excessivas
- Otimização de re-renders com memo quando necessário

## 📱 Responsividade

O portfólio é totalmente responsivo:

- **Desktop** - Controles de teclado, mouse e navegação fluida
- **Tablet** - Controles touch-friendly
- **Mobile** - Interface adaptada com botões de navegação

## 🎯 Funcionalidades Futuras

- [ ] Dark/Light mode toggle
- [ ] Internacionalização (i18n)
- [ ] Animações mais complexas com Framer Motion
- [ ] Blog integrado
- [ ] Formulário de contato com backend
- [ ] Analytics
- [ ] PWA (Progressive Web App)
- [ ] Efeitos de som subtis

## 📄 Licença

Projeto pessoal de portfólio.

---

**Desenvolvido com ❤️ por João Victor**
