import { useEffect } from "react";
import {
    importSavedFavorites,
    removeAllExistingFavorites,
    removeExistingFavorite,
} from "../../features/favoritesSlice";
import styles from "./favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineStar } from "react-icons/ai";
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
                <span>Click the star to remove from favorites</span>
                <ul>
                    {data.map((coin, index) => (
                        <li key={index}>
                            {coin}
                            <button onClick={() => removeFavorite(coin)}>
                                <AiOutlineStar className={styles.favStar} />
                            </button>
                            <button onClick={() => coinFetchFromFavs(coin)}>
                                View
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={clearFavorites}>clear</button>
            </section>
        );
    } else {
        return (
            <section className={styles.sidePanel}>
                <h2>Favorites</h2>
                <span>Click the star to remove from favorites</span>
            </section>
        );
    }
}

export default Favorites;
