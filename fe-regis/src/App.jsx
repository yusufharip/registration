import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import Alert from './components/alert/Alert';
import LoginButton from './components/input/LoginButton';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: '',
      alert_visibility: 'hide',
      login_visibility: 'hide'
    }

    this.handleAlert = this.handleAlert.bind(this);
    this.handleLoginButtonVisibility = this.handleLoginButtonVisibility.bind(this);
  }

  handleAlert(message) {
    this.setState({ alert: message, alert_visibility: 'show' });

    setTimeout(
      function () { this.setState({ alert_visibility: 'hide' }) }
        .bind(this), 5000);
  }

  handleLoginButtonVisibility(visibility) {this.setState({ login_visibility: visibility})}

  render() {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "80px" }}>
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <Alert
                message={this.state.alert}
                visibility={this.state.alert_visibility}
              />
              <RegistrationForm
                handleAlert={this.handleAlert}
                handleLoginButtonVisibility={this.handleLoginButtonVisibility}
              />
              <LoginButton 
                visibility={this.state.login_visibility}
              />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
