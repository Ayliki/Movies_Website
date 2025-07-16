import { useFavoritesContext } from "../../context/FavoritesContext";
import type { All } from "../../types/types";
import styles from './MediaCard.module.css';
import heartFilled from './../../assets/heartFilled.svg';
import heartOutline from './../../assets/heartOutline.svg';

type Props = { item: All };

function MediaCard({ item }: Props) {
    const { favorites, addFavorite, removeFavorite } = useFavoritesContext();
    const isFav = favorites.some(f => f.id == item.id);

    const toggleFav = () => {
        if (isFav) removeFavorite(item);
        else addFavorite(item);
    }

    const isMovie = "title" in item;

    const title = isMovie ? item.title : item.name;
    const date = isMovie ? item.release_date : item.first_air_date;

    return (
        <div className={styles.container}>
            <button
                className={styles.favoriteBtn}
                onClick={(e) => {
                    e.stopPropagation();
                    toggleFav();
                }}
                aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
            >
                <img
                    src={isFav ? heartFilled : heartOutline}
                    alt=""
                    className={styles.favoriteIcon}
                />
            </button>

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