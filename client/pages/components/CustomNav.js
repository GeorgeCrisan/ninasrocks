import Link from 'next/link';
import "../styles/layout.sass";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const linkStyle = {
  marginRight: 15
}

var CustomNav = () => {
  return (
    <div className='navigation'>

      <div className='nav example'>
        <Link href='/index'>
          <Button variant="contained" color="primary">
            Home
          </Button>
        </Link>
        <Link href='/login'>
          <a style={linkStyle}>  Login  </a>
        </Link>
        <Link href='/about'>
          <a style={linkStyle}>  About  </a>
        </Link>
      </div>
    </div>
  );
}

export default CustomNav;