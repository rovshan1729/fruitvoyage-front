import api from './api'

export const getNews = async (lang) => {
  const res = await api.get("news/", {
    headers: {
      "content-language": lang,
      "accept-language": lang
    }
  });
  return res.data;
};

export const getNewsById = async (id, lang) => {
  const res = await api.get(`news/${id}/`, {
    headers: {
      "content-language": lang,
      "accept-language": lang
    }
  });
  return res.data;
};
