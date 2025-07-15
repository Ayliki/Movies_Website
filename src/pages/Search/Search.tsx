import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import styles from "./Search.module.css";
import MediaCard from "../../components/MediaCard/MediaCard";

export default function Search() {
    const [params] = useSearchParams();
    const query = params.get("q") || "";
    const { results, loading, error } = useSearch(query);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Search Results for “{query}”
            </h1>

            {loading && <p className={styles.message}>Searching…</p>}
            {error && <p className={styles.message}>Error: {error}</p>}

            {!loading && !error && results.length === 0 && (
                <p className={styles.message}>
                    No results found for “{query}.”
                </p>
            )}

            <div className={styles.grid}>
                {results.map(item => (
                    <MediaCard key={`${item.media_type}-${item.id}`} item={item} />
                ))}
            </div>
        </div>
    );
}