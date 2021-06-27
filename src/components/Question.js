import React, { Component } from "react";
import { connect } from "react-redux";
import { handleQuestionAnswer } from "../actions/shared"

class Question extends Component{
  
 state = {option:"optionOne"};
 
    onChange = (event) => {
        this.setState({
          option: event.target.value
        });
    }

    onSubmit = (event) =>{
      event.preventDefault();
    const { question, dispatch } = this.props;
      dispatch(handleQuestionAnswer({qid:question.id, answer:this.state.option }))
    }

    render(){
        const {question} = this.props
        return (
          <div>
            <form onSubmit={this.onSubmit}>
              <input
                type="radio"
                id="option1"
                name="optionOne"
                value="optionOne"
                checked={this.state.option === "optionOne"}
                onChange={this.onChange}
              />
              {question.optionOne.text}

              <input
                type="radio"
                id="optionTwo"
                name="optionTwo"
                value="optionTwo"
                checked={this.state.option === "optionTwo"}
                onChange={this.onChange}
              />
              {question.optionTwo.text}

              <button type="submit">Submit</button>
            </form>
          </div>
        );
    }

}


export default connect()(Question);