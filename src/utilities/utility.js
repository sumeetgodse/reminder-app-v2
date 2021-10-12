export const getReminders = (key) => {
    const reminders = localStorage.getItem(key);
    if ( reminders && reminders.length ) {
        const parsedReminders = JSON.parse(reminders);
        for( let i = 0; i < parsedReminders.length; i ++ ) {
            parsedReminders[i].date = new window.Date(parsedReminders[i].date);
            parsedReminders[i].time = new window.Date(parsedReminders[i].time);
        }
        return parsedReminders;
    } else {
        return [];
    }
}

export const getUsers = () => {
    const users = localStorage.getItem("users");
    if( users && users.length ) {
        return JSON.parse(users);
    } else {
        return [];
    }
}

export const storeInLocal = (key, currentState) => {
    localStorage.setItem(key, currentState);
}

export const getLoggedIndex = () => {
    const index = localStorage.getItem("loggedIndex");
    if( index ) {
        return [Number(index)];
    } else {
        return [-1];
    }
}
