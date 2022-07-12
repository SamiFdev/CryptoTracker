import React from "react";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import MainContent from "./components/MainContent";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <main>
                <Header />
                <MainContent />
                <SidePanel />
            </main>
        </Provider>
    );
}

export default App;
