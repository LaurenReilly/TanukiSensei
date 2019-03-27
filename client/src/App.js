import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Landing from './components/Landing';
import Home from './components/Home';
import Lesson from './components/Lesson';
import Header from './components/Header';
import Learn from './components/Learn';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/home" component={Home}/>
          <Route path="/learn" component={Learn}/>
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
