import { useState } from 'react';
import MediaCard from '../../components/MediaCard/MediaCard';
import { useAuth } from '../../hooks/useAuth';
import styles from './Profile.module.css';
import { useFavoritesContext } from '../../context/FavoritesContext';
import Modal from '../../components/Modal/Modal';
import Details from '../../components/Details/Details';
import type { All } from '../../types/types';

const Profile = () => {
    const { user, logout } = useAuth();
    const { favorites } = useFavoritesContext();
    const [selected, setSelected] = useState<All | null>(null);


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
                {favorites.length === 0 ? (
                    <p className={styles.message}>You haven’t favorited anything yet.</p>
                ) : (
                    <div className={styles.grid}>
                        {favorites.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setSelected(item)}
                                className={styles.cardButton}
                            >
                                <MediaCard item={item} />
                            </button>

                        ))}
                    </div>
                )}
            </section>

            {selected && (
                <Modal onClose={() => setSelected(null)}>
                    <Details item={selected} />
                </Modal>
            )}
        </div>
    )
}

export default Profile