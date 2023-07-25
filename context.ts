import { createContext, useContext } from 'react';

interface AppLoaderContext {
  show(): void;
  error(error: any, tryAgain: () => void): void;
  hide(): void;
}

export const AppLoaderContext = createContext<AppLoaderContext>({
  show: () => null,
  error: () => null,
  hide: () => null
});

export function useAppLoader() {
  return useContext(AppLoaderContext);
}

export default AppLoaderContext;
