import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? '/api/' 
    : 'http://localhost:5000/api/',
});

export const createUrlCurta = async (urlLonga, recaptchaToken) => {
  try {
    const response = await api.post('/shorten', { 
      url: urlLonga,
      recaptchaToken: recaptchaToken 
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar URL:', error);
    throw error;
  }
};


export default api;
