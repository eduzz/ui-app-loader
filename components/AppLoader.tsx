import { ReactNode, Suspense, memo, useMemo, useState } from 'react';

import Logo from './Logo';
import AppLoaderContext from '../context';
import cx from '../utils/cx';
import errorFormatter from '../utils/errorFormatter';
import { hexToRgbVar } from '../utils/hextToRgb';

export interface LoaderProps {
  children: ReactNode;
  logo?: ReactNode | string;
  logoDark?: ReactNode | string;

  primaryColor?: `#${string}`;
  secondaryColor?: `#${string}`;
}

const AppLoader = memo(({ children, logo, logoDark, primaryColor, secondaryColor }: LoaderProps) => {
  const [show, setShow] = useState(true);
  const [error, setError] = useState<{ message: string; tryAgain: () => void } | null>(null);

  const contextValue = useMemo<AppLoaderContext>(
    () => ({
      show: () => setShow(true),
      error: (error, tryAgain) =>
        setError({
          message: errorFormatter(error),
          tryAgain: () => {
            tryAgain();
            setError(null);
          }
        }),
      hide: () => setShow(false)
    }),
    []
  );

  const cssVars = useMemo(
    () => `
      :root {
        ${
          primaryColor
            ? `
            --eduzz-theme-primary: ${primaryColor ?? '#0d2772'};
            --eduzz-theme-primary-rgb: ${hexToRgbVar(primaryColor) ?? '13, 38, 115'};
            `
            : null
        }
      
        ${
          secondaryColor
            ? `
            --eduzz-theme-secondary: ${secondaryColor ?? '#ffbc00'};
            --eduzz-theme-secondary-rgb: ${hexToRgbVar(secondaryColor) ?? '255, 188, 0'};
            `
            : null
        }
        
      }
    `,
    [primaryColor, secondaryColor]
  );

  return (
    <>
      <style>{cssVars}</style>

      <AppLoaderContext.Provider value={contextValue}>
        <Suspense>{children}</Suspense>
      </AppLoaderContext.Provider>

      <div
        className={cx(
          'uizz-ap-pointer-events-none uizz-ap-fixed uizz-ap-inset-0 uizz-ap-z-[2147483002] uizz-ap-flex uizz-ap-animate-fadeOut uizz-ap-items-center uizz-ap-justify-center uizz-ap-bg-backdrop uizz-ap-backdrop-blur',
          { '!uizz-ap-pointer-events-auto !uizz-ap-animate-fadeIn': show }
        )}
      >
        <div
          className={cx(
            'uizz-ap-mt-[-150vh] uizz-ap-flex uizz-ap-w-[200px] uizz-ap-flex-col uizz-ap-items-center uizz-ap-justify-center uizz-ap-transition-[0s,width] uizz-ap-duration-[0.5s]',
            {
              '!uizz-ap-mt-0': show,
              '!uizz-ap-w-[95vw]': error
            }
          )}
        >
          {error ? (
            <>
              <p className='uizz-ap-text-center uizz-ap-text-lg'>
                Não conseguimos carregar a aplicação
                <small className='uizz-ap-mt-1 uizz-ap-block uizz-ap-opacity-70'>{error.message}</small>
              </p>

              {error.tryAgain && (
                <button
                  onClick={error.tryAgain}
                  className='uizz-ap-mt-4 uizz-ap-h-[42px] uizz-ap-cursor-pointer uizz-ap-rounded uizz-ap-border uizz-ap-border-solid uizz-ap-border-neutral-400 uizz-ap-bg-transparent uizz-ap-px-4 uizz-ap-py-2 uizz-ap-text-sm uizz-ap-text-inherit uizz-ap-transition-[0.3s] hover:uizz-ap-border-primary hover:uizz-ap-text-primary'
                >
                  Tentar Novamente
                </button>
              )}
            </>
          ) : (
            <>
              <Logo logo={logo} logoDark={logoDark} />

              <div className='uizz-ap-relative uizz-ap-block uizz-ap-h-1 uizz-ap-w-full uizz-ap-overflow-hidden uizz-ap-bg-loader-bg'>
                <div className='uizz-ap-bg-primary'>
                  <div className='uizz-ap-absolute uizz-ap-inset-y-0 uizz-ap-left-0 uizz-ap-animate-loader uizz-ap-bg-inherit' />
                  <div className='l uizz-ap-absolute uizz-ap-inset-y-0 uizz-ap-left-0 uizz-ap-animate-loaderShort uizz-ap-bg-inherit' />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
});

export default AppLoader;
