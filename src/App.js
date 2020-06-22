import React, {Component} from 'react';
import "./Assets/css/main.css"
import PublicRoute from "./Route/Publicroute"
import { BrowserRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing"
import Dashboard from "./Components/Dashboard/Dashboard"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import Profile from './Components/Dashboard/Profile';
import Navbar from './Components/navbar';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// function App() {
  
// }
class App extends Component {
  render() {
      return (
        <>

    <Navbar/>
    <BrowserRouter>
      <Switch>
        <PublicRoute component={Landing} path="/" exact />
        <PublicRoute component={Dashboard} path="/Dashboard" exact />
        <PublicRoute component={Profile} path="/Dashboard/Profile" exact />
      </Switch>
    </BrowserRouter>
    </>
      );
  }
}
export default App;
