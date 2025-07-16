import type { All, FavoriteBody, Movie, TmdbACcount, TvShow } from "../types/types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";


// Fetch popular movies
export async function fetchPopularMovies(page = 1): Promise<Movie[]> {
    if (!API_KEY) {
        throw new Error('API key is undefined – check your .env and restart dev server');
    }
    const res = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.results;
}

// Fetch Trending TvShows/Movies
export async function fetchTrending(page = 1): Promise<All[]> {
    if (!API_KEY) {
        throw new Error('API key is undefined - check your .env and restart dev server');
    }
    const res = await fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}&language=en-US&originial_language=en&page=${page}`);
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.results;
}


// Fetch popularTvShows
export async function fetchPopularTvShows(page = 1): Promise<TvShow[]> {
    if (!API_KEY) throw new Error('API key is undefined - check your .env and restart dev server');
    const res = await fetch(`${BASE_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.results;
}


// Create a new request token
export async function createRequestToken() {
    if (!API_KEY) throw new Error('API key is undefined - check your .env and restart dev server');
    const res = await fetch(`${BASE_URL}authentication/token/new?api_key=${API_KEY}`);
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.request_token;
}

export async function createSession(requestToken: string): Promise<string> {
    if (!API_KEY) throw new Error('API key is undefined - check your .env and restart dev server');
    const res = await fetch(`${BASE_URL}authentication/session/new?api_key=${API_KEY}`,
        {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({ request_token: requestToken }),
        }
    );
    if (!res.ok) throw new Error('Failed to create session');
    const { session_id } = await res.json();
    return session_id;
}

export async function fetchAccountDetails(sessionId: string): Promise<TmdbACcount> {
    if (!API_KEY) throw new Error('API key is undefined - check your .env and restart dev server');
    const res = await fetch(`${BASE_URL}account?api_key=${API_KEY}&session_id=${sessionId}`);
    if (!res.ok) throw new Error(`Failed to fetch account details`);
    const data = await res.json();
    return data;
}

export async function searchMulti(query: string, options?: { signal: AbortSignal }): Promise<All[]> {
    if (!API_KEY) throw new Error('API key is undefined - check your .env and restart dev server');
    const url = `${BASE_URL}search/multi?api_key=${API_KEY}` +
        `&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`;
    const res = await fetch(url, { signal: options?.signal });
    if (!res.ok) throw new Error('Search failed');
    const data = await res.json();
    return data.results;
}

export async function fetchFavoriteMovies(accountId: number, sessionId: string, page = 1): Promise<{ results: All[], totalPages: number }> {
    if (!API_KEY) throw new Error('API key is undefined - check your .env and restart dev server');
    const res = await fetch(`${BASE_URL}account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${sessionId}&language=en-US&page=${page}&sort_by=created_at.asc`);
    if (!res.ok) throw new Error(`Failed to fetch favorite movies`);
    const data = await res.json();
    return { results: data.results, totalPages: data.total_pages };
}

export async function fetchFavoriteTvShows(accountId: number, sessionId: string, page = 1): Promise<{ results: All[], totalPages: number }> {
    if (!API_KEY) throw new Error('API key is undefined - check your .env and restart dev server');
    const res = await fetch(`${BASE_URL}account/${accountId}/favorite/tv?api_key=${API_KEY}&session_id=${sessionId}&language=en-US&page=${page}&sort_by=created_at.asc`);
    if (!res.ok) throw new Error(`Failed to fetch favorite TV`);
    const data = await res.json();
    return { results: data.results, totalPages: data.total_pages };
}

export async function toggleFavorite(body: FavoriteBody, sessionId: string, accountId: number): Promise<void> {
    const res = await fetch(
        `${BASE_URL}account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        }
    );
    if (!res.ok) throw new Error(`Failed to toggle favorite`);
}