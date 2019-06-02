import React from 'react';
import clx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

const drawerWidth = "100%";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(['margin','width'],{
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  },
  appBarShift: {

  }
}))

function PersistentDrawerTop() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function toggleDrawer(){
    setOpen(!open);
  }

  return (
    <div className={""}>
    <button onClick={toggleDrawer}> open </button>
    <Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="top"
    open={open}
    classes={{
      paper: classes.drawerPaper,
    }}
      >55
      </Drawer>
    </div>
  );
}



export default PersistentDrawerTop;