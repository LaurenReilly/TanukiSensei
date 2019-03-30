import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';

import hiragana from '../assets/hiragana';
import nouns from '../assets/nouns';
import phrases from '../assets/phrases';

import hiragana2 from '../assets/hiragana2';
import verbs from '../assets/verbs';
import people from '../assets/people';



class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: true,
            leaf: ""
        }
    }
    render() {
        let {firstLesson, secondLesson, thirdLesson} = this.props
        if (firstLesson + secondLesson + thirdLesson === 30) {
            this.setState({isDisabled: false})
        }
        return (
            <div className="d-flex flex-column align-items-center">
                <div className="menu blueShadow rounded p-2 mb-3">
                    <h2 className="text-center menuHeading mt-2 mb-3">Chapter One</h2>
                    <MenuItem title="Hiragana" lesson="firstLesson" score={firstLesson} array={hiragana}/>
                    <MenuItem title="Nouns" lesson="secondLesson" score={secondLesson} array={nouns}/>
                    <MenuItem title="Phrases" lesson="thirdLesson" score={thirdLesson} array={phrases}/>
                </div>
                <div className="menu blueShadow rounded p-2">
                    <h2 className="text-center menuHeading mt-2 mb-3">Chapter Two</h2>
                    <MenuItem title="Hiragana 2" lesson="fourthLesson" score={this.props.fourthLesson} array={hiragana2}/>
                    <MenuItem title="Verbs" lesson="fifthLesson" score={this.props.fifthLesson} array={verbs}/>
                    <MenuItem title="People" lesson="sixthLesson" score={this.props.sixthLesson} array={people}/>
                </div>
            </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        firstLesson: state.firstLesson,
        secondLesson: state.secondLesson,
        thirdLesson: state.thirdLesson,
        fourthLesson: state.fourthLesson,
        fifthLesson: state.fifthLesson,
        sixthLesson: state.sixthLesson
    }
}

export default connect(mapStateToProps,null)(Menu);