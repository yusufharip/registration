import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import Alert from './components/alert/Alert';
import LoginButton from './components/input/LoginButton';
import LoginForm from './components/LoginForm';
import AfterLogin from './components/AfterLogin';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

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
            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-centered">
              <Alert
                message={this.state.alert}
                visibility={this.state.alert_visibility}
              />

              <Router>
                <Switch>
                  <Route path='/login'>
                    <LoginForm />
                  </Route>
                  <Route path='/home'>
                    <AfterLogin />
                  </Route>
                  <Route path='/'>
                    <RegistrationForm
                      handleAlert={this.handleAlert}
                      handleLoginButtonVisibility={this.handleLoginButtonVisibility}
                    />

                    <Link to='/login' onClick={ e => this.setState({login_visibility: 'hide'}) }>
                      <LoginButton 
                        visibility={this.state.login_visibility}
                      />
                    </Link>
                  </Route>
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;