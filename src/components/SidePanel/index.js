import styles from "./sidePanel.module.css";

function SidePanel() {
    return (
        <section className={styles.sidePanel}>
            <h2>Favorites</h2>
            <div>Stored favorites to go here</div>
        </section>
    );
}

export default SidePanel;
