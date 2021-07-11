import {Component} from 'react'
import { BrowserRouter as Router,Route } from "react-router-dom";
import { handleInitialData } from './actions/shared'
import { connect } from "react-redux";
import Dashboard from './components/Dashboard'
import ScorePage from "./components/ScorePage";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";


import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }


  render() {
    return (
      <Router>
        <Navigation />
        <div className="Container">
          <PrivateRoute path="/" exact component={Dashboard} />
          <PrivateRoute path="/leaderboard" exact component={ScorePage} />
          <Route path="/login" component={Login} exact />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
