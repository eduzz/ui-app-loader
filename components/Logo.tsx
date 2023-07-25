import { ReactNode } from 'react';

import cx from '../utils/cx';

interface LogoProps {
  logo?: ReactNode | string;
  logoDark?: ReactNode | string;
}

const Logo = ({ logo, logoDark }: LogoProps) => {
  return (
    <div className='uizz-ap-mb-5 uizz-ap-max-h-[90px] uizz-ap-max-w-[150px]'>
      {!logo && !logoDark && (
        <svg xmlns='http://www.w3.org/2000/svg' width={150} viewBox='0 0 123.63 32.06'>
          <g>
            <path
              d='M47.95 21.23h-2v-14h2.2l4.98 11.34 4.96-11.34h2.18v14h-1.98V11.11l-4.44 10.12h-1.46l-4.44-10.12v10.12ZM69.71 11.23h1.96l-5.8 14h-1.86l1.76-4.2-3.96-9.8h2.08l2.9 7.58 2.92-7.58ZM82.57 8.91h-7.36v4.38h5.52v1.68h-5.52v4.58h7.36v1.68h-9.36v-14h9.36v1.68ZM92.33 12.93l-.22.06V6.83h1.9v14.4h-1.72l-.14-1.5c-.33.45-.78.84-1.35 1.16-.57.32-1.26.48-2.07.48-.91 0-1.7-.21-2.37-.64-.67-.43-1.2-1.03-1.58-1.8s-.57-1.67-.57-2.7.19-1.93.57-2.7c.38-.77.91-1.37 1.58-1.8.67-.43 1.46-.64 2.37-.64s1.6.18 2.21.53 1.07.79 1.39 1.31Zm-6.1 3.3c0 1.03.27 1.85.8 2.48s1.25.94 2.14.94c.55 0 1.04-.13 1.48-.4.44-.27.79-.66 1.06-1.17.27-.51.4-1.13.4-1.85s-.13-1.33-.4-1.84-.62-.9-1.06-1.17c-.44-.27-.93-.41-1.48-.41-.88 0-1.59.31-2.13.94s-.81 1.45-.81 2.48ZM104.83 21.23h-1.72l-.14-1.18c-.32.43-.72.75-1.21.98-.49.23-1.03.34-1.63.34-.77 0-1.45-.16-2.02-.49s-1.02-.81-1.33-1.44c-.31-.63-.47-1.42-.47-2.37v-5.84h1.9v5.6c0 .92.19 1.62.57 2.1.38.48.96.72 1.73.72s1.36-.25 1.79-.74c.43-.49.65-1.23.65-2.2v-5.48h1.88v10ZM114.45 12.77l-5.3 6.78h5.32v1.68h-7.68v-1.54l5.32-6.78h-5.3v-1.68h7.64v1.54ZM123.61 12.77l-5.3 6.78h5.32v1.68h-7.68v-1.54l5.32-6.78h-5.3v-1.68h7.64v1.54Z'
              className='uizz-ap-fill-black dark:uizz-ap-fill-white'
            />
            <path d='M18.21 1.94h13.05v28.19H18.21z' className='uizz-ap-fill-eduzz-primary' />
            <circle cx='18.21' cy='16.03' r='16.03' className='uizz-ap-fill-eduzz-secondary' />
            <path
              d='M7.39 27.42h9.77c1.56 0 2.82-1.26 2.82-2.82s-1.26-2.84-2.82-2.84H4.03s-.02-.05-.03-.08c-.3-.88-.53-1.79-.7-2.74h7.41c1.56 0 2.82-1.26 2.82-2.82s-1.26-2.82-2.82-2.82H3.3c.17-.94.4-1.87.71-2.74 0-.03.02-.05.03-.08h13.13c1.56 0 2.82-1.26 2.82-2.82s-1.26-2.82-2.82-2.82H7.38a16.9 16.9 0 0 1 3.41-2.9H0v28.19h10.53c-1.15-.78-2.21-1.68-3.14-2.71Z'
              className='uizz-ap-fill-eduzz-primary'
            />
          </g>
        </svg>
      )}

      <div className={cx({ 'dark:uizz-ap-hidden': logoDark })}>
        {typeof logo === 'string' ? <img src={logo} className='uizz-ap-max-h-[90px] uizz-ap-max-w-[150px]' /> : logo}
      </div>

      <div className={cx({ 'uizz-ap-hidden dark:uizz-ap-block': logo })}>
        {typeof logoDark === 'string' ? (
          <img src={logoDark} className='uizz-ap-max-h-[90px] uizz-ap-max-w-[150px]' />
        ) : (
          logoDark
        )}
      </div>
    </div>
  );
};

export default Logo;
