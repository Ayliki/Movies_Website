import MediaCard from "../components/MediaCard/MediaCard";
import { useMovies } from "../hooks/useMovies";
import styles from './../styles/Page.module.css'

const Movies = () => {
    const { movies, loading, error } = useMovies();

    if (loading) {
        return <div className={styles.message}>Loading...</div>
    }
    if (error) {
        return <div className={styles.message}>Error: ${error.message}</div>
    }

    return (
        <div className={styles.container}>
            {movies.map(movie => (
                <MediaCard key={movie.id} item={movie} />
            ))}
        </div>
    );
}

export default Movies;