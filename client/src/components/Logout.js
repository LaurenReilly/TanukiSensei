import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class Logout extends Component {
    handleClick = (e) => {
        e.preventDefault();
        axios.post('/authenticate/logout')
            .then( (response) => {
            this.props.logout();
            this.props.history.push('/');
            })
            .catch(function (error) {
            console.log(error);
            });
        }

    render() {
        return (
            <div className="d-flex">
                <p className="mr-2">{this.props.username}</p>
                <input aria-label="logout" className="rounded ml-1 logout" type="button" onClick={(e) => this.handleClick(e)} value="Logout"></input>
            </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        username: state.username
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({type: "LOG_OUT"}),
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Logout));