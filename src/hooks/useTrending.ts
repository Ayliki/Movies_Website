import { useEffect, useState } from "react";
import type { All } from "../types/types";
import { fetchTrending } from "../api/tmdb";

export function useTrending() {
    const [trending, setTrending] = useState<All[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTrending()
            .then(setTrending)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { trending, loading, error };
}