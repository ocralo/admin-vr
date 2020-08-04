import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

//importacion de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//views
import Login from "./components/Views/Login/Login";
import Home from "./components/Views/Home/Home";
import RateVideo from "./components/Views/RateVideo/RateVideo";

function App() {
  useEffect(() => {
    fetch("https://vr-web-admin.firebaseio.com/questions.json");
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/rate">
          <RateVideo />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
