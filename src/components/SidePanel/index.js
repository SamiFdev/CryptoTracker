import styles from "./sidePanel.module.css";

function SidePanel() {
    return (
        <section>
            <div className={styles.favorites}>
                <span>Favorites</span>
                <div>Favorite #1</div>
                <div>Favorite #2</div>
                <div>Favorite #3</div>
            </div>

            <div className={styles.mainContent}></div>
        </section>
    );
}

export default SidePanel;
