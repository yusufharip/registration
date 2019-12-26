import React from 'react';

class LoginForm extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }

    handleSubmit(){
        console.log('tes');
    }

    render() {
        return (
            <div className="card">
                <h2 >Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Phone Number"
                        />
                    </div>
                    <input className="btn btn-register" type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default LoginForm;