import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AfterLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: ''
        }

        this.handleLogout = this.handleLogout.bind(this);
        this.handleData = this.handleData.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();

        axios.post('http://localhost:7777/api/logout', {
            phone_number: localStorage.getItem("phone_number"),
        }).then(res => {
            if (res.status === 201) {
                console.log(res.data.message);
                localStorage.setItem("phone_number", '');
                localStorage.setItem("token", '');
                window.location.reload();
            } else if (res.status === 200) {
                console.log(res.data.message);
            }
        });
    }

    handleData() {
        axios.post('http://localhost:7777/api/home', {
            phone_number: localStorage.getItem("phone_number"),
            token: localStorage.getItem("token"),
        }).then(res => {
            if (res.status === 201) {
                this.setState({users: res.data.users})
            } else if (res.status === 200) {
                console.log(res.data.message);
            }
        });
    }

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.handleData();
        }
    }

    render() {
        if (!localStorage.getItem("token")) {
            return <Redirect to='/register' />
        }

        const users = this.state.users;
        const listUsers = Object.entries(users).map(([key, user]) => {
            return (
                <tr key={key}>
                    <th scope="row">{user.id}</th>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone_number}</td>
                </tr>
            );
        })

        return (
            <div className="card after-login">
                <h2 className="d-inline-block">Homepage</h2>
                <button type="button" className="btn btn-danger d-inline-block" onClick={this.handleLogout}>Logout</button>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AfterLogin;