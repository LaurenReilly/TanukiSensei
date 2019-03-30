import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import { withRouter } from 'react-router-dom';
import '../App.css';

import Login from './Login';
import Logout from './Logout';
import tanuki from '../assets/Tanuki.png';

class Header extends Component {

    handleClick(e) {
        e.preventDefault();
        this.props.history.push('/home');
    }

    render() {
        let log;
        if (this.props.username) {
            log = <Logout/>
        } else {
            log = <Login logForm="login"/>
        }
        return (
            <div className="mb-2">
                <Navbar className="d-flex justify-content-between pt-3">
                    <div className="d-flex">
                        <img onClick={(e) => this.handleClick(e)} alt="tanuki" src={tanuki} width="40" height="40" className="d-inline-block align-top ml-3 mr-4 homeLogo"/>
                        <h2>Tanuki Sensei</h2>
                    </div>
                    {log}
                </Navbar>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        username: state.username
      }
}

export default withRouter(connect(mapStateToProps, null)(Header));
