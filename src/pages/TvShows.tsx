import { useState } from "react";
import MediaCard from "../components/MediaCard/MediaCard";
import { useTvShows } from "../hooks/useTvShows";
import styles from './../styles/Page.module.css';
import Details from "../components/Details/Details";
import Modal from "../components/Modal/Modal";
import type { TvShow } from "../types/types";

const TvShows = () => {
    const [selected, setSelected] = useState<TvShow | null>(null);

    const { tvShows, loading, error } = useTvShows();

    if (loading) {
        return <div className={styles.message}>Loading...</div>;
    }
    if (error) {
        return <div className={styles.message}>Error: ${error.message}</div>;
    }

    return (
        <>
            <div className={styles.container}>
                {tvShows.map(tvShow => (
                    <div key={tvShow.id}>
                        <button
                            onClick={() => setSelected(tvShow)}
                            className={styles.cardButton}
                        >
                            <MediaCard key={tvShow.id} item={tvShow} />
                        </button>
                    </div>
                ))}
            </div>

            {selected && (
                <Modal onClose={() => setSelected(null)} >
                    <Details item={selected} />
                </Modal>
            )}
        </>

    )
}

export default TvShows;