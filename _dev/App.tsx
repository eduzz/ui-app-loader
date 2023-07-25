import { useEffect } from 'react';

import { useAppLoader } from '../context';

function App() {
  const appLoadeer = useAppLoader();

  useEffect(() => {
    setTimeout(() => {
      appLoadeer.hide();
    }, 1000);
  }, []);

  return (
    <>
      <div>Teste</div>
    </>
  );
}

export default App;
