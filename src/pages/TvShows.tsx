import MediaCard from "../components/MediaCard/MediaCard";
import { useTvShows } from "../hooks/useTvShows";
import styles from './../styles/Page.module.css';

const TvShows = () => {
    const { tvShows, loading, error } = useTvShows();

    if (loading) {
        return <div className={styles.message}>Loading...</div>;
    }
    if (error) {
        return <div className={styles.message}>Error: ${error.message}</div>;
    }

    return (
        <div className={styles.container}>
            {tvShows.map(tvShow => (
                <MediaCard key={tvShow.id} item={tvShow} />
            ))}
        </div>
    )
}

export default TvShows;