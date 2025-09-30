import axios from 'axios';


export const createUrlCurta = async (urlLonga, recaptchaToken) => {
  const { data } = await axios.post(`${process.env.VITE_API_URL}/shorten`, { 
    url: urlLonga,
    recaptchaToken 
  });
  return data;
};
