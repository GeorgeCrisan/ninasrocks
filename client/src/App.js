import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import AboutPage from './componentslib/pages/about';
import Index from './componentslib/pages/first-page'; 
import LoginPage from './componentslib/pages/admin';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Switch>
            <Route  path='/about' component={AboutPage} />
            <Route  path='/admin' component={LoginPage} />
            <Route  path='/' component={Index} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
