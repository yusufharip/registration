import React from 'react';
import axios from 'axios';
import InputString from './input/InputString';
import InputRadio from './input/InputRadio';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            first_name: '',
            last_name: '',
            phone_number: '',
            dob: '',
            email: '',
            gender: 'male',
            warning: ''
        };

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
        this.handleDOB = this.handleDOB.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleDeleteWarning = this.handleDeleteWarning.bind(this);
    }

    handleFirstName(first_name) {this.setState({first_name: first_name})}
    handleLastName(last_name) {this.setState({last_name: last_name})}
    handlePhoneNumber(phone_number) {this.setState({phone_number: phone_number})}
    handleDOB(dob) {this.setState({dob: dob})}
    handleGender(gender) {this.setState({gender: gender})};
    handleEmail(email) {this.setState({email: email})}
    handleDeleteWarning(newWarning) {this.setState({warning: newWarning})}
    emptyForm() {this.setState({email: '', dob: '', phone_number: '', first_name: '', last_name: '', gender: 'male', warning: ''})}

    handleSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:7777/api/registration', {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone_number: this.state.phone_number,
            gender: this.state.gender,
            date_of_birth: this.state.dob,
            email: this.state.email
        }).then(res => {
            if(res.status === 201){
                this.emptyForm();
            }else if(res.status === 200){
                this.setState({warning: res.data});
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputString
                    type="text" 
                    name="phone_number"
                    placeholder="Phone Number"
                    value={this.state.phone_number}
                    deleteWarning={this.handleDeleteWarning}
                    onValueChange={this.handlePhoneNumber}
                    required="required"
                    warning={this.state.warning}
                />

                <InputString 
                    type="text" 
                    name="first_name"
                    placeholder="First Name"
                    value={this.state.first_name}
                    deleteWarning={this.handleDeleteWarning}
                    onValueChange={this.handleFirstName}
                    required="required"
                    warning={this.state.warning}
                />

                <InputString 
                    type="text" 
                    name="last_name"
                    placeholder="Last Name"
                    value={this.state.last_name}
                    deleteWarning={this.handleDeleteWarning}
                    onValueChange={this.handleLastName}
                    required="required"
                    warning={this.state.warning}
                />

                <InputString 
                    type="date" 
                    name="date_of_birth"
                    placeholder="Date of Birth"
                    value={this.state.dob}
                    deleteWarning={this.handleDeleteWarning}
                    onValueChange={this.handleDOB}
                    warning={this.state.warning}
                />

                <InputRadio
                    gender={this.state.gender}
                    onValueChange={this.handleGender}
                />

                <InputString 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    deleteWarning={this.handleDeleteWarning}
                    onValueChange={this.handleEmail}
                    required="required"
                    warning={this.state.warning}
                />

                <input className="btn btn-danger" type="submit" value="Register" />
            </form>
        );
    }
}

export default RegistrationForm;