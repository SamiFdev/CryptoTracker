import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { getTopMarketCapCoins } from "../../utils/api";
import Loader from "../Loader";
import Error from "../ErrorAlert";
function Header() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true);
            try {
                const data = await getTopMarketCapCoins();
                setLoading(false);
                console.log("header", data);
            } catch (error) {
                setError(true);
            }
        };
        fetchCoins();
        setError(false);
    }, []);
    console.log(error);
    return (
        <section>
            <h1 className={styles.siteTitle}>Crypto Tracker</h1>
            {loading ? <Loader /> : null}
            {error ? <Error /> : null}
        </section>
    );
}

export default Header;
