import {Component} from 'react'
import { BrowserRouter as Router,Route } from "react-router-dom";
import { handleInitialData } from './actions/shared'
import { connect } from "react-redux";
import Dashboard from './components/Dashboard'
import ScorePage from "./components/ScorePage";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";
import AskAQuestion from "./components/AskAQuestion";
import p404 from "./components/p404";
import './App.scss';
import PollQuestion from './components/PollQuestion';


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
          <PrivateRoute path="/questions/:id" exact component={PollQuestion} />
          <PrivateRoute path="/add" exact component={AskAQuestion} />
          <Route path="/404" component={p404} exact />
          <Route path="/login" component={Login} exact />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
