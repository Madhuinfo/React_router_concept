import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Notfound from "./Notfound";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Routers</h1>
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{ color: "red" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeStyle={{ color: "red" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" exact activeStyle={{ color: "red" }}>
                Dashboard
              </NavLink>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
