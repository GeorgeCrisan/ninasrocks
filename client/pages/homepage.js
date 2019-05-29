import withLayout from './components/MasterLayout';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Index = () => {
  return (
    <React.Fragment>
      <Container className='main-master' maxWidth="lg">
        <div> No error </div>
      </Container>
    </React.Fragment>);
}

export default withLayout(Index); 