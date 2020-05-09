import * as axios from 'axios';

axios.defaults.baseURL = 'http://newsapi.org/v2';
const apiKey = 'd88047b435d14b96b9b1b5e9f16920de';

export const newsAPI = {
  async getNewsResponse(newsParams) {
    const { sources, language, page, pageSize } = newsParams;
    const response = await axios.get(`/everything?sources=${sources}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`);
    return response.data;
  },
};