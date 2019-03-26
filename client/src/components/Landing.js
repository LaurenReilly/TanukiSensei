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
                    <div className="d-flex flex-column sensei p-2 rounded">
                        <h1> Learn Japanese the Fun Way</h1>
                        <img className="align-self-center" alt="tanuki logo" width="300" height="300"src={tanuki}/>
                        <h3 className="text-center">study with Tanuki Sensei!</h3>
                    </div>
                    <div className="m-5 description rounded text-center p-4">
                        <h4>Tanuki make the best teachers!</h4>
                        <dl>
                            <dt>They are kind and patient</dt>
                            <dd className="ml-3">Tanuki Sensei will always let you work at your own pace.</dd>
                            <dt>They are native to Japan</dt>
                            <dd className="ml-3">Who better to learn from than a native speaker?</dd>
                            <dt>They can't use computers</dt>
                            <dd className="ml-3">That means Sensei will never send you annoying emails!</dd>
                        </dl>
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