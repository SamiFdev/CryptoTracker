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
    const { data } = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!data?.length) {
            dispatch(importSavedFavorites());
        }
    }, [dispatch, data]);
    const clearFavorites = () => {
        dispatch(removeAllExistingFavorites());
        dispatch(importSavedFavorites());
    };
    const removeFavorite = () => {
        dispatch(removeExistingFavorite());
        dispatch(importSavedFavorites());
    };

    // if favorites, render them out
    if (data?.length) {
        // return the favorites
        // }
        // if not, leave empty
        console.log("favorites", data);
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
