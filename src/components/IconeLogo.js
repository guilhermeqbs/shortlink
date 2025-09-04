import { useState, useEffect } from "react";

const IconeLogo = () => {
    const [logo, setLogo] = useState("encurtador/link");
    const [mostrarCursor, setMostrarCursor] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Fade in inicial
        setTimeout(() => setIsVisible(true), 100);

        const sequenciaTextos = [
            "encurtador/link",
            "encurtado/lin",
            "encurtad/li",
            "encurta/l",
            "encurt/*",
            "encur/*",
            "encu/*",
            "enc/*",
            "en/*",
            "e/*"
        ];

        // Cursor piscando
        const intervaloCursor = setInterval(() => {
            setMostrarCursor(prev => !prev);
        }, 600);

        // Usar map para criar todos os timeouts de uma vez
        const timeouts = sequenciaTextos.map((texto, index) => {
            return setTimeout(() => {
                setLogo(texto);
                
                // Para o cursor quando chegar no último texto
                if (index === sequenciaTextos.length - 1) {
                    clearInterval(intervaloCursor);
                    setMostrarCursor(false);
                }
            }, 1000 + (400 * index)); // Aguarda 1s antes de começar, depois 400ms entre cada mudança
        });

        // Cleanup - limpa todos os timeouts e intervalos
        return () => {
            clearInterval(intervaloCursor);
            timeouts.forEach(timeout => clearTimeout(timeout));
        };
    }, []);

    return (
        <div className={`
            text-center 
            transform transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
        `}>
            <div className="relative inline-block">
                <p className="
                    text-[10rem] 
                    font-leckerli 
                    text-nowrap 
                    bg-gradient-to-r from-blue-100 via-white to-blue-200 
                    bg-clip-text 
                    text-transparent
                    drop-shadow-2xl
                    transition-all 
                    duration-300 
                    ease-in-out
                    hover:scale-105
                    filter 
                    brightness-110
                ">
                    {logo}
                    <span className={`
                        inline-block
                        transition-all duration-200 ease-in-out
                        ${mostrarCursor ? 'opacity-100 scale-100' : 'opacity-10 scale-95'}
                        text-white
                        animate-pulse
                        drop-shadow-lg
                    `}>
                        |
                    </span>
                </p>
                
                <div className="
                    absolute inset-0 
                    bg-gradient-to-r from-transparent via-white/5 to-transparent 
                    animate-pulse 
                    rounded-lg
                    pointer-events-none
                "></div>
            </div>
        </div>
    );
}; 

export default IconeLogo;
