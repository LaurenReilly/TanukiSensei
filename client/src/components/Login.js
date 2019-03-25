import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            message: ""
        }
    }

    async getProgress() {
        let response = await axios.get(`/update/progress/${this.state.username}`);
        let obj = response.data
        console.log(obj.firstlesson);
        console.log(obj.username)
        this.props.login(obj.username, obj.firstlesson, obj.secondlesson, obj.thirdlesson);
        this.props.history.push('/home');
    }

   //send username and password to database to check if user exists and password matches 
   handleSubmitLogin(e){
    e.preventDefault();
    axios.post('/authenticate/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then((response) => {
        console.log(response);
        this.getProgress();
      })
      .catch(function (error) {
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
                .then( (response) => {
                this.handleSubmitLogin(e);
                })
                .catch(function (error) {
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

    render() {
        if (this.props.logForm === "login") {
            return (
                <Form inline onSubmit={(e) => this.handleSubmitLogin(e)}>
                    <input aria-label="username" className="rounded" type="text" id="username" name="username" required onChange={(e) => this.handleChangeUser(e)} value={this.state.username} placeholder="Username"></input>
                    <input aria-label="password" className="rounded ml-1" type="password" id="password" name="password" placeholder="Password" onChange={(e) => this.handleChangePass(e)} value={this.state.password} required></input>
                    <input aria-label="login" className="rounded ml-1 login" type="submit" value="Login"></input>
                </Form>
            )
        } else if (this.props.logForm === "register") {
            return (
                <Form onSubmit={(e) => this.handleSubmitRegister(e)} className="d-flex flex-column register m-auto p-4">
                    <h4 className="text-center">NEW USER REGISTRATION:</h4>
                    <label className="mx-1" htmlFor="newUsername">Username:</label>
                    <input className="rounded" type="text" id="newUsername" name="username" required
                        onChange={(e) => this.handleChangeUser(e)} 
                        value={this.state.username}></input>
                    <label className="mx-1 mt-3" htmlFor="newPassword">Password:</label>
                    <input className="rounded" type="password" id="newPassword"  name="password" required
                        onChange={(e) => this.handleChangePass(e)} 
                        value={this.state.password}></input>
                    <label className="mx-1 mt-3" htmlFor="confirmPassword">Confirm Password:</label>
                    <input className="rounded" type="password" id="confirmPassword"  name="confirmPassword" required
                        onChange={(e) => this.handleChangeConfirmPass(e)} value={this.state.confirmPassword} ></input>
                    <p className="error rounded mt-1">{this.state.message}</p>
                    <input className="rounded align-self-center mt-2" type="submit" value="Register"></input>
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
      thirdLesson: state.thirdLesson
    }
  }

let mapDispatchToProps = (dispatch) => {
    return {
        login: (username,firstLesson, secondLesson, thirdLesson) => 
        dispatch({type: "LOGIN", username: username, firstLesson: firstLesson, secondLesson: secondLesson, thirdLesson: thirdLesson}),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));