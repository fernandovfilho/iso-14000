import React from "react";
import "./global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ActivityList from "./pages/ActivityList";
import NewActivity from "./pages/NewActivity";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ActivityList />
        </Route>
        <Route path="/activity/new" exact>
          <NewActivity />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
