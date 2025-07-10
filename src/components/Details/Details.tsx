import type { All } from '../../types/types';
import styles from './Details.module.css';

interface Props {
    item: All;
}

function Details({ item }: Props) {
    const isMovie = 'title' in item;

    const name = isMovie ? item.title : item.name;
    const date = isMovie ? item.release_date : item.first_air_date;

    return (
        <div className={styles.container}>
            <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={name} className={styles.poster} />
            <div className={styles.text}>
                <p className={styles.title}>{name}</p>
                <span className={styles.date}>{date}</span>
                <p className={styles.overview}>{item.overview}</p>
            </div>

        </div>
    )
}

export default Details;