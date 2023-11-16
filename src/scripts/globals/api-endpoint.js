import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list?language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
