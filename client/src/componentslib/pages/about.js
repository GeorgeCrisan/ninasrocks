import React, { Component } from "react";
//import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navigation from '../CustomNav';

class AboutPage extends Component {

  render() {
    return (
      <React.Fragment>
        <div className='jumbotron'>
          <Navigation />
        </div>
        <Container className='main-master' maxWidth="lg">
          <div> About page stuff</div>
        </Container>
      </React.Fragment>
    );
  }
}

//export default withLayout(AboutPage);
export default AboutPage;

