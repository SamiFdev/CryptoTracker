import styles from "./mainContent.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCoin } from "../../features/singleCoinSlice";
import { updateFavorites } from "../../features/favoritesSlice";
import Loader from "../Loader";
import Error from "../ErrorAlert";

function MainContent() {
    const [searchedCoin, setSearchedCoin] = useState([]);
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(
        (state) => state.aSearchedCoin
    );
    const { data: favorites } = useSelector((state) => state.favorites);

    const handleInputChange = (e) => {
        setSearchedCoin(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(fetchSingleCoin(searchedCoin));
    };

    const onFavoriteClick = () => {
        // on click look up local storage item
        // add new coin id to local storage item
        const newFavorites = [...favorites, data.id];
        localStorage.setItem("favoriteCoinIds", newFavorites);
        dispatch(updateFavorites(newFavorites));
    };

    // TODO
    // add styling the favorites button if the searched coin already exists in local storage/redux favorites

    return (
        <section className={styles.mainContainer}>
            {loading ? <Loader /> : null}
            {error ? <Error /> : null}
            <input
                className={styles.searchBar}
                type="text"
                required
                value={searchedCoin}
                onChange={handleInputChange}
                placeholder="Search a coin"
            />
            <button
                disabled={!searchedCoin.length || loading}
                onClick={handleSubmit}
                className={styles.submitButton}
            >
                Submit
            </button>
            <div className={styles.singleCoinDiv}>
                {/* Use redux favorites slice to indicate if there was no data returned after fetch */}
                {!data?.id ? (
                    <div>display an error message here - coin is misspelt</div>
                ) : (
                    <>
                        {data.id}
                        {data.current_price}
                        <button
                            onClick={onFavoriteClick}
                            className={styles.favoriteButton}
                        >
                            Add favorite
                        </button>
                    </>
                )}
            </div>
        </section>
    );
}

export default MainContent;
