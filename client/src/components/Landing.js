import React, {Component} from 'react';
// import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import '../App.css';

import tanuki from '../assets/Tanuki.png';
import Login from './Login';

class Landing extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false,
        };
      }

      handleClick = (e) => {
          e.preventDefault();
          this.setState({ ...this.state, open: !this.state.open });
      }

    render() {
        const { open } = this.state;
        return (
            <div className="d-flex flex-column landing mt-4">
                <div className="d-flex m-auto">
                    <div className="d-flex flex-column sensei p-2 rounded blueShadow">
                        <h1> Learn Japanese the Fun Way</h1>
                        <img className="align-self-center" id="sensei" alt="tanuki logo" width="300" height="300"src={tanuki}/>
                        <h3 className="text-center">study with Tanuki Sensei!</h3>
                        <Button className="m-auto" onClick={(e) => this.handleClick(e)} aria-controls="collapse-register" aria-expanded={open}>Sign Up</Button>
                    </div>
                </div>
                <Collapse in={open}>
                    <div className="mt-4" id="collapse-register">
                        <Login logForm="register"/>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default Landing;