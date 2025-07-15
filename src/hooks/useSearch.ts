import { useEffect, useState } from "react";
import { searchMulti } from "../api/tmdb";
import type { All } from "../types/types";

export function useSearch(query: string) {
    const [results, setResults] = useState<All[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const controller = new AbortController();
        const signal = controller.signal;

        const timer = window.setTimeout(() => {
            setLoading(true);
            setError(null);

            searchMulti(query, { signal })
                .then(setResults)
                .catch(err => {
                    // Only treat real errors
                    if (err.name !== "AbortError") {
                        setError(err.message);
                    }
                })
                .finally(() => { setLoading(false) });
        }, 300);

        return () => {
            clearTimeout(timer);
            controller.abort();
        }
    }, [query]);

    return { results, loading, error };
}