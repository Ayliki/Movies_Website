import { useEffect, useState } from "react";
import type { All, FavoriteBody } from "../types/types";
import { fetchFavoriteMovies, fetchFavoriteTvShows, toggleFavorite } from "../api/tmdb";

const STORAGE_KEY = 'favorites';

export function useFavorites(sessionId: string | null, accountId: number | null) {
    const [favorites, setFavorites] = useState<All[]>([]);


    // LocalStorage helpers
    const readLocal = (): All[] => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

    const writeLocal = (list: All[]) => localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

    const addLocal = (item: All) => {
        const list = [...readLocal(), item];
        writeLocal(list);
        setFavorites(list);
    }

    const removeLocal = (id: number) => {
        const list = readLocal().filter((m) => m.id !== id);
        writeLocal(list);
        setFavorites(list);
    }

    useEffect(() => {
        if (sessionId && accountId !== null) {
            (async () => {
                const [moviesRes, tvRes] = await Promise.all([
                    fetchFavoriteMovies(accountId, sessionId),
                    fetchFavoriteTvShows(accountId, sessionId),
                ]);
                const combined = [...moviesRes.results, ...tvRes.results];
                writeLocal(combined);
                setFavorites(combined);
            })();
        } else {
            setFavorites(readLocal());
        }
    }, [sessionId, accountId]);


    // Public API
    const addFavorite = async (item: All) => {
        if (sessionId && accountId !== null) {
            const body: FavoriteBody = {
                media_type: 'title' in item ? 'movie' : 'tv',
                media_id: item.id,
                favorite: true,
            };
            await toggleFavorite(body, sessionId, accountId);
            const updated = [...favorites, item];
            writeLocal(updated);
            setFavorites(updated);
        } else {
            addLocal(item);
        }
    };

    const removeFavorite = async (item: All) => {
        if (sessionId && accountId !== null) {
            const body: FavoriteBody = {
                media_type: 'title' in item ? 'movie' : 'tv',
                media_id: item.id,
                favorite: false,
            };
            await toggleFavorite(body, sessionId, accountId);
            const updated = favorites.filter(m => m.id !== item.id);
            writeLocal(updated);
            setFavorites(updated);
        } else {
            removeLocal(item.id);
        }
    };

    return { favorites, addFavorite, removeFavorite };
}