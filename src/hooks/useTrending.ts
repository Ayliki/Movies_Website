import { useEffect, useState } from "react";
import type { All } from "../types/types";
import { fetchTrending } from "../api/tmdb";

export function useTrending(page = 1) {
    const [trending, setTrending] = useState<All[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchTrending(page)
            .then(setTrending)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [page]);

    return { trending, loading, error };
}