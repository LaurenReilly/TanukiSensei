import React, {Component} from 'react';
import { connect } from 'react-redux';

import hiragana from '../assets/hiragana';
import nouns from '../assets/nouns';
import phrases from '../assets/phrases';


class Learn extends Component {
    render() {
        if (this.props.lesson === "firstLesson") {
            return (
                <div>
                    <div>
                        <h1>Hiragana</h1>
                        <p>In Japanese, Hiragana is like the English Alphabet. These characters represent all of the sounds in the Japanese language.</p>
                        <p>The first lesson will cover ten of the 46 basic characters.</p>
                    </div>
                    {hiragana.map((word, i) => {
                        return (
                            <div key={i}>
                                <h2 className="japanese">{word.hiragana}</h2>
                                <p>English: {word.english}</p>
                                <p>Romaji: {word.romaji}</p>
                            </div>
                        )
                    })}
                </div>
            )
        } else if (this.props.lesson === "secondLesson") {
            return (
                <div>
                    <div>
                        <h1>Nouns</h1>
                        <p>Memorize these common nouns.</p>
                        <p>Romaji is the way we write Japanese words in english phonetically.</p>
                    </div>
                    {nouns.map((word, i) => {
                        return (
                            <div key={i}>
                                <h2 className="japanese">{word.hiragana}</h2>
                                <p>English: {word.english}</p>
                                <p>Romaji: {word.romaji}</p>
                            </div>
                        )
                    })}
                </div>
            )
        } else if (this.props.lesson === "thirdLesson") {
            return (
                <div>
                    <div>
                        <h1>Phrases</h1>
                        <p>Memorize these common phrases.</p>
                        <p>Romaji is the way we write Japanese words in english phonetically.</p>
                    </div>
                    {phrases.map((word, i) => {
                        return (
                            <div key={i}>
                                <h2 className="japanese">{word.hiragana}</h2>
                                <p>English: {word.english}</p>
                                <p>Romaji: {word.romaji}</p>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return null;
        }
    }
}

let mapStateToProps = (state) => {
    return {
        lesson: state.lesson
    }
}

export default connect(mapStateToProps, null)(Learn);