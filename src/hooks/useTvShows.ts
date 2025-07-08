import { useEffect, useState } from "react";
import type { TvShow } from "../types/types";
import { fetchPopularTvShows } from "../api/tmdb";

export function useTvShows() {
    const [tvShows, setTvShows] = useState<TvShow[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetchPopularTvShows()
            .then(setTvShows)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [])

    return { tvShows, loading, error };
}