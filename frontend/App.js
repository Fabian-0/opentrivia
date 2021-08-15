import React from "react";
import { HashRouter as Router, Route, Switch,  } from "react-router-dom";
import Register from "./components/auth/Register";
import Home from "./components/home";
import "bulma/css/bulma.min.css";
// import "../public/css/index.css";

export default function App() {
  return(
    <div className="container">
      <Router>
        <Switch>
          {/* <Route path="/" component={Home} /> */}
          <Route path="/register/" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}