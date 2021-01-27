import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "636e86a0e0c04e4fb6769794cc79f6e1",
    language: "en-US"
  }
});

api.get("tv/popular");

export default api;