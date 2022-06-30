import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { getTopMarketCapCoins } from "../../utils/api";
import Loader from "../Loader";

function Header() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true);
            const data = await getTopMarketCapCoins();
            setLoading(false);
            console.log("header", data);
        };
        fetchCoins();
    }, []);

    return (
        <section>
            <h1 className={styles.siteTitle}>Crypto Tracker</h1>
            {loading ? <Loader /> : null}
        </section>
    );
}

export default Header;
