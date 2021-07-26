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
            <span className="head">Would you rather</span>
            <form onSubmit={this.onSubmit}>
             
                <input
                  type="radio"
                  id="optionOne"
                  name="optionOne"
                  value="optionOne"
                  checked={this.state.option === "optionOne"}
                  onChange={this.onChange}
                />
                <label for="optionOne">{question.optionOne.text}</label>
            
                <input
                  type="radio"
                  id="optionTwo"
                  name="optionTwo"
                  value="optionTwo"
                  checked={this.state.option === "optionTwo"}
                  onChange={this.onChange}
                />
                <label for="optionTwo">{question.optionTwo.text}</label>
           
              <button className="button__cta" type="submit">
                Submit
              </button>
            </form>
          </div>
        );
    }

}


export default connect()(Question);