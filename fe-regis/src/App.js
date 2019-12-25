import React from 'react';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <div className="container" style={{marginTop: "80px"}}>
        <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <RegistrationForm />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
