# Eduzz UI: App Loader

Loader de aplicação padrão.

## Importação

```ts
import AppLoader, { useAppLoader } from '@eduzz/ui-app-loader';
```

## Exemplo

<img src='./example.gif' />

Coloque no momento de `createRoot` e use o lazy para aparecer o loader antes da aplicação.
Coloque o minimo de imports nesse arquivo para carregar o mais rapido possível.

```jsx
import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import AppLoader from '@eduzz/ui-app-loader'; 

const App = lazy(() => import('./App'));

createRoot(document.getElementById('app') as HTMLElement).render(
  <AppLoader>
    <App />
  </AppLoader>
);

// App.tsx
import { useEffect } from 'react';
import { useAppLoader } from '@eduzz/ui-app-loader';

function App() {
  const appLoader = useAppLoader();

  useEffect(() => {
    // Faça o que precisar ser feito e entao chame o `hide`
    appLoader.hide();
    // Caso queira aparecer novamente
    appLoader.show();
    // Se algo acontecer pode mostrar uma mensagem de erro
    appLoader.error(new Error(), () => console.log('Tente novamente'));
  }, []);

  return <div />
}

```

## Props

### AppLoader props

| prop     | tipo             | obrigatório | padrão       |
|----------|------------------|-------------|--------------|
| logo     | `url\|ReactNode` | `false`     | `Eduzz Logo` |
| logoDark | `url\|ReactNode` | `false`     | `Eduzz Logo` |
