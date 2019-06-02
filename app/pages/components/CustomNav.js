import Link from 'next/link';
import "../styles/layout.sass";
import "../styles/navigation.sass";
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import deepPurple from '@material-ui/core/colors/deepPurple';
import PersistentDrawerTop from './PersistentDrawers.react';

const linkStyle = {
  marginRight: 15,
  marginLeft: 15
}

const ColorButtonPurple = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    '&:hover': {
      backgroundColor: red[900],
    },
  },
}))(Button);


var CustomNav = () => {
  return (
    <div className='navigation'>
      <PersistentDrawerTop />
      <div className='nav--master-login'><Button  variant="outlined" color="secondary" size="small"> rock creator </Button> </div>
      <div className='nav'>
        <Link href='/'>
          <ColorButtonPurple  style={linkStyle} variant="contained" color="primary">
            Pile of rocks
          </ColorButtonPurple>
        </Link>
        <Link href='/login'>
          <ColorButtonPurple style={{marginLeft: 15}} variant="contained" color="primary">
            Found a rock? Use the code and show everyone!
      </ColorButtonPurple>
        </Link>
        <Link href='/about'>
          <ColorButtonPurple style={{marginLeft: 15}} variant="contained" color="primary">
            What's all this about?
          </ColorButtonPurple>
        </Link>
      </div>
    </div>
  );
}

export default CustomNav;