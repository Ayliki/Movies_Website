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

export interface TmdbACcount {
    id: number;
    name: string;
    username: string;
    include_adult: boolean;
    avatar?: {
        gravatar?: {
            hash: string;
        };
        tmdb?: {
            avatar_path: string | null;
        };
    };
    iso_639_1: string;
    iso_3166_1: string;
}

export interface AuthContextValue {
    sessionId: string | null;
    account: TmdbACcount | null;
    login: () => void;
    logout: () => void;
    completeLogin: (requestToken: string) => Promise<void>;
}

export interface UserInfo {
    id: number;
    name: string;
    username: string;
    avatarUrl: string | null;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export interface FavoriteBody {
    media_type: 'movie' | 'tv';
    media_id: number;
    favorite: boolean;
}

export interface FavoriteContextType {
    favorites: All[];
    addFavorite: (item: All) => Promise<void>;
    removeFavorite: (item: All) => Promise<void>;
}