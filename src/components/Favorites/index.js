import { useEffect } from "react";
import {
    importSavedFavorites,
    removeAllExistingFavorites,
    removeExistingFavorite,
} from "../../features/favoritesSlice";
import styles from "./favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { fetchSingleCoin } from "../../features/singleCoinSlice";
import { savedSearch } from "../../features/singleCoinSlice";

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
                <ul className={styles.favList}>
                    {data.map((coin, index) => (
                        <li className={styles.listedFavs} key={index}>
                            <span className={styles.coinName}>{coin} </span>
                            <div className={styles.favButtons}>
                                <span
                                    className={styles.removeFavoriteButton}
                                    onClick={() => removeFavorite(coin)}
                                >
                                    <BsTrash
                                        className={styles.buttonTarget}
                                        color="black"
                                    />
                                </span>
                                <span
                                    className={styles.viewCoinButton}
                                    onClick={() => coinFetchFromFavs(coin)}
                                >
                                    <AiOutlineSearch
                                        className={styles.buttonTarget}
                                        color="white"
                                    />
                                </span>
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
