import * as axios from 'axios';

axios.defaults.baseURL = 'http://newsapi.org/v2';
const sources = 'Lenta, RT';
const language = 'ru';
const apiKey = 'd88047b435d14b96b9b1b5e9f16920de';

export const newsAPI = {
  async getNews() {
    const response = await axios.get(`/everything?sources=${sources}&language=${language}&apiKey=${apiKey}`);
    return response.data;
  },
};