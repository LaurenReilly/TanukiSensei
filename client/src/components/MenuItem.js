import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
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
      
      handleLearn = (e, lesson) => {
          e.preventDefault();
          this.props.learn(lesson);
          this.props.history.push('/learn');
      }
      render() {
        const { open } = this.state;
        return (
          <div> 
            <h3 onClick={(e) => this.handleClick(e)} aria-controls="example-collapse-text" aria-expanded={open}>
              {this.props.title}
            </h3>
            <h4>{this.props.score}</h4>
            <Collapse in={this.state.open}>
              <div id="example-collapse-text">
                <button onClick={(e) => this.handleLearn(e, this.props.lesson)}>Learn</button>
                <button>Practice</button>
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
       learn: (lesson) => dispatch({type: "LEARN", lesson: lesson}) 
    }
}
export default withRouter(connect(null, mapDispatchToProps)(MenuItem));