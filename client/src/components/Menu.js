import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';

class Menu extends Component {
    render() {
        return (
            <div>
                <MenuItem title="Hiragana" lesson="firstLesson" score={this.props.firstLesson}/>
                <MenuItem title="Nouns" lesson="secondLesson" score={this.props.secondLesson}/>
                <MenuItem title="Phrases" lesson="thirdLesson" score={this.props.thirdLesson}/>
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