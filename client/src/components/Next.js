import React, { Component } from 'react';
import { connect } from 'react-redux';

class Next extends Component {

//using array from redux store, updating it after removing the randomly chosen word so it isn't repeated
    random = (e, array) => {
        let newArray = array;
        e.preventDefault();
        let i =  Math.floor(Math.random() * (array.length));
        let word = array[i];
        newArray = newArray.splice(i, 1);
        this.next(word, newArray);
    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.random(e, this.props.array)}>Next</button>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentWord: state.currentWord,
        array: state.array
    }

}

//needs access to word list based on what lesson we are in.
let mapDispatchToProps = (dispatch) => {
    return {
        next: (word, array) => dispatch({type: "NEXT", currentWord: word, array: array})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Next);