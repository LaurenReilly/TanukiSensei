import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MenuItem extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false,
        };
      }

      handleClick = (e) => {
          e.preventDefault();
          this.setState({ ...this.state, open: !this.state.open });
      }

      handleLearn = (e, lesson, array) => {
          e.preventDefault();
          this.props.learn(lesson, array);
          this.props.history.push('/learn');
      }

      handlePractice = (e, lesson, array) => {
          e.preventDefault();
          this.props.practice(lesson, array);
          this.props.history.push('/practice');
      }

      render() {
        const { open } = this.state;
        const {title, lesson, score, array} = this.props;
        return (
          <div className="mb-5"> 
            <div className="text-center">
              <h3 className="menu-title" onClick={(e) => this.handleClick(e)} aria-controls="collapse-text" aria-expanded={open}>{title}</h3>
              <p className="ml-2">Most Recent Grade: {score * 10}%</p>
            </div>
            <Collapse in={open}>
              <div id="collapse-text">
                <div className="d-flex justify-content-around menuDropdown rounded p-1">
                  <Button className="" onClick={(e) => this.handleLearn(e, lesson, array)}>Learn</Button>
                  <Button className="" onClick={(e) => this.handlePractice(e, lesson, array)}>Practice</Button>
                </div>
              </div>
            </Collapse>
          </div>
        )
    }
}
//go to learn button should set the correct word list in the state.
//then should redirect to /learn
//then the learn page will populate with the current lesson's vocab list

//go to practice button should also set the correct word list in state
//then should redirect to practice
//practice page will use the current lesson's vocab list.

let mapDispatchToProps = (dispatch) => {
    return {
       learn: (lesson, array) => dispatch({type: "LEARN", lesson: lesson, array: array}),
       practice: (lesson, array) => dispatch({type: "PRACTICE", lesson: lesson, array: array})
    }
}
export default withRouter(connect(null, mapDispatchToProps)(MenuItem));