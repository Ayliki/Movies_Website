import { useEffect, useState } from "react";
import type { TvShow } from "../types/types";
import { fetchPopularTvShows } from "../api/tmdb";

export function useTvShows(page = 1) {
    const [tvShows, setTvShows] = useState<TvShow[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetchPopularTvShows(page)
            .then(setTvShows)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [page])

    return { tvShows, loading, error };
}