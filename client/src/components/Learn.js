import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Learn extends Component {

    componentDidMount() {
        if(!this.props.username) {
            this.props.history.push('/');
        } else {
            return
        }
    }

    render() {
        let lessonHeader;
        if (this.props.lesson === "firstLesson") {
            lessonHeader = (
                <div className="text-center mt-4">
                    <h1>Hiragana</h1>
                    <p>In Japanese, Hiragana is like the English Alphabet. These characters represent all of the sounds in the Japanese language.</p>
                    <p>The first lesson will cover ten of the 46 basic characters.</p>
                </div>
            )
        } else if (this.props.lesson === "secondLesson") {
            lessonHeader = (
                <div className="text-center mt-4">
                    <h1>Nouns</h1>
                    <p>Memorize these common nouns.</p>
                    <p>Romaji is the way we write Japanese words in english phonetically.</p>
                </div>
            )
        } else if (this.props.lesson === "thirdLesson") {
            lessonHeader = (
                <div className="text-center mt-4">
                        <h1>Phrases</h1>
                        <p>Memorize these common phrases.</p>
                        <p>Romaji is the way we write Japanese words in english phonetically.</p>
                    </div>
            )
        } else {
            lessonHeader = null;
        }
        return (
            <div>
                {lessonHeader}
                <div className="d-flex flex-wrap justify-content-center">
                    {this.props.array.map((word, i) => {
                        return (
                            <div className="flip-card m-4 rounded" key={i}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front d-flex justify-content-center align-items-center">
                                        <h2 className="japanese">{word.hiragana}</h2>
                                    </div>
                                    <div className="flip-card-back d-flex flex-column justify-content-around">
                                        <h4 className="text-center">English: {word.english}</h4>
                                        <h4 className="text-center">Romaji: {word.romaji}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        lesson: state.lesson,
        username: state.username,
        array: state.array
    }
}

export default withRouter(connect(mapStateToProps, null)(Learn));