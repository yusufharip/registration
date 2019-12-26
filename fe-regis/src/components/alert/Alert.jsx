import React from 'react';

class Alert extends React.Component {
    render() {
        return (
            <div className={`alert alert-info ${this.props.visibility}`} role="alert">
                {this.props.message}
            </div>
        );
    }
}

export default Alert;