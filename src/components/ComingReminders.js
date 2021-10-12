import { useSelector } from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import "../styles/ureminder.css";
import "../styles/buttons.css";
import { store } from "../store/store";
import { IconButton } from "@material-ui/core";
import AlarmIcon from '@material-ui/icons/Alarm';
import EditPopup from "./EditPopup";
import { clearDraggedReminder } from "../store/dragReducer";
import { addReminder, deleteReminder, addPastReminder, deletePastReminder, changeEditIndex } from "../store/reminderReducer";

const ComingReminders = () => {
    const reminders = useSelector((state) => state.remindersReducer);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const userIndex = useSelector((state) => state.loggedIndexReducer[0]);
    const userEmail = useSelector((state) => state.userReducer[userIndex].email);

    const editIndex = useSelector((state) => state.editReminderReducer[0]);

    const handleDelete = (reminder) => {
        store.dispatch(addPastReminder(reminder));
        store.dispatch(deleteReminder(reminder));
    } 

    const handleEdit = (index) => {
        store.dispatch(changeEditIndex(index));
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const drop = () => {
        const draggedReminder = store.getState().dragReducer[0];
        store.dispatch(clearDraggedReminder());
        store.dispatch(addReminder(draggedReminder));
        store.dispatch(deletePastReminder(draggedReminder.text));
    }

    return(
        <div className = "droppable" onDragOver={onDragOver} onDrop={drop}>
            <div className = "u-reminder-header">
                <AlarmIcon style = {{padding: "20px", color: "#263238", fontSize: "32px"}} />
                <div className = "u-reminder-text">Upcoming Reminders</div>
            </div>
            {
                editIndex !== -1 &&
                <EditPopup />
            }
            <div className="row">
            {
                reminders.map((reminder,index) => {
                    return (
                        reminder.email === userEmail &&
                        <div key = {`${reminder.text}_${reminder.date}`} className="column">
                            <div className="card">
                                <table>
                                    <tbody>
                                        <tr style = {{fontSize: "16px"}}>
                                            <td>
                                                {reminder.text}
                                            </td>
                                        </tr>
                                        <tr style = {{fontSize: "12px"}}>
                                            <td>
                                                {reminder.date.getDate()} {months[reminder.date.getMonth()]}    {reminder.date.getFullYear()}
                                            </td>
                                        </tr>
                                        <tr style = {{fontSize: "12px"}}>
                                            <td>
                                                {days[reminder.date.getDay()]} {reminder.time.getHours()}{`:`}  {reminder.time.getMinutes() < 10 ? `0${reminder.time.getMinutes   ()}` : reminder.time.getMinutes()}
                                            </td>
                                        </tr>
                                        <tr style = {{display: "flex", alignItems: "flex-start"}}>
                                            <td>
                                                <IconButton onClick = {() => handleEdit(index)} style = {{  display:     editIndex === -1 ? 'block' : 'none' }} >
                                                    <EditIcon className = "edit" />
                                                </IconButton>
                                            </td>
                                            <td>
                                                <IconButton style = {{ display: editIndex === -1 ? 'block' :    'none'     }}   onClick = {() => handleDelete(reminder)}>
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

export default ComingReminders;
