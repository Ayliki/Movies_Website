import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api/tmdb";
import type { Movie } from "../types/types";

export function useMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetchPopularMovies()
            .then(setMovies)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { movies, loading, error };
}