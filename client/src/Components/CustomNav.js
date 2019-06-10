import { Link } from "react-router-dom";
import React from 'react';
import "./styles/navigation.sass";
import "./styles/jumbotron.sass";
import Button from '@material-ui/core/Button';
import {  withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import deepPurple from '@material-ui/core/colors/deepPurple';
import PersistentDrawerTop from './PersistentDrawers.react';

const linkStyle = {
  marginRight: 15,
  marginLeft: 15
}

const ColorButtonPurple = withStyles(() => ({
  root: {
    color: 'white',
    backgroundColor: deepPurple[500],
    marginBottom: 10,
    textAlign: "center",
    maxWidth: 300,
    '&:hover': {
      backgroundColor: red[900],
    },
  },
}))(Button);


var CustomNav = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <div className='navigation'>
      <PersistentDrawerTop openDrawer={openDrawer}/>
      <Link to='/admin'>
        <div className='nav--master-login'><Button  variant="outlined" color="secondary" size="small"> rock creator </Button> </div>
      </Link>
      <div className='nav'>
        <Link to='/'>
          <ColorButtonPurple  style={linkStyle} variant="contained" color="primary">
          The pile of rocks
          </ColorButtonPurple>
        </Link>
        
        <ColorButtonPurple onClick={()=> setOpenDrawer(!openDrawer) } style={{marginLeft: 15}} variant="contained" color="primary">
            Found a rock? Use the code and show everyone!
      </ColorButtonPurple>
        <Link to='/about'>
          <ColorButtonPurple style={{marginLeft: 15}} variant="contained" color="primary">
            What's all this about?
          </ColorButtonPurple>
        </Link>
      </div>
    </div>
  );
}

export default CustomNav;