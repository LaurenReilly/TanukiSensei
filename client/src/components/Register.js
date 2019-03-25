import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Register extends Component {
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
            <Form onSubmit={(e) => this.handleSubmitRegister(e)}>
                <input aria-label="username" className="rounded" type="text" id="username" name="username" required onChange={(e) => this.handleChangeUser(e)} value={this.state.username} placeholder="Username"></input>
                <input aria-label="password" className="rounded ml-1" type="password" id="password" name="password" placeholder="Password" onChange={(e) => this.handleChangePass(e)} value={this.state.password} required></input>
                <input aria-label="login" className="rounded ml-1 login" type="submit" value="Login"></input>
            </Form>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));