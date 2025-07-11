import { useState } from 'react';
import MediaCard from '../../components/MediaCard/MediaCard';
import { useAuth } from '../../hooks/useAuth';
import styles from './Profile.module.css';
import type { All } from '../../types/types';

const Profile = () => {
    const { user, sessionId, logout } = useAuth();
    const [favorites, setFavorites] = useState<All[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    return (
        <div className={styles.container}>

            {/* Header */}
            <div className={styles.header}>
                {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.name} className={styles.avatar} />
                ) : (
                    <div className={styles.avatarPlaceholder}>
                        {user?.username.charAt(0).toUpperCase()}
                    </div>
                )}
                <div className={styles.userInfo}>
                    <h1 className={styles.name}>{user?.name || user?.username}</h1>
                    <button className={styles.logoutBtn} onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>

            {/* Favorites */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Your Favorites</h2>
                {loading ? (
                    <p className={styles.message}>Loading favorites...</p>
                ) : error ? (
                    <p className={styles.message}>Error: {error}</p>
                ) : favorites.length ? (
                    <div className={styles.grid}>
                        {favorites.map(item => (
                            <MediaCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <p className={styles.empty}>You haven't favorited any movies/tv shows yet</p>
                )}
            </section>
        </div>
    )
}

export default Profile