import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Login from './components/Login';
import Rules from './components/Rules';
import Lesson from './components/Lesson';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
       <h1 className="japanese">日本語</h1>
       <p className="japanese">たぬき</p>
       <p>{this.props.username}</p>
       <p>{this.props.firstLesson}</p>
       <p>{this.props.secondLesson}</p>
       <p>{this.props.thirdLesson}</p>
       <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/rules" component={Rules}/>
          <Route path="/lesson" component={Lesson}/>
        </Switch>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    username: state.username,
    firstLesson: state.firstLesson,
    secondLesson: state.secondLesson,
    thirdLesson: state.thirdLesson,
  }
}


export default withRouter(connect(mapStateToProps, null)(App));
