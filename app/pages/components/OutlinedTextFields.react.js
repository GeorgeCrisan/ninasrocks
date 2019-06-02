import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const useStylesTextFields = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderColor: 'black',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
    },
  },
  dense: {
    marginTop: theme.spacing(2),
  },
}));


let OutlinedTextFields = (props) => {
  const handleChange = name => event => {
    var values = {...props.values, [name]: event.target.value }
    props.setValues({ values} );
  };
  const classes = useStylesTextFields();
  return (
    <TextField onChange={handleChange('code')}
      id={props.textfieldprops.id}
      label={props.textfieldprops.label}
      placeholder={props.textfieldprops.placeholder}
      className={classes.textField}
      margin="normal"
      variant={props.variant ? props.variant : "outlined"}
    />
  );
};

export default OutlinedTextFields;