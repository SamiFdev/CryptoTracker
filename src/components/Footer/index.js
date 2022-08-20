import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            {/* <div className={styles.siteName}></div> */}
            <p className={styles.copyRight}>© 2022 Sami Fares</p>
        </footer>
    );
}

export default Footer;
