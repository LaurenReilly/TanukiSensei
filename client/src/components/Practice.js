import React, {Component} from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { withRouter } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import Grade from './Grade';

// import hiragana from '../assets/hiragana';
// import nouns from '../assets/nouns';
// import phrases from '../assets/phrases';

class Practice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: "",
            score: 0
        }
    }

//using array from redux store, updating it after removing the randomly chosen word so it isn't repeated
    random = (array) => {
        let newArray = array;
        let i =  Math.floor(Math.random() * (array.length));
        let word = array[i];
        newArray.splice(i, 1);
        this.props.next(word, newArray);
    }

    componentDidMount() {
        if(!this.props.username) {
            this.props.history.push('/')
        } else {
        //reset game specific state items first
        this.props.reset();
        //show first word on screen
        this.random(this.props.array);
        }
      }

    isComplete() {
        if (this.props.questionsAnswered >= 9) {
            this.props.complete();
        } else {
            return
        }
    }

    //handle case sensitivity, if correct change state to correct and set local answer back to empty string
    handleSubmit(e, english) {
        e.preventDefault();
        this.isComplete();
        let { answer } = this.state;
        let answerCheck = answer.toUpperCase();
        let englishCheck = english.toUpperCase();
        if (answerCheck === englishCheck) {
            this.setState({...this.state, answer: ""});
            this.props.check("correct", 1);
        } else if (answerCheck !== englishCheck) {
            this.props.check("wrong", 0);
            this.setState({...this.state, answer: ""});
        } else {
            return;
        }
    }
     
    handleChange = (e) => {
        this.setState({...this.state, answer: e.target.value })
    }

    render() {
        let { hiragana, romaji, english} = this.props.currentWord;
        let check;
        if (this.props.showCheck) {
            check = <Button aria-label="check" className="rounded ml-1 check" type="submit">Check</Button>
        } else {
            check = null;
        }
        return (
            <div className="d-flex flex-column m-auto practice">
                <div className="text-center">
                    <h1 className="japanese gameWord">{hiragana}</h1>
                    {this.props.lesson === "firstLesson" ? null : <h4>{romaji}</h4>}
                    <p>{this.props.score}</p>  
                </div>
                <Form className="text-center" onSubmit={(e) => this.handleSubmit(e, english)}>
                    <label htmlFor="answer">English Translation: </label>
                    <input aria-label="answer" className="rounded" type="text" id="answer" name="answer" required onChange={(e) => this.handleChange(e)} value={this.state.answer} placeholder="Enter English"></input>
                    {check}
                </Form>
                <Grade score={this.state.score}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentWord: state.currentWord,
        array: state.array,
        lesson: state.lesson,
        questionsAnswered: state.questionsAnswered,
        answer: state.answer,
        correct: state.correct,
        showCheck: state.showCheck,
        score: state.score,
        username: state.username
    }

}

//needs access to word list based on what lesson we are in.
let mapDispatchToProps = (dispatch) => {
    return {
        next: (word, array) => dispatch({type: "NEXT", currentWord: word, array: array}),
        check: (grade, score) => dispatch({type: "CHECK", grade: grade, score: score}),
        complete: () => dispatch({type: "COMPLETE"}),
        reset: () => dispatch({type: "RESET"}),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Practice));