import { useState } from "react";
import { useGoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { createUrlCurta } from "../api";

// Componente interno que usa o reCAPTCHA
const UrlCurtaFormInternal = ({ onUrlCurtaCreated }) => {
    const [urlLonga, setUrlLonga] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const cleaned = (urlLonga || "").trim();
        if (!cleaned) {
            setError("Informe um link válido");
            return;
        }

        // Verificar se o reCAPTCHA está disponível
        if (!executeRecaptcha) {
            setError("reCAPTCHA não carregado. Tente novamente.");
            return;
        }

        setLoading(true);
        try {
            // Executar reCAPTCHA
            const recaptchaToken = await executeRecaptcha('url_shortener');
            
            const result = await createUrlCurta(cleaned, recaptchaToken);
            // extrai valor de forma compatível com App.js
            const value = result?.urlCurta ?? result ?? null;
            if (typeof onUrlCurtaCreated === "function") {
                onUrlCurtaCreated(value);
            }
            //setUrlLonga("");
        } catch (err) {
            console.error("Erro ao encurtar o link:", err);
            if (err.message?.includes('reCAPTCHA')) {
                setError("Falha na verificação de segurança. Tente novamente.");
            } else {
                setError("Falha ao encurtar o link. Tente novamente.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="urlLonga" className="block font-medium font-primary text-2xl text-primary mb-4 text-center sm:text-left">
                Cole o link abaixo
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    id="urlLonga"
                    type="text"
                    value={urlLonga}
                    onChange={(e) => setUrlLonga(e.target.value)}
                    placeholder="https://example.com/link-longo"
                    disabled={loading}
                    className="border border-gray-300 text-gray-900 rounded-md p-2 w-full"
                />
                <button 
                    className="font-primary text-xl font-bold text-blue-600 bg-white rounded-full px-6 py-2 shadow-md border border-blue-200 hover:bg-gray-200 hover:text-blue-700 hover:border-black-300 active:scale-95 active:bg-blue-100 transition-all duration-200 whitespace-nowrap sm:w-auto w-full" 
                    type="submit" 
                >
                    {loading ? "Encurtando..." : "Encurtar"}
                </button>
            </div>
            {error && <p className="text-red-500 font-primary text-sm mt-2">{error}</p>}
        </form>
    );
};

// Componente principal que envolve com o provider
const UrlCurtaForm = ({ onUrlCurtaCreated }) => {
    
    const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    
    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
            <UrlCurtaFormInternal onUrlCurtaCreated={onUrlCurtaCreated} />
        </GoogleReCaptchaProvider>
    );
};

export default UrlCurtaForm;
