import * as React from "react";
import { HashRouter as Router, Route, Switch,  } from "react-router-dom";
import Register from "./components/auth/RegisterComponent";
import HomeComponent from "./components/home/HomeComponent";
import "bulma/css/bulma.min.css";
import "../public/css/index.css";

export default function App() {
  return(
    // <div className="section section-principal">
    //   <div className="container">
        <Router>
          <Switch>
            {/* <Route path="/" component={Home} /> */}
            <Route path="/register/" component={Register} />
            <Route path="/" component={HomeComponent} />
          </Switch>
        </Router>
    //   </div>
    // </div>
  )
}