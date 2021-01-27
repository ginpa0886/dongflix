import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "636e86a0e0c04e4fb6769794cc79f6e1",
    language: "en-US"
  }
});

export const moviesApit = {
  nowPlaying: () => {api.get("movie/now_playing")},
  upComing: () => {api.get("movie/upcoming")},
  popular: () => {api.get("movie/popular")}
}

export const tvApi = {
  topRate: () => {api.get("tv/top_rated")},
  popular: () => {api.get("tv/popular")},
  airingToday: () => {api.get("tv/airing_today")}
}