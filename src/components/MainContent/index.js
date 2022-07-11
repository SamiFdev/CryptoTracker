import styles from "./mainContent.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCoin } from "../../features/singleCoinSlice";

function MainContent() {
    const [searchedCoin, setsearhedCoin] = useState("");
    const [wasDataFetched, setWasDataFetched] = useState(false);
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(
        (state) => state.aSearchedCoin
    );
    useEffect(() => {
        if (!wasDataFetched) {
            setWasDataFetched(true);
            dispatch(fetchSingleCoin());
        }
    }, [dispatch, wasDataFetched]);

    const handleSubmit = () => {
        //TODO - add loading state and loader
        fetchSingleCoin(searchedCoin);
        // console.log(searchedCoin);
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
