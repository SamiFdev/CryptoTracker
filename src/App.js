import React from "react";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
    return (
        <main>
            <Header />
            <MainContent />
            <SidePanel />
        </main>
    );
}

export default App;
