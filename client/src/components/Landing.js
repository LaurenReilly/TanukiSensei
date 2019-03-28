import React, {Component} from 'react';
// import { connect } from 'react-redux';

import '../App.css';

import tanuki from '../assets/Tanuki.png';
import Login from './Login';

class Landing extends Component {
    render() {
        return (
            <div className="d-flex flex-column landing mt-4">
                <div className="d-flex m-auto">
                    <div className="d-flex flex-column sensei p-2 rounded blueShadow">
                        <h1> Learn Japanese the Fun Way</h1>
                        <img className="align-self-center" alt="tanuki logo" width="300" height="300"src={tanuki}/>
                        <h3 className="text-center">study with Tanuki Sensei!</h3>
                    </div>
                </div>
                <div className="mt-4">
                    <Login logForm="register"/>
                </div>
            </div>
        )
    }
}

export default Landing;