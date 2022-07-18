import { useState, useEffect } from "react";
import styles from "./favorites.module.css";

function Favorites() {
    useEffect(() => {
        // on page load...
        // check if we have any favorites stored in local storage
        // if yes, pull them -> set them in redux favorites
        // if no, do nothing
    }, []);

    // if favorites, render them out
    // if (favorites.data?.length) {
    // return the favorites
    // }
    // if not, leave empty
    return <div />;
}

export default Favorites;
