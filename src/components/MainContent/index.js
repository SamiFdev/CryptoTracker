import styles from "./mainContent.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchSingleCoin,
    singleCoinSlice,
} from "../../features/singleCoinSlice";
import Loader from "../Loader";
import Error from "../ErrorAlert";

function MainContent() {
    const [searchedCoin, setSearchedCoin] = useState([]);
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(
        (state) => state.aSearchedCoin
    );

    const handleInputChange = (e) => {
        setSearchedCoin(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(fetchSingleCoin(searchedCoin));
    };

    return (
        <section className={styles.mainContainer}>
            {data.map((coins, index) => (
                <div key={index}>
                    {coins.id}
                    {coins.current_price}
                </div>
            ))}
            {loading ? <Loader /> : null}
            {error ? <Error /> : null}
            <input
                className={styles.searchBar}
                type="text"
                required
                value={searchedCoin}
                onChange={handleInputChange}
                placeholder="Search a coin"
            />
            <button
                disabled={!searchedCoin.length}
                onClick={handleSubmit}
                className={styles.submitButton}
            >
                Submit
            </button>
        </section>
    );
}

export default MainContent;
