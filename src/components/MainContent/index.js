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

    // const savedSearch = data.id;

    const handleInputChange = (e) => {
        setSearchedCoin(e.target.value);
    };

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
                    placeholder={data?.id || "Search a coin!"}
                />
                <button onClick={handleSubmit} className={styles.submitButton}>
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
                            <div className={styles.coinIdentity}>
                                <img
                                    className={styles.coinPicForCard}
                                    src={data.image}
                                    alt="coin"
                                ></img>
                                <span className={styles.coinNameForCard}>
                                    {data.id}
                                </span>
                            </div>
                            <span className={styles.coinSymbol}>
                                ({data.symbol})
                            </span>

                            <span className={styles.coinPriceForCard}>
                                Current Price: $ {data.current_price}
                            </span>
                            <div className={styles.marketInfoContainer}>
                                <span className={styles.marketVolume}>
                                    Total Volume: {data.total_volume}
                                </span>
                                <span className={styles.marketCapInfo}>
                                    Market Cap Rank: {data.market_cap_rank}
                                </span>
                            </div>
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
                                <span className={styles.twentyFourChange}>
                                    {data.price_change_percentage_24h} %
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
