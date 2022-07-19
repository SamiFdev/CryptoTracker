import { useState, useEffect } from "react";
import { updateFavorites } from "../../features/favoritesSlice";
import styles from "./favorites.module.css";
import { useDispatch, useSelector } from "react-redux";

function Favorites() {
    const { data } = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    useEffect(() => {
        const userStoredCoins = localStorage.getItem("favoriteCoinIds");
        // NOTES:
        // Convert local storage item from a string to an array
        // get that array to redux
        const favArray = userStoredCoins.split(",");

        // on page load...
        // check if we have any favorites stored in local storage
        if (userStoredCoins) {
            dispatch(updateFavorites(favArray));
        }
        // if yes, pull them -> set them in redux favorites
        // if no, do nothing
    }, [dispatch]);

    // if favorites, render them out
    if (data?.length) {
        // return the favorites
        // }
        // if not, leave empty
        return (
            <section className={styles.sidePanel}>
                <h2>Favorites</h2>
                <ul>
                    {data.map((coin, index) => (
                        <li key={index}>{coin}</li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default Favorites;
