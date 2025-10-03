import axios from 'axios';

// Configuração universal de API
const getApiUrl = () => {
  // Vite (produção/desenvolvimento)
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return import.meta.env.VITE_API_URL;
  }
  // Fallback para outros ambientes
  return process.env.VITE_API_URL;
};

const API_URL = getApiUrl();

export const createUrlCurta = async (urlLonga, recaptchaToken) => {
  const { data } = await axios.post(`${API_URL}/shorten`, { 
    url: urlLonga,
    recaptchaToken 
  }); 
  return data;
};
