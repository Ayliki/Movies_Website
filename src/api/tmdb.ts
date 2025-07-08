import type { All, Movie, TvShow } from "../types/types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

export async function fetchPopularMovies(): Promise<Movie[]> {
    if (!API_KEY) {
        throw new Error('API key is undefined – check your .env and restart dev server');
    }
    const res = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.results;
}

export async function fetchTrending(): Promise<All[]> {
    if (!API_KEY) {
        throw new Error('API key is undefined - check your .env and restart dev server');
    }
    const res = await fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}&language=en-US&originial_language=en`);
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.results;
}

export async function fetchPopularTvShows(): Promise<TvShow[]> {
    if (!API_KEY) throw new Error('API key is undefined - check your .env and restart dev server');
    const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.results;
}

