import React, { Component } from "react";
import withLayout from './components/MasterLayout';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class AboutPage extends Component {

  render() {
    return (
      <Container className='main-master' maxWidth="lg">
        <div> About page stuff</div>
      </Container>
    );
  }
}

export default withLayout(AboutPage);

