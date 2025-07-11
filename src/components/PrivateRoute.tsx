import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
    const { sessionId } = useAuth();

    if (!sessionId) {
        return <Navigate to="/login" replace />
    }

    return children;
}