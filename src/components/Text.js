import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "../styles/buttons.css";
import "../styles/reminder.css";

const useStyles = makeStyles((theme) => ({
  	root: {
  	  	'& .MuiTextField-root': {
  	  	  	margin: theme.spacing(1),
  	  	  	width: '25ch',
  	  	},
  	},
}));

const Text = (props) => {
  	const classes = useStyles();

  	return (
  	  <form className = {classes.root} noValidate autoComplete = "off">
  	    <div className = "input-text">
  	      	<TextField
  	      	  	id = "outlined-multiline-static"
  	      	  	label = "Reminder"
  	      	  	multiline
  	      	  	rows = {4}
  	      	  	placeholder = "What's on your mind?"
  	      	  	variant = "outlined"
  	      	  	value = {props.value}
  	      	  	onChange = {props.onChange}
  	      	/>
  	    </div>
  	  </form>
  	);
}

export default Text;
