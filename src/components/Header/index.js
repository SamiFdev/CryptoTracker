import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
// import { getTopMarketCapCoins } from "../../utils/api";
import Loader from "../Loader";
import Error from "../ErrorAlert";
import { fetchCoinsByMarketCap } from "../../features/coinSlice";

function Header() {
    const [wasDataFetched, setWasDataFetched] = useState(false);
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.coins);
    useEffect(() => {
        if (!wasDataFetched) {
            setWasDataFetched(true);
            dispatch(fetchCoinsByMarketCap());
        }
    }, [dispatch, wasDataFetched]);

    return (
        <header className={styles.header}>
            <h1 className={styles.siteTitle}>Crypto Tracker</h1>
            <div className={styles.ticker}>
                {data.map((coins, index) => (
                    <div className={styles.coinsContainer} key={index}>
                        <div className={styles.scrollingInfo}>
                            <span className={styles.coinName}>{coins.id}</span>
                            <img src={coins.image} alt="coin"></img>
                            <span className={styles.coinPricing}>
                                $ {coins.current_price}
                            </span>
                        </div>
                    </div>
                ))}
                {loading ? <Loader /> : null}
                {error ? <Error /> : null}
            </div>
        </header>
    );
}

export default Header;
