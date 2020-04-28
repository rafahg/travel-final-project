import React from "react";
import SpotState from "./context/spot/SpotState";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <SpotState>
      <div className="container">
        <Header />
      </div>
    </SpotState>
  );
}

export default App;
