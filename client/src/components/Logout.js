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
            <div className="mt-5 mb-1">
                <input type="button" onClick={(e) => this.handleClick(e)} alt="Logout" title="Logout">Logout</input>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({type: "LOG_OUT"}),
    }
  }

  export default connect(null, mapDispatchToProps)(withRouter(Logout));