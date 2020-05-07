import React, { Fragment } from "react";
import SpotState from "./context/spot/SpotState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import TagState from "./context/tag/TagState";
import "./App.css";
import Spot from "./components/pages/spot/Spot";
import SpotDetails from "./components/spot/spotDetails/SpotDetails";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Profile from "./components/pages/profile/Profile";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import Register from "./components/auth/Register";
import NavigationBar from "./components/layout/navbar/NavigationBar";
import Footer from "./components/layout/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../src/components/Routing/PrivateRoute";

function App() {
  return (
    <AuthState>
      <SpotState>
        <TagState>
          <AlertState>
            <Router>
              <Fragment>
                <NavigationBar />
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Spot} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/home" component={Home} />
                  <PrivateRoute
                    exact
                    path="/spotdetails"
                    component={SpotDetails}
                  />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <PrivateRoute exact path="/profile" component={Profile} />
                </Switch>
                <Footer />
              </Fragment>
            </Router>
          </AlertState>
        </TagState>
      </SpotState>
    </AuthState>
  );
}

export default App;
