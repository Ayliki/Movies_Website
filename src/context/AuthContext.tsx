/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState, type ReactNode } from "react";
import { createRequestToken, createSession, fetchAccountDetails } from "../api/tmdb";
import type { AuthContextValue, TmdbACcount } from "../types/types";

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [account, setAccount] = useState<TmdbACcount | null>(null);


    // On mount: restore sessionId from localStorage
    useEffect(() => {
        const stored = localStorage.getItem('tmdb_session');
        if (stored) setSessionId(stored);
    }, []);

    // When sessionId changes: fetch Account details
    useEffect(() => {
        if (!sessionId) return;
        localStorage.setItem('tmdb_session', sessionId);
        fetchAccountDetails(sessionId)
            .then(setAccount)
            .catch(console.error)
    }, [sessionId]);

    const login = () => {
        createRequestToken()
            .then(token => {
                window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/login`;
            })
            .catch(console.error);
    };

    const completeLogin = async (requestToken: string) => {
        try {
            const newSessionId = await createSession(requestToken);
            setSessionId(newSessionId);
        } catch (e) {
            console.error(e);
        }
    }

    const logout = () => {
        setSessionId(null);
        setAccount(null);
        localStorage.removeItem('tmdb_session');
    };

    return (
        <AuthContext.Provider value={{ sessionId, account, login, completeLogin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}