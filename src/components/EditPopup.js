import Date from "./Date";
import Text from "./Text";
import Time from "./Time";
import "../styles/editreminder.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "../store/store";
import { changeEditIndex, clearEditIndex, editReminder } from "../store/reminderReducer";

const EditPopup = () => {
    const newDate = new window.Date();
    
    const [text, setText] = useState("");
    const [date, setDate] = useState(newDate);
    const [time, setTime] = useState(newDate);

    const editIndex = useSelector((state) => state.editReminderReducer[0]);
    useEffect(() => {
        if(editIndex !== -1) {
            const editedReminder = store.getState().remindersReducer[editIndex];
            setText(editedReminder.text);
            setDate(editedReminder.date);
            setTime(editedReminder.time);
        }
    }, [editIndex]);

    const userIndex = useSelector((state) => state.loggedIndexReducer[0]);
    const userEmail = useSelector((state) => state.userReducer[userIndex].email);

    const handleTextChange = (e) => {
        setText(e.target.value);
    }    

    const handleDateChange = (changedDate) => {
        setDate(changedDate);
    }    

    const handleTimeChange = (changedTime) => {
        setTime(changedTime);
    }  
    
    const handleEdit = () => {
        store.dispatch(changeEditIndex());

        const newReminder = {
            email: userEmail,
            text: text,
            date: date,
            time: time
        }
        store.dispatch(editReminder({editIndex, newReminder}));
        store.dispatch(clearEditIndex(-1));
        setText("");
        setDate(newDate);
        setTime(newDate);
    }

    return(
        <div className = "edit-block">
            <div className = "edit-popup">
                <span className="close-icon" onClick = {() => store.dispatch(clearEditIndex(-1))}>
                    x
                </span>
                <Text value = {text} onChange = {(e) => handleTextChange(e)} />
                <Date value = {date} onChange = {handleDateChange} />            
                <Time value = {time} onChange = {handleTimeChange} />
                <div className = "edit-reminder-div">
                        <input onClick = {() => handleEdit()} className = "edit-reminder" type = "button" value = "EDIT REMINDER" />
                </div>
            </div>
        </div>
    );
}

export default EditPopup;
