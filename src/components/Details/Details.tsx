import { useFavoritesContext } from '../../context/FavoritesContext';
import type { All } from '../../types/types';
import styles from './Details.module.css';
import heartFilled from './../../assets/heartFilled.svg';
import heartOutline from './../../assets/heartOutline.svg';

interface Props {
    item: All;
}

function Details({ item }: Props) {
    const { favorites, addFavorite, removeFavorite } = useFavoritesContext();
    const isFav = favorites.some(f => f.id == item.id);

    const toggleFav = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isFav) removeFavorite(item);
        else addFavorite(item);
    };

    const isMovie = 'title' in item;
    const name = isMovie ? item.title : item.name;
    const date = isMovie ? item.release_date : item.first_air_date;

    return (
        <div className={styles.container}>
            <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={name} className={styles.poster} />

            <div className={styles.text}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{name}</h1>
                    <button
                        className={styles.favoriteBtn}
                        onClick={toggleFav}
                        aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
                    >
                        <img
                            src={isFav ? heartFilled : heartOutline}
                            alt=""
                            className={styles.favoriteIcon}
                        />
                    </button>
                </div>

                <span className={styles.date}>{date}</span>
                <p className={styles.overview}>{item.overview}</p>
            </div>
        </div>
    )
}

export default Details;