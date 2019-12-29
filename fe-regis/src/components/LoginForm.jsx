import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone_number: ''
        }

        this.handlePhone = this.handlePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePhone(e) {this.setState({phone_number: e.target.value})}

    handleSubmit(e){
        e.preventDefault();

        axios.post('https://regis-backend.hubme.xyz/api/login', {
            phone_number: this.state.phone_number,
        }).then(res => {
            if(res.status === 201){
                localStorage.setItem("phone_number", res.data.phone_number);
                localStorage.setItem("token", res.data.token);
                this.props.handleLoginToken();
            }else if(res.status === 200){
                console.log(res.data.message);
            }
        });
    }

    render() {
        if(this.props.token){
            return <Redirect to='/home' />
        }

        return (
            <div className="card">
                <h2 >Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            className="form-control"
                            value={this.state.phone_number}
                            onChange={this.handlePhone} 
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