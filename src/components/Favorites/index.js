import { useEffect } from "react";
import {
    importSavedFavorites,
    removeAllExistingFavorites,
    removeExistingFavorite,
} from "../../features/favoritesSlice";
import styles from "./favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineStar } from "react-icons/ai";

function Favorites() {
    const { data, fetched } = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(data);
        if (!data?.length && !fetched) {
            dispatch(importSavedFavorites());
        }
    }, [dispatch, data, fetched]);

    const clearFavorites = () => {
        dispatch(removeAllExistingFavorites());
    };

    const removeFavorite = () => {
        dispatch(removeExistingFavorite());
    };

    if (data?.length) {
        return (
            <section className={styles.sidePanel}>
                <h2>Favorites</h2>
                <ul>
                    {data.map((coin, index) => (
                        <li key={index}>
                            {coin}
                            <button onClick={removeFavorite}>
                                <AiOutlineStar />
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
            </section>
        );
    }
}

export default Favorites;
