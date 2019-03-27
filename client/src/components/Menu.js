import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';

import hiragana from '../assets/hiragana';
import nouns from '../assets/nouns';
import phrases from '../assets/phrases';

class Menu extends Component {
    render() {
        return (
            <div>
                <MenuItem title="Hiragana" lesson="firstLesson" score={this.props.firstLesson} array={hiragana}/>
                <MenuItem title="Nouns" lesson="secondLesson" score={this.props.secondLesson} array={nouns}/>
                <MenuItem title="Phrases" lesson="thirdLesson" score={this.props.thirdLesson} array={phrases}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        firstLesson: state.firstLesson,
        secondLesson: state.secondLesson,
        thirdLesson: state.thirdLesson
    }
}

export default connect(mapStateToProps,null)(Menu);