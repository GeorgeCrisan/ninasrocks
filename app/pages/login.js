import React, { Component } from "react";
import withLayout from './components/MasterLayout';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

var LoginPage = () => {

  return (
    <React.Fragment>
    <Container className='main-master' maxWidth="lg">
    <div> No error </div>
    </Container>
    </React.Fragment>
  )
}

export default withLayout(LoginPage);  //Login page with payout