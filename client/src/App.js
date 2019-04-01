import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Landing from './components/Landing';
import Home from './components/Home';
import Play from './components/Play';
import Header from './components/Header';
import Practice from './components/Practice';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <ScrollToTop>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/home" component={Home}/>
            <Route path="/practice" component={Practice}/>
            <Route path="/play" component={Play}/>
          </Switch>
       </ScrollToTop>
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
