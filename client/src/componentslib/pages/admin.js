import React from "react";
import axios from 'axios';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import '../styles/admin.sass';

var LoginPage = () => {

  const [userSession, setUserSession] = React.useState({
    username: '',
    email: "",
    groupPermisions: {}
  });

  const validate = values => {
    const errors = {}
    const requiredFields = [ values.type ];
    requiredFields.forEach(field => {
      if (!values[ field ]) {
        errors[ field ] = 'Required'
      }
    })
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (values.password && values.password.length < 2) {
      errors.password = 'Too short';
    }
    return errors
  }

  React.useEffect(()=>{

    axios.get('/api/users/login').then((data)=>{
      setUserSession({ userdata: data.data });
      });
  },[]);

  const [credentials, setCredentials] = React.useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = React.useState({
    email: false,
    password: false
  });

  

  let handleInputChange = name => (e) => {
    let setCredentialsValues = { ...credentials, [name]: e.target.value };
    setCredentials(setCredentialsValues);
     if(name === 'email') {
      let errors = validate({type: "email", email: e.target.value});
      setErrors(errors);
     } else if (name === 'password') {
      let errors = validate({type: "password", password: e.target.value});
      setErrors(errors);
     }
  };
  
  var executeLogin = async function() {
    axios.post('/api/users/login', {
      email: credentials.email,
      password: credentials.password
    }).then((response)=>{
      console.log(response, 'what response man');
      response.data.user.access = true;
      setUserSession(response.data.user);
    }).catch((e)=>{
      console.log(e);
      setUserSession({access: false, message: 'User credentials refused, wrong password or email.'})
    });
  };


  return (
    <React.Fragment>
      {!userSession.access ? <Container className='main-master' maxWidth="lg">
          <Link to='/'>
            <div className='nav--master-login-admin'><Button variant="outlined" color="secondary" size="small"> Back to home page</Button> </div>
          </Link>
          <div className='login-admin-status-panel'> Please log in with your email and password: </div>
          <form className={"login-admin"}>
            <FormControl required={true}>
              <TextField
                onChange={handleInputChange('email')}
                error={ errors && errors.email === 'Invalid email address' ? true: false }
                id="outlined-email-input"
                label={errors && errors.email === 'Invalid email address' ? 'Invalid email address format' : "Email"}
                type="email"
                name="email"
                defaultValue={credentials.email}
                className={'textField'}
                margin="normal"
              />
            </FormControl>
            <FormControl required={true}>
              <TextField
                onChange={handleInputChange('password')}
                error={  errors && errors.password === 'Too short' ? true: false }
                id="standard-password-input"
                label={errors && errors.password === 'Too short' ? "Password too short" : "Password" }
                defaultValue={credentials.password}
                className={'textField'}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </FormControl>
            <FormControl required={true}>
              <Button variant="outlined" onClick={executeLogin} color="primary" className={""}> Sign in </Button>
            </FormControl>
          </form> 
      </Container> : 
      <Container className='main-master' maxWidth="lg">
          Logged in: { userSession.username }
      </Container> }

    </React.Fragment>
  )
}

export default  LoginPage;  //Login page