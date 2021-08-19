import {Component} from 'react'
import { BrowserRouter as Router,Route } from "react-router-dom";
import { handleInitialData } from './actions/shared'
import { connect } from "react-redux";
import Dashboard from './views/Dashboard'
import Leaderboard from "./views/Leaderboard";
import Login from "./views/Login";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";
import AskAQuestion from "./views/AskAQuestion";
import Page404 from "./views/Page404";
import './App.scss';
import PollQuestion from './views/PollQuestion';


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
          <PrivateRoute path="/leaderboard" exact component={Leaderboard} />
          <PrivateRoute path="/questions/:id" exact component={PollQuestion} />
          <PrivateRoute path="/add" exact component={AskAQuestion} />
          <Route path="/404" component={Page404} exact />
          <Route path="/login" component={Login} exact />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
