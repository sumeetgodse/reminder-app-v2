import { configureStore } from "@reduxjs/toolkit";
import { dragReducer } from "./dragReducer";
import { loggedIndexReducer, userReducer } from "./userReducer";
import { remindersReducer, pastRemindersReducer, editReminderReducer } from "./reminderReducer";

export const store = configureStore({
    reducer: {
        remindersReducer: remindersReducer,
        pastRemindersReducer: pastRemindersReducer,
        editReminderReducer: editReminderReducer,
        userReducer: userReducer,
        loggedIndexReducer: loggedIndexReducer,
        dragReducer: dragReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});
