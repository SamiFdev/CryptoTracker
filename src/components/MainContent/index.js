import { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCoin } from "../../features/singleCoinSlice";
import { addNewFavorite } from "../../features/favoritesSlice";
import { removeExistingFavorite } from "../../features/favoritesSlice";
import Loader from "../Loader";
import Error from "../ErrorAlert";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import styles from "./mainContent.module.css";

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
                <button
                    disabled={!searchedCoin.length || loading}
                    onClick={handleSubmit}
                    className={styles.submitButton}
                >
                    <FaSearch />
                </button>
            </div>
            <div className={styles.singleCoinDiv}></div>
            {data?.id ? (
                <>
                    <div className={styles.coinCard}>
                        <div className={styles.coinCardDisplay}>
                            <div className={styles.favoriteButton}>
                                {favorites.includes(data.id) ? (
                                    <MdFavorite
                                        onClick={onRemoveClick}
                                        className={styles.filledHeart}
                                    />
                                ) : (
                                    <MdFavorite
                                        onClick={onFavoriteClick}
                                        className={styles.emptyHeart}
                                    />
                                )}
                            </div>
                            <div className={styles.coinIdentity}>
                                <img
                                    className={styles.coinPicForCard}
                                    src={data.image}
                                    alt="coin"
                                />
                                <span className={styles.coinNameForCard}>
                                    {data.id}({data.symbol})
                                </span>
                            </div>

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
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default MainContent;
