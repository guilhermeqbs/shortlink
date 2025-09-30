
import { useState } from 'react';

const UrlCurtaResult = ({ urlCurta, refreshUrlCurta }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(urlCurta);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8">
      <div className="block font-medium font-primary text-2xl text-primary mb-4 text-center sm:text-left">
        Seu link encurtado
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Container do link */}
        <div className="min-h-[2.875rem] flex items-center text-blue-600 border border-gray-300 bg-white rounded-md p-2 w-full overflow-hidden">
          <a 
            href={urlCurta} 
            target="_blank" 
            rel="noopener noreferrer"
            className="truncate hover:text-blue-800 transition-colors duration-200"
            title={urlCurta}
          >
            {urlCurta}
          </a>
        </div>
        
        {/* Botões de ação */}
        <div className="flex gap-2 sm:flex-col sm:w-auto w-full">
          <button 
            className={`font-primary text-xl font-bold bg-white rounded-full px-6 py-2 shadow-md border transition-all duration-200 whitespace-nowrap flex-1 sm:w-auto ${
              copied 
                ? 'text-green-600 border-green-200 bg-green-50' 
                : 'text-blue-600 border-blue-200 hover:bg-gray-200 hover:text-blue-700 active:scale-95'
            }`}
            onClick={copyToClipboard}
            disabled={copied}
          >
            {copied ? '✓ Copiado!' : 'Copiar'}
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default UrlCurtaResult;
