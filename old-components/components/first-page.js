import React from 'react';
import Container from '@material-ui/core/Container';
import Navigation from './components/CustomNav';

const Index = () => {
  return (
    <React.Fragment>
      <div className='jumbotron'>
        <Navigation />
      </div>
      <Container className='main-master' maxWidth="lg">
        <div> index Page</div>
      </Container>
    </React.Fragment>);
}

//export default withLayout(Index); 

export default Index; 