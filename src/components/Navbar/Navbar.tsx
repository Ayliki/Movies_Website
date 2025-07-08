import appLogo from "../../assets/app_logo.svg";
import searchBtn from "../../assets/search_icon.svg";
import profileIcon from "../../assets/profile_icon.svg";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoAndLinks}>
                <Link to="/">
                    <img src={appLogo} alt="App Logo" className={styles.img} />
                </Link>
                <Link to="/">Home</Link>
                <Link to="/Movies">Movies</Link>
                <Link to="/TvShows">Tv Shows</Link>
            </div>
            <div className={styles.actions}>
                <button className={styles.btn}><img src={searchBtn} alt="Search Button" className={styles.img} /></button>
                <Link to="/Profile"><img src={profileIcon} alt="Profile Icon" className={styles.img} /></Link>
            </div>
        </div>
    )
}

export default Navbar