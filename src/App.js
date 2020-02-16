import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import AddPet from "./components/AddPet";
import Payment from "./components/Payment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Footer from './components/Footer';

function App() {
  return (
    // <div>
    // <Profile />
    // <Dashboard />
    // {/* <Landing /> */}
    //   {/* <Dashboard /> */}
    // </div>

    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
      <Switch>
        <Route path="/EditProfile">
          <EditProfile />
        </Route>
      </Switch>
      <Switch>
        <Route path="/AddPet">
          <AddPet />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Payment">
          <Payment />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Landing">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
