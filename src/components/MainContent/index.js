import styles from "./mainContent.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCoin } from "../../features/singleCoinSlice";
import { importSavedFavorites } from "../../features/favoritesSlice";
// import { updateFavorites } from "../../features/favoritesSlice";
import { addNewFavorite } from "../../features/favoritesSlice";
import { removeExistingFavorite } from "../../features/favoritesSlice";
import Loader from "../Loader";
import Error from "../ErrorAlert";
import Favorites from "../Favorites";
import { AiOutlineStar } from "react-icons/ai";

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
        // dispatch addNewFavorite with argument of coin id saved in state in this component - powering the value of the input
        dispatch(addNewFavorite(searchedCoin));
    };

    const onRemoveClick = () => {
        dispatch(removeExistingFavorite(searchedCoin));
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
                {/* Use redux favorites slice to indicate if there was no data
                returned after fetch */}
                {!data?.id ? (
                    <div>Search for a valid coin</div>
                ) : (
                    <>
                        {data.id}
                        {data.current_price}
                        {favorites.includes(data.id) ? (
                            <button onClick={onRemoveClick}>
                                <AiOutlineStar className={styles.filledStar} />
                            </button>
                        ) : (
                            <button
                                onClick={onFavoriteClick}
                                className={styles.favoriteButton}
                            >
                                <AiOutlineStar />
                            </button>
                        )}
                        {/* check if data.id exists in favorites */}
                        {/* if exists -> display remove from favorites */}
                        {/* if doesnt exist -> display add to favorites */}
                    </>
                )}
            </div>
        </section>
    );
}

export default MainContent;
