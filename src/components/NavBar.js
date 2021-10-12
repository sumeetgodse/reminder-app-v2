import TodayTwoToneIcon from '@material-ui/icons/TodayTwoTone';
import { useSelector } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "../styles/reminder.css";
import { IconButton } from '@material-ui/core';
import { store } from '../store/store';
import { clearLoggedIndex } from '../store/userReducer';

const NavBar = () => {
    const loggedIndex = useSelector((state) => state.loggedIndexReducer[0]);

    const handleLogOut = () => {
        store.dispatch(clearLoggedIndex(-1));
    }

    return(
        <div className = "reminder-header">
            <TodayTwoToneIcon className = "reminder-header-icon" style = {{fontSize: "42px"}} />
            <div className = "reminder-header-text">
                Reminder App
            </div>
            {
                loggedIndex !== -1 && 
                <IconButton style = {{marginLeft: "30%"}} onClick = {() => {handleLogOut()}}>
                    <ExitToAppIcon className = "logout" style = {{fontSize: "36px"}} />
                </IconButton>
            }
        </div>
    );
}

export default NavBar;
