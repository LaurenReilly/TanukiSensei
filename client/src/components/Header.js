import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
import '../App.css';

import tanuki from '../assets/Tanuki.png';

class Header extends Component {
    render() {
        return (
            <div className="mb-2">
                <Navbar className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img alt="tanuki" src={tanuki} width="40" height="40" className="d-inline-block align-top ml-3 mr-4"/>
                        <h2>Tanuki Sensei</h2>
                    </div>
                    <Form inline>
                        <input aria-label="username" className="rounded" type="text" id="username" name="username" required placeholder="Username"></input>
                        <input aria-label="password" className="rounded ml-1" type="password" id="password" name="password" placeholder="Password" required></input>
                        <input aria-label="login" className="rounded ml-1 login" type="submit" value="Login"></input>
                    </Form>
                </Navbar>
            </div>
        )
    }
}

export default Header;

/* <Form.Group controlId="username">
                            <Form.Control type="text" aria-label="username" placeholder="Username"/>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Control type="password" aria-label="password" placeholder="Password" />
                        </Form.Group>
                        <Button type="submit">
                            Login
                        </Button> */