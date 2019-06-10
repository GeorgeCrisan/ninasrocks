import React, { Component } from 'react';
import CustomNav from './Components/CustomNav';

class App extends Component {
  render() {
    return (
      <div>

        <div className='jumbotron'>
          <CustomNav />
        </div>

        <div className="App">
          Nice
        </div>

      </div>
    );
  }
}

export default App;
