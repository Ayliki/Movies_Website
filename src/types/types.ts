export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    release_date: string;
    vote_average: number;
    media_type: 'movie';
}

export interface TvShow {
    id: number;
    poster_path: string | null;
    first_air_date: string;
    name: string;
    vote_average: number;
    media_type: 'tv';
    overview: string;
}

export type All = Movie | TvShow;