import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';

import hiragana from '../assets/hiragana';
import nouns from '../assets/nouns';
import phrases from '../assets/phrases';

import hiragana2 from '../assets/hiragana2';
import verbs from '../assets/verbs';
import people from '../assets/people';

import leaf from '../assets/leaf.png';
import leafGray from '../assets/leafGray.png'

class Menu extends Component {
    render() {
        let {firstLesson, secondLesson, thirdLesson} = this.props
        let chapterTwo;
        let imageSource;
        if (firstLesson + secondLesson + thirdLesson === 30) {
            imageSource = leaf; 
            chapterTwo = 
                <div className="menu blueShadow rounded p-2">
                    <div className="d-flex justify-content-center menuHeading p-2 mb-3">
                        <h2 className="mr-2">Chapter Two</h2>
                        <img alt="leaf" width="40" height="40" src={imageSource}></img>
                    </div>
                    <MenuItem title="Hiragana 2" lesson="fourthLesson" score={this.props.fourthLesson} array={hiragana2}/>
                    <MenuItem title="Verbs" lesson="fifthLesson" score={this.props.fifthLesson} array={verbs}/>
                    <MenuItem title="People" lesson="sixthLesson" score={this.props.sixthLesson} array={people}/>
                </div>
        } else {
            imageSource = leafGray;
            chapterTwo = 
                <div className="menuDisabled blueShadow rounded p-2">
                    <div className="d-flex justify-content-center menuHeadingDisabled p-2 mb-3">
                        <h2 className="mr-2 menuHeadingDisabled">Chapter Two</h2>
                        <img alt="leaf" width="40" height="40" src={imageSource}></img>
                    </div>
                    <div className="mb-5"> 
                        <div className="text-center">
                            <h3 className="menu-titleDisabled">Hiragana 2</h3>
                            <p className="ml-2 locked">Locked: Complete Chapter One</p>
                        </div>
                    </div>
                    <div className="mb-5"> 
                        <div className="text-center">
                            <h3 className="menu-titleDisabled">Verbs</h3>
                            <p className="ml-2 locked">Locked: Complete Chapter One</p>
                        </div>
                    </div>
                    <div className="mb-5"> 
                        <div className="text-center">
                            <h3 className="menu-titleDisabled">People</h3>
                            <p className="ml-2 locked">Locked: Complete Chapter One</p>
                        </div>
                    </div>
                </div>
        }
        return (
            <div className="d-flex flex-column align-items-center">
                <div className="menu blueShadow rounded p-2 mb-3">
                    <div className="d-flex justify-content-center menuHeading p-2 mb-3">
                        <h2 className="mr-2">Chapter One</h2>
                        <img alt="leaf" width="40" height="40" src={imageSource}></img>
                    </div>
                    <MenuItem title="Hiragana" lesson="firstLesson" score={firstLesson} array={hiragana}/>
                    <MenuItem title="Nouns" lesson="secondLesson" score={secondLesson} array={nouns}/>
                    <MenuItem title="Phrases" lesson="thirdLesson" score={thirdLesson} array={phrases}/>
                </div>
                {chapterTwo}
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