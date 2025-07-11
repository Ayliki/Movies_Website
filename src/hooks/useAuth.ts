import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import type { UserInfo } from "../types/types";

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    const { account, sessionId, login, logout, completeLogin } = context;

    const user: UserInfo | null = account
        ? {
            id: account.id,
            name: account.name,
            username: account.username,
            avatarUrl:
                account.avatar?.tmdb?.avatar_path
                    ? `https://image.tmdb.org/t/p/w45${account.avatar.tmdb.avatar_path}`
                    : null,
        }
        : null;

    return { sessionId, user, login, logout, completeLogin }
}