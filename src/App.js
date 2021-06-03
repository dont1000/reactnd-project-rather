import {Component} from 'react'
import {handleInitialData} from './actions/shared'
import { connect } from "react-redux";

import './App.css';


class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }


  render(){
    console.log(this.props)
    return (
      <div className="App">
        App
      </div>
    );
  }
}

const mapState=({users, questions})=>{
return {users,questions}
}
export default connect(mapState)(App);
