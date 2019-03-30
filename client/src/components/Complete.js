import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class Complete extends Component {

    async updateProgress() {
        let {username, firstLesson, secondLesson, thirdLesson, fourthLesson, fifthLesson, sixthLesson, score, lesson} = this.props
        if (lesson === "firstLesson") {
            firstLesson = score;
            this.props.updateFirst(score);
        } else if (lesson === "secondLesson") {
            secondLesson = score;
            this.props.updateSecond(score);
        } else if (lesson === "thirdLesson") {
            thirdLesson = score;
            this.props.updateThird(score);
        } else if (lesson === "fourthLesson") {
            fourthLesson = score;
            this.props.updateFourth(score);
        } else if (lesson === "fifthLesson") {
            fifthLesson = score;
            this.props.updateFifth(score);
        } else if (lesson === "sixthLesson") {
            sixthLesson = score;
            this.props.updateSixth(score);
        }
        let response = await axios.post('/update/store', {username, firstLesson, secondLesson, thirdLesson, fourthLesson, fifthLesson, sixthLesson})
        this.props.history.push('/home')
        console.log("updated progress" + response);
    }

    handleClick = (e) => {
        e.preventDefault(); 
        this.updateProgress();
    }

    render() {
        let percentage = this.props.score * 10
        return(
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h5 className="finalScore p-1">You scored {percentage}% correct!</h5>
                <Button onClick={(e) => this.handleClick(e)}>Complete Lesson</Button>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
      username: state.username,
      firstLesson: state.firstLesson,
      secondLesson: state.secondLesson,
      thirdLesson: state.thirdLesson,
      fourthLesson: state.fourthLesson,
      fifthLesson: state.fifthLesson,
      sixthLesson: state.sixthLesson,
      lesson: state.lesson,
      score: state.score
    }
  }

let mapDispatchToProps = (dispatch) => {
    return {
        updateFirst: (score) => dispatch({type: "UPDATE_FIRST", score: score}),
        updateSecond: (score) => dispatch({type: "UPDATE_SECOND", score: score}),
        updateThird: (score) => dispatch({type: "UPDATE_THIRD", score: score}),
        updateFourth: (score) => dispatch({type: "UPDATE_FOURTH", score: score}),
        updateFifth: (score) => dispatch({type: "UPDATE_FIFTH", score: score}),
        updateSixth: (score) => dispatch({type: "UPDATE_SIXTH", score: score}),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Complete));