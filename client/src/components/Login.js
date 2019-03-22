import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    async getProgress() {
        let response = await axios.get(`/update/progress/${this.state.username}`);
        let obj = response.data
        console.log(obj.firstlesson);
        console.log(obj.username)
        this.props.login(obj.username, obj.firstlesson, obj.secondlesson, obj.thirdlesson);
        this.props.history.push('/rules');
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
        }
    //updating state with the input text as it changes
    handleChangeUser = (e) => {
        this.setState({...this.state, username: e.target.value})
    }

    handleChangePass = (e) => {
        this.setState({...this.state, password: e.target.value })
    }

    render() {
        return (
            <div>
                <div className="mt-4">
                    <div className="d-flex flex-row align-content-between">
                        <div className="forms d-flex flex-column">
                            <div className="login">
                                <div className="m-auto">
                                    <h4 className="text-center">RETURNING USER:</h4>
                                    <form className="d-flex flex-row" onSubmit={(e) => this.handleSubmitLogin(e)}>
                                        <label className="mx-1" htmlFor="username">Username:</label>
                                        <input className="rounded" style={{}}type="text" id="username" name="username" required
                                            onChange={(e) => this.handleChangeUser(e)} 
                                            value={this.state.username}></input>
                                        <label className="mx-1" htmlFor="password">Password:</label>
                                        <input className="rounded" type="password" id="password"  name="password" required
                                            onChange={(e) => this.handleChangePass(e)} 
                                            value={this.state.password}></input>
                                        <input className="rounded ml-1" type="submit" value="Login"></input>
                                    </form>
                                </div>
                            </div>
                            <div className="register align-self-center mt-3">
                                <h4 className="text-center">NEW USER REGISTRATION:</h4>
                                <form className="d-flex flex-column"onSubmit={(e) => this.handleSubmitRegister(e)}>
                                    <label className="mx-1" htmlFor="newUsername">Username:</label>
                                    <input className="rounded" type="text" id="newUsername" name="username" required
                                        onChange={(e) => this.handleChangeUser(e)} 
                                        value={this.state.username}></input>
                                    <label className="mx-1 mt-3" htmlFor="newPassword">Password:</label>
                                    <input className="rounded" type="password" id="newPassword"  name="password" required
                                        onChange={(e) => this.handleChangePass(e)} 
                                        value={this.state.password}></input>
                                    <input className="rounded align-self-center mt-2" type="submit" value="Register"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
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