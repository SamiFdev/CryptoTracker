import { useEffect } from "react";
import {
    importSavedFavorites,
    removeAllExistingFavorites,
    removeExistingFavorite,
} from "../../features/favoritesSlice";
import styles from "./favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiOutlineSearch } from "react-icons/ai";
import { fetchSingleCoin } from "../../features/singleCoinSlice";

function Favorites() {
    const { data, fetched } = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!data?.length && !fetched) {
            dispatch(importSavedFavorites());
        }
    }, [dispatch, data, fetched]);

    const removeFavorite = (coin) => {
        dispatch(removeExistingFavorite(coin));
    };
    const clearFavorites = () => {
        dispatch(removeAllExistingFavorites());
        dispatch(importSavedFavorites());
    };
    const coinFetchFromFavs = (coin) => {
        dispatch(fetchSingleCoin(coin));
    };

    if (data?.length) {
        return (
            <section className={styles.sidePanel}>
                <h2>Favorites</h2>
                <span className={styles.helper}>
                    Click the star to remove from favorites
                </span>
                <ul className={styles.favList}>
                    {data.map((coin, index) => (
                        <li className={styles.listedFavs} key={index}>
                            <span className={styles.coinName}>{coin} </span>
                            <div className={styles.favButtons}>
                                <button
                                    className={styles.removeFavoriteButton}
                                    onClick={() => removeFavorite(coin)}
                                >
                                    <AiFillStar className={styles.favStar} />
                                </button>
                                <button
                                    className={styles.viewCoinButton}
                                    onClick={() => coinFetchFromFavs(coin)}
                                >
                                    <AiOutlineSearch />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button
                    className={styles.clearFavsButton}
                    onClick={clearFavorites}
                >
                    clear
                </button>
            </section>
        );
    } else {
        return (
            <section className={styles.sidePanel}>
                <h2>Favorites</h2>
                <span>Your favorite coins will be saved here!</span>
            </section>
        );
    }
}

export default Favorites;
