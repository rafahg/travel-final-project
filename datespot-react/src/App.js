import React, { Fragment } from "react";
import SpotState from "./context/spot/SpotState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import "./App.css";
import Spot from "./components/pages/spot/Spot";
import SpotDetails from "./components/spot/SpotDetails";
import About from "./components/pages/about/About";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import Register from "./components/auth/Register";
import NavigationBar from "./components/layout/navbar/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <AuthState>
      <SpotState>
        <AlertState>
          <Router>
            <Fragment>
              <NavigationBar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Spot} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/spotdetails" component={SpotDetails} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </SpotState>
    </AuthState>
  );
}

export default App;
