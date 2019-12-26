import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import Alert from './components/alert/Alert';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: '',
      visibility: 'hide'
    }

    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert(message) {
    this.setState({alert: message, visibility: 'show'});

    setTimeout(
      function() {
          this.setState({visibility: 'hide'});
      }
      .bind(this),
      5000
    );
  }

  render() {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "80px" }}>
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <Alert 
                message={this.state.alert}
                visibility={this.state.visibility}
              />
              <RegistrationForm 
                handleAlert={this.handleAlert}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
