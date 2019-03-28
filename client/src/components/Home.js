import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Menu from './Menu';

class Home extends Component {

    componentDidMount() {
        if(!this.props.username) {
            this.props.history.push('/');
        } else {
            return
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Welcome, {this.props.username}!</h1>
                <Menu />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        username: state.username
    }
}

export default withRouter(connect(mapStateToProps, null)(Home));