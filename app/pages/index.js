import withLayout from './components/MasterLayout';
import React from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Index = () => {

  //getInitialProps = async function(){
    //const res = await axios();
    //const data = await res;

    //console.log('got credentials data', data);
  //}

  return (
    <React.Fragment>
      <Container className='main-master' maxWidth="lg">
        <div> index Page</div>
      </Container>
    </React.Fragment>);
}

export default withLayout(Index); 