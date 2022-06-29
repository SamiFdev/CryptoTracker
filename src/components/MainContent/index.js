import styles from "./mainContent.module.css";

function MainContent() {
    return (
        <div className={styles.searchBarContainer}>
            <input
                className={styles.searchBar}
                type="text"
                placeholder="Search a coin"
            ></input>
            <input
                className={styles.submitButton}
                type="submit"
                value="Submit"
            ></input>
        </div>
    );
}

export default MainContent;
