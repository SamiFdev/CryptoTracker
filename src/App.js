import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import styles from "./App.module.css";

function App() {
    return (
        <Provider store={store}>
            <Header />
            <main className={styles.mainContentWrapper}>
                <Favorites />
                <MainContent />
            </main>
            <Footer />
        </Provider>
    );
}

export default App;
