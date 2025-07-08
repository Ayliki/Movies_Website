import MediaCard from '../components/MediaCard/MediaCard';
import { useTrending } from '../hooks/useTrending';
import styles from './../styles/Page.module.css'

export default function Home() {
    const { trending, loading, error } = useTrending();

    if (loading) {
        return <div className={styles.message}>Loading…</div>;
    }
    if (error) {
        return <div className={styles.message}>Error: {error.message}</div>;
    }

    return (
        <div className={styles.container}>
            {trending.map(item => (
                <MediaCard key={item.id} item={item} />
            ))}
        </div>
    );
}