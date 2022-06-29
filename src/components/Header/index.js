import { useEffect } from "react";
import styles from "./Header.module.css";
import { getTopMarketCapCoins } from "../../utils/api";

function Header() {
    useEffect(() => {
        getTopMarketCapCoins();
    }, []);

    return (
        <section>
            <h1 className={styles.siteTitle}>Crypto Tracker</h1>
        </section>
    );
}

export default Header;
