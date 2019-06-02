import React, { Component } from "react";
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import withLayout from './components/MasterLayout';
import './styles/admin.sass';

var LoginPage = () => {

  const [credentials, setCredentials] = React.useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = React.useState({
    errorUsername: false,
    errorPassword: false
  });

  let handleInputChange = name => (e) => {
    let setCredentialsValues = { ...credentials, [name]: e.target.value };
    setCredentials(setCredentialsValues, () => {
      console.log('after set');
    });
  }

  let checkForError = name => () => {

  }


  return (
    <React.Fragment>
      <Container className='main-master' maxWidth="lg">
          <Link href='/'>
            <div className='nav--master-login'><Button variant="outlined" color="secondary" size="small"> Back to home page</Button> </div>
          </Link>
          <form className={"login-admin"}>
            <FormControl required={true}>
              <TextField
                onChange={handleInputChange}
                error={errors.errorUsername}
                id="standard-username-import"
                label="Username"
                defaultValue={credentials.username}
                className={'textField'}
                margin="normal"
              />
            </FormControl>
            <FormControl required={true}>
              <TextField
                onChange={handleInputChange}
                error={errors.errorPassword}
                id="standard-password-input"
                label="Password"
                defaultValue={credentials.password}
                className={'textField'}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </FormControl>
            <FormControl required={true}>
              <Button variant="outlined" color="primary" className={""}> Sign in </Button>
            </FormControl>
          </form>
      </Container>

    </React.Fragment>
  )
}

export default LoginPage;  //Login page