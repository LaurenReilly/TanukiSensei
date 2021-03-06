import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

class Next extends Component {

//using array from redux store, updating it after removing the randomly chosen word so it isn't repeated
    random = (e, array) => {
        let newArray = array;
        e.preventDefault();
        let i =  Math.floor(Math.random() * (array.length));
        let word = array[i];
        newArray.splice(i, 1);
        this.props.next(word, newArray);
    }

    render() {
        return (
            <div>
                <Button onClick={(e) => this.random(e, this.props.array)}>Next</Button>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentWord: state.currentWord,
        array: state.array,
    }

}

//needs access to word list based on what lesson we are in.
let mapDispatchToProps = (dispatch) => {
    return {
        next: (word, array) => dispatch({type: "NEXT", currentWord: word, array: array})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Next);