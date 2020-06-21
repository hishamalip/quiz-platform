import React from 'react';
import "./Assets/css/main.css"
import PublicRoute from "./Route/Publicroute"
import { BrowserRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing"
import Dashboard from "./Components/Dashboard/Dashboard"
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute component={Landing} path="/" exact />
        <PublicRoute component={Dashboard} path="/dashboard" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
