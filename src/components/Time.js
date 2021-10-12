import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import "../styles/buttons.css";
import "../styles/reminder.css";

const Time = (props) => {
    return (
        <div className = "input-time">
            <MuiPickersUtilsProvider utils = {DateFnsUtils}>
                <Grid container justifyContent = "space-around">
                    <KeyboardTimePicker
                        margin = "normal"
                        id = "time-picker"
                        value = {props.value}
                        onChange = {props.onChange}
                        KeyboardButtonProps = {{
                          'aria-label': 'change time',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
}

export default Time;
