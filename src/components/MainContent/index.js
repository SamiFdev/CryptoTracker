import styles from "./mainContent.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCoin } from "../../features/singleCoinSlice";
import { addNewFavorite } from "../../features/favoritesSlice";
import { removeExistingFavorite } from "../../features/favoritesSlice";
import Loader from "../Loader";
import Error from "../ErrorAlert";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
// import { savedSearch } from "../../features/singleCoinSlice";

function MainContent() {
    const [searchedCoin, setSearchedCoin] = useState([]);
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(
        (state) => state.aSearchedCoin
    );
    const { data: favorites } = useSelector((state) => state.favorites);

    const savedSearch = data.id;

    const handleInputChange = (e) => {
        setSearchedCoin(e.target.value);
    };
    console.log("test", savedSearch);

    const handleSubmit = () => {
        dispatch(fetchSingleCoin(searchedCoin));
        setSearchedCoin("");
    };

    const onFavoriteClick = () => {
        // dispatch addNewFavorite with argument of coin id saved in state in this component - powering the value of the input
        dispatch(addNewFavorite(data.id));
    };

    const onRemoveClick = () => {
        dispatch(removeExistingFavorite(data.id));
    };

    return (
        <div className={styles.mainContainer}>
            {loading ? <Loader /> : null}
            {error ? <Error /> : null}
            <div className={styles.searchField}>
                <input
                    className={styles.searchBar}
                    type="text"
                    required
                    value={searchedCoin}
                    onChange={handleInputChange}
                    placeholder={savedSearch || "Search a coin!"}
                />
                <button
                    disabled={!searchedCoin.length || loading}
                    onClick={handleSubmit}
                    className={styles.submitButton}
                >
                    Search
                </button>
            </div>
            <div className={styles.singleCoinDiv}></div>
            {!data?.id ? (
                <div className={styles.directions}>
                    {" "}
                    Search for a valid coin!
                </div>
            ) : (
                <>
                    <div className={styles.coinCard}>
                        <div className={styles.coinCardDisplay}>
                            <span className={styles.coinNameForCard}>
                                {data.id}
                            </span>
                            <img
                                className={styles.coinPicForCard}
                                src={data.image}
                                alt="coin"
                            ></img>
                            <span className={styles.coinPriceForCard}>
                                $ {data.current_price}
                            </span>
                            <span className={styles.lastTwentyFour}>
                                Last 24 hours
                            </span>
                            <div className={styles.priceTrends}>
                                <span className={styles.highTwentyFour}>
                                    <AiOutlineArrowUp color="green" /> $
                                    {data.high_24h}
                                </span>
                                <span className={styles.lowTwentyFour}>
                                    <AiOutlineArrowDown color="red" /> $
                                    {data.low_24h}
                                </span>
                            </div>
                        </div>
                        {favorites.includes(data.id) ? (
                            <span
                                onClick={onRemoveClick}
                                className={styles.favoriteButton}
                            >
                                <MdFavorite className={styles.filledHeart} />
                            </span>
                        ) : (
                            <span
                                onClick={onFavoriteClick}
                                className={styles.favoriteButton}
                            >
                                <MdFavorite className={styles.emptyHeart} />
                            </span>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default MainContent;
