import styles from "./loader.module.css";

function Loader() {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.loadingSpinner}></div>
        </div>
    );
}

export default Loader;
