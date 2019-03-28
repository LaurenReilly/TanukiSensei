import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
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
            <div className="d-flex align-items-center">
                <p className="m-auto">{this.props.username}</p>
                <Button aria-label="logout" className="rounded ml-2 logout" type="button" onClick={(e) => this.handleClick(e)} >Logout</Button>
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