import React from 'react';

function LoginButton(props) {
    return (
        <div className={`login-button-area card ${props.visibility}`}>
            <input className="btn btn-register" type="submit" value="Login" />
        </div>
    );
}

export default LoginButton;