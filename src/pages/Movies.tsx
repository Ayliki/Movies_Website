import { useState } from "react";
import MediaCard from "../components/MediaCard/MediaCard";
import { useMovies } from "../hooks/useMovies";
import styles from './../styles/Page.module.css'
import type { Movie } from "../types/types";
import Modal from "../components/Modal/Modal";
import Details from "../components/Details/Details";
import Pagination from "../components/Pagination/Pagination";

const Movies = () => {
    const [selected, setSelected] = useState<Movie | null>(null);
    const [page, setPage] = useState(1);

    const { movies, loading, error } = useMovies(page);

    if (loading) {
        return <div className={styles.message}>Loading...</div>
    }
    if (error) {
        return <div className={styles.message}>Error: ${error.message}</div>
    }

    return (
        <>
            <Pagination totalPages={20} currentPage={page} onPageChange={setPage} />

            <div className={styles.container}>
                {movies.map(movie => (
                    <div key={movie.id}>
                        <button
                            onClick={() => setSelected(movie)}
                            className={styles.cardButton}
                        >
                            <MediaCard item={movie} />
                        </button>
                    </div>

                ))}
            </div>

            <Pagination totalPages={20} currentPage={page} onPageChange={setPage} />

            {selected && (
                <Modal onClose={() => setSelected(null)} >
                    <Details item={selected} />
                </Modal>
            )}

        </>

    );
}

export default Movies;