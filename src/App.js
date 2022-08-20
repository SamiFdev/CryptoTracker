import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./App.css";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

function App() {
    return (
        <Provider store={store}>
            <main>
                <Header />
                <MainContent />
                <Favorites />
                <Footer />
            </main>
        </Provider>
    );
}

export default App;
