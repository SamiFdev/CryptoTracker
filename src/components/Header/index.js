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
        <main>
            <h1 className={styles.siteTitle}>Crypto Tracker</h1>
            {loading ? <Loader /> : null}
            {error ? <Error /> : null}
            {/* {data.map((coins, index) => (
                <div key={index}>
                    {coins.id}
                    {coins.current_price}
                </div>
            ))} */}
        </main>
    );
}

export default Header;
