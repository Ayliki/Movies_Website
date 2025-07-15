import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api/tmdb";
import type { Movie } from "../types/types";

export function useMovies(page = 1) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetchPopularMovies(page)
            .then(setMovies)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [page]);

    return { movies, loading, error };
}