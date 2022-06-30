import styles from "./mainContent.module.css";
import { useState } from "react";
import { getCoinFromSearch } from "../../utils/api";
function MainContent() {
    const [searchedCoin, setsearhedCoin] = useState("");

    const handleSubmit = () => {
        //TODO - add loading state and loader
        getCoinFromSearch(searchedCoin);
    };

    return (
        <div className={styles.searchBarContainer}>
            <input
                className={styles.searchBar}
                type="text"
                value={searchedCoin}
                onChange={(e) => setsearhedCoin(e.target.value)}
                placeholder="Search a coin"
            />
            <button onClick={handleSubmit} className={styles.submitButton}>
                Submit
            </button>
        </div>
    );
}

export default MainContent;
