import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Complete extends Component {

    async updateProgress() {
        let {username, firstLesson, secondLesson, thirdLesson} = this.props
        let response = await axios.post('/update/store', {username, firstLesson, secondLesson, thirdLesson})
        this.props.history.push('/home')
        console.log("updated progress" + response);
    }

    handleClick = (e) => {
        e.preventDefault(); 
        this.updateProgress();
    }

    render() {
        return(
            <div>
                <button onClick={(e) => this.handleClick(e)}>Complete Lesson</button>
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
      lesson: state.lesson
    }
  }


export default withRouter(connect(mapStateToProps, null)(Complete));