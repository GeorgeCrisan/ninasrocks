import React, { Component } from "react";
import withLayout from './components/MasterLayout';

class AboutPage extends Component {

  render() {
    return (
      <div className='container'>
        <p>About us page !</p>
      </div>
    );
  }
}

export default withLayout(AboutPage);

