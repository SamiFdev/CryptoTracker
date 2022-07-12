import styles from "./mainContent.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCoin } from "../../features/singleCoinSlice";
import Loader from "../Loader";
import Error from "../ErrorAlert";

function MainContent() {
    const [searchedCoin, setSearhedCoin] = useState("");
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(
        (state) => state.aSearchedCoin
    );

    const handleSubmit = () => {
        dispatch(fetchSingleCoin(searchedCoin));
    };

    return (
        <section>
            {loading ? <Loader /> : null}
            {error ? <Error /> : null}
            <div className={styles.searchBarContainer}>
                <input
                    className={styles.searchBar}
                    type="text"
                    value={searchedCoin}
                    onChange={(e) => setSearhedCoin(e.target.value)}
                    placeholder="Search a coin"
                />
                <button onClick={handleSubmit} className={styles.submitButton}>
                    Submit
                </button>
            </div>
        </section>
    );
}

export default MainContent;
