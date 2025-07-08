import type { All } from "../../types/types";
import styles from './MediaCard.module.css';

type Props = { item: All };

function MediaCard({ item }: Props) {
    const isMovie = "title" in item;

    const title = isMovie ? item.title : item.name;
    const date = isMovie ? item.release_date : item.first_air_date;

    return (
        <div className={styles.container}>
            {item.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                    alt={title}
                    className={styles.poster}
                />
            ) : (
                <div className={styles.noPoster}>No Image</div>
            )}
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.date}>{date}</p>
            </div>

        </div>
    )
}

export default MediaCard;