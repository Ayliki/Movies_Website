import { useState } from "react";
import MediaCard from "../../components/MediaCard/MediaCard";
import { useFavoritesContext } from "../../context/FavoritesContext";
import styles from './Favorites.module.css';
import type { All } from "../../types/types";
import Modal from "../../components/Modal/Modal";
import Details from "../../components/Details/Details";

function Favorites() {
    const { favorites } = useFavoritesContext();
    const [selected, setSelected] = useState<All | null>(null);


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Favorites</h1>

            {favorites.length === 0 ? (
                <p className={styles.message}>You have no favorites yet</p>
            ) : (
                <div className={styles.grid}>
                    {favorites.map(item => (
                        <div key={item.id}>
                            <button
                                className={styles.cardButton}
                                onClick={(() => setSelected(item))}
                            >
                                <MediaCard item={item} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {selected && (
                <Modal onClose={() => setSelected(null)}>
                    <Details item={selected} />
                </Modal>
            )}
        </div>
    )
}

export default Favorites;