/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactNode } from "react"
import { useAuth } from "../hooks/useAuth";
import { useFavorites } from "../hooks/useFavorites";
import type { FavoriteContextType } from "../types/types";

const FavoritesContext = createContext<FavoriteContextType | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const { sessionId, user } = useAuth();
    const accountId = user?.id ?? null;
    const { favorites, addFavorite, removeFavorite } = useFavorites(sessionId, accountId);

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoritesContext(): FavoriteContextType {
    const ctx = useContext(FavoritesContext);
    if (!ctx) {
        throw new Error('useFavoriteContext must be used within FavoritesProvider');
    }
    return ctx;
}