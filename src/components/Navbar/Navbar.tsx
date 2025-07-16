import appLogo from "../../assets/app_logo.svg";
import profileIcon from "../../assets/profile_icon.svg";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [q, setQ] = useState("");
    const nav = useNavigate();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = q.trim();
        if (trimmed) nav(`/search?q=${encodeURIComponent(trimmed)}`);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoAndLinks}>
                <Link to="/" className={styles.logoLink}>
                    <img src={appLogo} alt="App Logo" className={styles.logo} />
                </Link>
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="/movies" className={styles.link}>Movies</Link>
                <Link to="/tvshows" className={styles.link}>Tv Shows</Link>
                <Link to="/favorites" className={styles.link}>Favorites</Link>
            </div>

            <div className={styles.actions}>
                <form onSubmit={onSubmit} className={styles.searchForm}>
                    <input
                        type="text"
                        placeholder="Search…"
                        value={q}
                        onChange={e => setQ(e.target.value)}
                        className={styles.searchInput}
                    />
                </form>
                <Link to="/profile" className={styles.profileLink}>
                    <img src={profileIcon} alt="Profile" className={styles.profileIcon} />
                </Link>
            </div>
        </nav>
    );
}
