import React from "react";
import SpotState from "./context/spot/SpotState";
import "./App.css";
import Spot from "./components/spot/Spot";
import NavigationBar from "./components/layout/navbar/NavigationBar";

function App() {
  return (
    <SpotState>
      <NavigationBar />
      <div className="container">
        <Spot />
      </div>
    </SpotState>
  );
}

export default App;
