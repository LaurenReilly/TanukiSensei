import React, { Component } from 'react';

class Rules extends Component {
    render() {
        return (
            <div>
                <h1>RULES</h1>
                <button onClick={() => this.props.history.push('/lesson')}>Go to Lesson</button>
            </div>
        )
    }
}

export default Rules;