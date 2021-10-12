import { useSelector } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import "../styles/ureminder.css";
import "../styles/buttons.css";
import { store } from "../store/store";
import { IconButton } from "@material-ui/core";
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import { addDraggedReminder } from "../store/dragReducer";
import { deletePastReminder } from "../store/reminderReducer";

const PastReminders = () => {
    const reminders = useSelector((state) => state.pastRemindersReducer);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const userIndex = useSelector((state) => state.loggedIndexReducer[0]);
    const userEmail = useSelector((state) => state.userReducer[userIndex].email);

    const onDragStart = (e, reminder) => {
        store.dispatch(addDraggedReminder(reminder));
    }

    return(
        <div>
            <div className = "p-reminder-header">
                <AlarmOnIcon style = {{padding: "20px", color: "#263238", fontSize: "32px"}} />
                <div className = "p-reminder-text">Past Reminders</div>
            </div>
            <div className="row">
            {
                reminders.map((reminder,index) => {
                    return (
                        reminder.email === userEmail &&
                        <div key = {`${reminder.text}_${reminder.date}`} className="column">
                            <div onDragStart = {(e) => onDragStart(e, reminder)} draggable className="card" style = {{backgroundColor: "#ffe0b2"}}>
                                <table>
                                    <tbody>
                                    <tr style = {{fontSize: "16px"}}>
                                        <td>
                                            {reminder.text}
                                        </td>
                                    </tr>
                                    <tr style = {{fontSize: "12px"}}>
                                        <td>
                                            {reminder.date.getDate()} {months[reminder.date.getMonth()]} {reminder.date.getFullYear()}
                                        </td>
                                    </tr>
                                    <tr style = {{fontSize: "12px"}}>
                                        <td>
                                            {days[reminder.date.getDay()]} {reminder.time.getHours()}{`:`}{reminder.time.getMinutes() < 10 ? `0${reminder.time.getMinutes()}` : reminder.time.getMinutes()}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <IconButton onClick = {() => store.dispatch(deletePastReminder(reminder))}>
                                                <DeleteIcon className = "delete" />
                                            </IconButton>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default PastReminders;
