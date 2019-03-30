import React, { Component } from 'react';
import { connect } from 'react-redux';
import Next from './Next';
import Complete from './Complete';

class Grade extends Component {
    render() {
        let button;
        if (this.props.complete) {
            button = <Complete score={this.props.score}/>
        } else if(!this.props.complete) {
            button = <Next array={this.props.array}/>
        }
       if(this.props.correct === "correct") {
            return (
                <div className="correct m-auto rounded d-flex flex-column align-items-center p-2">
                    <p>Correct!</p>
                    {button}
                </div>
            )
        } else if (this.props.correct === "wrong") {
            return (
                <div className="wrong m-auto rounded d-flex flex-column align-items-center p-2">
                    <p>The correct answer is: {this.props.currentWord.english}</p>
                    {button}
                </div>
            )
        } else {
            return null;
        }
    }
}

let mapStateToProps = (state) => {
    return {
        lesson: state.lesson,
        complete: state.complete,
        questionsAnswered: state.questionsAnswered,
        currentWord: state.currentWord,
        userAnswer: state.userAnswer,
        correct: state.correct,
        showCheck: state.showCheck
    }
}

export default connect(mapStateToProps, null)(Grade);