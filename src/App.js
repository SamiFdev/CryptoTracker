import React from "react";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import MainContent from "./components/MainContent";
import "./App.css";
// import MarketCapFetch from "./utils/Api2";

function App() {
    return (
        <main>
            <Header />
            <MainContent />
            {/* <MarketCapFetch /> */}
            <SidePanel />
        </main>
    );
}

export default App;
