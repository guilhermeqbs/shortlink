import React, { useState } from 'react';
import UrlCurtaForm from './components/UrlCurtaForm.js';
import UrlCurtaResult from './components/UrlCurtaResult.js';
import IconeLogo from './components/IconeLogo.js';

const App = () => {
  const [urlCurta, setUrlCurta] = useState(null);

  // chamado pelo UrlCurtaForm após criar a URL curta
  const handleUrlCurtaCreated = (data) => {
    // aceita tanto { urlCurta: '...' } quanto string direta
    const value = data?.urlCurta ?? data ?? null;
    setUrlCurta(value);
  };

  const clearResult = () => setUrlCurta(null);

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-500 via-blue-800 to-blue-950 flex flex-col items-center justify-start pt-16 sm:pt-24 p-4'>
      <div className='flex flex-col items-center justify-center max-w-xl w-full'>
        <IconeLogo />
        <div className='w-full'>
          <UrlCurtaForm onUrlCurtaCreated={handleUrlCurtaCreated} />
          {urlCurta && (
            <UrlCurtaResult urlCurta={urlCurta} refreshUrlCurta={clearResult} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;