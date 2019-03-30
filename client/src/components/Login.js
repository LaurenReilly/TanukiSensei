import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            message: "",
            animation: ""
        }
    }

    async getProgress() {
        let response = await axios.get(`/update/progress/${this.state.username}`);
        let obj = response.data
        this.props.login(obj.username, obj.firstlesson, obj.secondlesson, obj.thirdlesson, obj.fourthlesson, obj.fifthlesson, obj.sixthlesson);
        this.props.history.push('/home');
    }

   //send username and password to database to check if user exists and password matches 
   handleSubmitLogin = (e) => {
    e.preventDefault();
    axios.post('/authenticate/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then((response) => {
        console.log(response);
        this.getProgress();
      })
      .catch((error) => {
        this.setState({...this.state, animation: "shake"});
        console.log(error);
      });
    }

    handleSubmitRegister = (e) => {
        e.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({...this.state, message: "Passwords must match!" });
            return;
        } else if (this.state.password === this.state.confirmPassword) {
            this.setState({...this.state, message: "" });
            axios.post('/authenticate/register', {
                username: this.state.username,
                password: this.state.password
                })
                .then((response) => {
                this.handleSubmitLogin(e);
                })
                .catch((error) => {
                this.setState({...this.state, message: "User already exists!" });
                console.log(error);
                });
        } else {
            return
        }

    }

    //updating state with the input text as it changes
    handleChangeUser = (e) => {
        this.setState({...this.state, username: e.target.value})
    }

    handleChangePass = (e) => {
        this.setState({...this.state, password: e.target.value })
    }

    handleChangeConfirmPass = (e) => {
        this.setState({...this.state, confirmPassword: e.target.value })
    }

    handleEnd = (e) => {
        e.preventDefault();
        this.setState({...this.state, animation: ""})
    }

    render() {
        if (this.props.logForm === "login") {
            return (
                <Form className={this.state.animation} inline onSubmit={(e) => this.handleSubmitLogin(e)} onAnimationEnd={(e) => this.handleEnd(e)}>
                    <input maxLength="15" aria-label="username" className="rounded" type="text" id="username" name="username" required onChange={(e) => this.handleChangeUser(e)} value={this.state.username} placeholder="Username"></input>
                    <input maxLength="15" aria-label="password" className="rounded ml-1" type="password" id="password" name="password" placeholder="Password" onChange={(e) => this.handleChangePass(e)} value={this.state.password} required></input>
                    <Button aria-label="login" className="rounded ml-1 login" type="submit">Login</Button>
                </Form>
            )
        } else if (this.props.logForm === "register") {
            return (
                <Form onSubmit={(e) => this.handleSubmitRegister(e)} className="d-flex flex-column register m-auto p-4 blueShadow login">
                    <h4 className="text-center">NEW USER REGISTRATION:</h4>
                    <label className="mx-1" htmlFor="newUsername">Username:</label>
                    <input maxLength="15" className="rounded" type="text" id="newUsername" name="username" required
                        onChange={(e) => this.handleChangeUser(e)} 
                        value={this.state.username}></input>
                    <label className="mx-1 mt-3" htmlFor="newPassword">Password:</label>
                    <input maxLength="15" className="rounded" type="password" id="newPassword"  name="password" required
                        onChange={(e) => this.handleChangePass(e)} 
                        value={this.state.password}></input>
                    <label className="mx-1 mt-3" htmlFor="confirmPassword">Confirm Password:</label>
                    <input maxLength="15" className="rounded" type="password" id="confirmPassword"  name="confirmPassword" required
                        onChange={(e) => this.handleChangeConfirmPass(e)} value={this.state.confirmPassword} ></input>
                    <p className="error rounded mt-1 text-center">{this.state.message}</p>
                    <Button className="rounded align-self-center mt-2 login" type="submit">Register</Button>
                </Form>
            )
        } else {
            return null;
        }
    }
}

let mapStateToProps = (state) => {
    return {
      username: state.username,
      firstLesson: state.firstLesson,
      secondLesson: state.secondLesson,
      thirdLesson: state.thirdLesson,
      fourthLesson: state.fourthLesson,
      fifthLesson: state.fifthLesson,
      sixthLesson: state.sixthLesson,
    }
  }

let mapDispatchToProps = (dispatch) => {
    return {
        login: (username,firstLesson, secondLesson, thirdLesson, fourthLesson, fifthLesson, sixthLesson) => 
        dispatch({type: "LOGIN", username: username, firstLesson: firstLesson, secondLesson: secondLesson, thirdLesson: thirdLesson, fourthLesson: fourthLesson, fifthLesson: fifthLesson, sixthLesson: sixthLesson}),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));