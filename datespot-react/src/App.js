import React from "react";
import SpotState from "./context/spot/SpotState";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <SpotState>
      <Header />
    </SpotState>
  );
}

export default App;
