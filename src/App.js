import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/routes/home";
import User from "./components/routes/userList";
import Navbar from "./components/layout/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/userslist" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
