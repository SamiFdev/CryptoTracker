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
import { MdClear } from "react-icons/md";
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
                                    className={styles.viewCoinButton}
                                    onClick={() => coinFetchFromFavs(coin)}
                                >
                                    <AiOutlineSearch
                                        className={styles.buttonTarget}
                                        color="white"
                                    />
                                </span>
                                <span
                                    className={styles.removeFavoriteButton}
                                    onClick={() => removeFavorite(coin)}
                                >
                                    <MdClear
                                        className={styles.buttonTarget}
                                        color="black"
                                    />
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
                <span
                    onClick={clearFavorites}
                    className={styles.clearFavsButton}
                >
                    <BsTrash color="#BBBDF6" />
                </span>
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
