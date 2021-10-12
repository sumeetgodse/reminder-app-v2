import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import "../styles/buttons.css";
import "../styles/reminder.css";

const Date = (props) => {
    const date = new window.Date();

    return (
        <div className = "input-date">
            <MuiPickersUtilsProvider utils = {DateFnsUtils}>
                <Grid container justifyContent = "space-around">
                    <KeyboardDatePicker
                        minDate = {date}
                        disableToolbar
                        variant = "inline"
                        format = "MM/dd/yyyy"
                        margin = "normal"
                        id = "date-picker-inline"
                        value = {props.value}
                        onChange = {props.onChange}
                        KeyboardButtonProps = {{
                          'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
}

export default Date;
