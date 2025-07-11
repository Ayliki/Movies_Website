import styles from './Login.module.css';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Login() {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const { sessionId, login, completeLogin } = useAuth();

    useEffect(() => {
        if (sessionId) {
            navigate('/profile', { replace: true });
        }
    }, [sessionId, navigate]);

    useEffect(() => {
        const token = params.get('request_token');
        const approved = params.get('approved');

        if (token && approved === 'true') {
            completeLogin(token).then(() => {
                navigate('/profile', { replace: true });
            });
        }
    }, [params, completeLogin, navigate]);

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <button className={styles.loginBtn} onClick={login}>
                Login with TMDB
            </button>
        </div>
    )
}

export default Login;