import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AfterLogin extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();

        axios.post('http://localhost:7777/api/logout', {
            phone_number: localStorage.getItem("phone_number"),
        }).then(res => {
            if(res.status === 201){
                console.log(res.data.message);
                localStorage.setItem("phone_number", '');
                localStorage.setItem("token", '');
                window.location.reload();
            }else if(res.status === 200){
                console.log(res.data.message);
            }
        });
    }

    render() {
        if(!localStorage.getItem("token")){
            return <Redirect to='/register' />
        }

        return(
            <div className="card">
                <h2>Homepage</h2>
                <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

export default AfterLogin;