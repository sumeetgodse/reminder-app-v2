import { createSlice } from "@reduxjs/toolkit";

const dragReducerSlice = createSlice({
    name: "dragReducer",
    initialState: [],
    reducers: {
        addDraggedReminder: (state, action) => {
            if( state.length ) {
                state.pop();
            }
            state.push(action.payload);
        },
        clearDraggedReminder: (state, action) => {
            state.pop();
        }
    }
})

export const { addDraggedReminder, clearDraggedReminder } = dragReducerSlice.actions;

export const dragReducer = dragReducerSlice.reducer;
