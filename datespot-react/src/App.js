import React, { Fragment } from "react";
import SpotState from "./context/spot/SpotState";
import "./App.css";
import Spot from "./components/pages/spot/Spot";
import SpotDetails from "./components/spot/SpotDetails";
import About from "./components/pages/about/About";
import NavigationBar from "./components/layout/navbar/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <SpotState>
      <Router>
        <Fragment>
          <NavigationBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Spot} />
              <Route exact path="/about" component={About} />
              <Route exact path="/spotdetails" component={SpotDetails} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </SpotState>
  );
}

export default App;
