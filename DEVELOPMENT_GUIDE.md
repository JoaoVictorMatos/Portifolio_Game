# 🎯 Guia de Desenvolvimento - Landing Game Portfolio

## Padrões e Convenções

### Nomenclatura

```javascript
// Components (PascalCase)
const MyComponent = () => {};
export default MyComponent;

// Functions (camelCase)
const handleClick = () => {};
const calculateValue = () => {};

// Variables (camelCase)
const playerPosition = 0;
const isMoving = // CSS Classes (camelCase)
false.heroContainer.skillCard.highlightCard;
```

### Estrutura de Componente

```javascript
import React from "react";
import styles from "./MyComponent.module.css";

/**
 * Descrição clara do que o componente faz
 * @param {Object} props
 * @param {string} props.title - Descrição do prop
 * @returns {JSX.Element}
 */
const MyComponent = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default MyComponent;
```

### CSS Modules

```css
/* Use classes simples e descritivas */
.container {
  display: flex;
  gap: 1rem;
}

/* Nesting de componentes relacionados */
.header {
  padding: 1rem;
}

.headerTitle {
  font-size: 1.5rem;
}

/* Estados */
.button:hover {
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

## Boas Práticas

### Performance

1. **Memoização**: Use `React.memo` para componentes puros frequentemente re-renderizados
2. **useCallback**: Memoize funções passadas como props
3. **Lazy Loading**: Use `React.lazy` + `Suspense` para componentes pesados
4. **CSS over JS**: Prefira CSS transitions em vez de animações JavaScript

```javascript
// ❌ Evite
const handleChange = (value) => {
  setState(value)
}

<Child onChange={handleChange} />

// ✅ Faça
const handleChange = useCallback((value) => {
  setState(value)
}, [])

<Child onChange={handleChange} />
```

### Acessibilidade

```javascript
// ✅ Sempre inclua aria-labels em botões interativos
<button aria-label="Abrir menu">☰</button>

// ✅ Use role="button" em divs clicáveis
<div role="button" onClick={handleClick} tabIndex={0}>
  Click me
</div>

// ✅ Cores não como único indicador
<p className={styles.error}>❌ Erro: Campo obrigatório</p>
```

### Estado e Lógica

```javascript
// ✅ Mantenha estado simples e próximo ao uso
const [isOpen, setIsOpen] = useState(false);

// ❌ Evite estado complexo sem necessidade
const [state, setState] = useState({
  isOpen: false,
  loading: false,
  error: null,
  data: [],
});

// ✅ Use hooks customizados para lógica reutilizável
const { moveLeft, moveRight } = useGameControls();
```

### Dados

```javascript
// ✅ Mantenha dados em estrutura clara
export const projectsData = [
  {
    id: 1,
    title: 'Meu Projeto',
    description: '...',
    technologies: ['React', 'CSS']
  }
]

// ❌ Evite dados aninhados desnecessariamente
const data = {
  user: {
    projects: {
      list: {
        items: [...]
      }
    }
  }
}
```

## Adicionando um Novo Projeto

1. **Edite `src/data/projectsData.js`**:

```javascript
{
  id: 4,
  title: 'Novo Projeto',
  shortTitle: 'Novo',
  description: 'Descrição breve',
  longDescription: 'Descrição detalhada',
  technologies: ['React', 'CSS'],
  challengeSolved: 'Qual foi o desafio?',
  role: 'Desenvolvedor Frontend',
  duration: 'Período',
  github: 'https://github.com/...',
  demo: 'https://...',
  image: '🎨'
}
```

2. O projeto aparecerá automaticamente na seção Projects

## Adicionando uma Nova Habilidade

1. **Edite `src/data/skillsData.js`**:

```javascript
skills: [
  { name: "Nova Skill", level: 75, icon: "⚡" },
  // ...
];
```

2. Organise por categoria (frontend, backend, tools, soft)

## Atualizando Informações de Contato

1. **Edite `src/data/contactData.js`**:

```javascript
contacts: [
  {
    type: "new-platform",
    label: "Nova Plataforma",
    icon: "🔗",
    link: "https://...",
    display: "seu-usuario",
  },
];
```

## Testes Responsivos

```bash
# Teste em diferentes breakpoints
# Desktop: > 1024px
# Tablet: 768px - 1024px
# Mobile: < 768px

# Use DevTools do navegador
# F12 → Toggle device toolbar (Ctrl+Shift+M)
```

## Guidelines de Cores

```css
--color-blue: #40a9ff;
--color-cyan: #4ecdc4;
--color-red: #ff4757;
--color-yellow: #ffd93d;
--color-green: #2ed573;
--color-purple: #a55eea;

/* Use com parcimônia para destaque */
/* Mantenha "dark theme" como padrão */
```

## Commits Úteis

```bash
# Feature
git commit -m "feat: adicionar nova skill ao portfolio"

# Fix
git commit -m "fix: corrigir responsividade em mobile"

# Docs
git commit -m "docs: atualizar guia de desenvolvimento"

# Refactor
git commit -m "refactor: simplificar lógica de controles"
```

## Debugging Comum

### Componentnão atualiza

- Verifique se o estado mudou corretamente
- Use React DevTools para inspecionar estado
- Confirme que dependências em useEffect estão corretas

### Estilos não aplicam

- Verifique se CSS Module está importado corretamente
- Confirme que classe CSS existe no .module.css
- Inspecione no DevTools se classe está sendo aplicada

### Animações lentas

- Prefira `transform` e `opacity`
- Evite animar `width`, `height`
- Use `will-change` com moderação

## Recursos Úteis

- [React Docs](https://react.dev)
- [CSS Tricks](https://css-tricks.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Can I Use](https://caniuse.com) - Compatibilidade de browsers

---

**Última atualização**: Março 2026
**Mantido por**: João Victor Matos
