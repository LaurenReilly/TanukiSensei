import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Lesson extends Component {

    async updateProgress() {
        let {username, firstLesson, secondLesson, thirdLesson} = this.props
        let response = await axios.post('/update/store', {username, firstLesson, secondLesson, thirdLesson})
        console.log(response);
    }

    render() {
        return(
            <div>
                <button onClick={(e) => {e.preventDefault(); this.props.updateFirst()}}>increase lesson 1</button>
                <button onClick={(e) => {e.preventDefault(); this.props.updateSecond()}}>increase lesson 2</button>
                <button onClick={(e) => {e.preventDefault(); this.props.updateThird()}}>increase lesson 3</button>
                <button onClick={(e) => {e.preventDefault(); this.updateProgress()}}>Update Scores in State/DB</button>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
      username: state.username,
      firstLesson: state.firstLesson,
      secondLesson: state.secondLesson,
      thirdLesson: state.thirdLesson
    }
  }

let mapDispatchToProps = (dispatch) => {
    return {
        updateFirst: () => dispatch({type: "UPDATE_FIRST"}),
        updateSecond: () => dispatch({type: "UPDATE_SECOND"}),
        updateThird: () => dispatch({type: "UPDATE_THIRD"}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);