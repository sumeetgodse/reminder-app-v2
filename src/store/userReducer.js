import { createSlice } from "@reduxjs/toolkit";
import { getLoggedIndex, getUsers, storeInLocal } from "../utilities/utility";

const loginIndexSlice = createSlice({
    name: "loginIndex",
    initialState: getLoggedIndex(),
    reducers: {
        changeLoggedIndex: (state, action) => {
            state[0] = action.payload;
            storeInLocal("loggedIndex", state);
        },
        clearLoggedIndex: (state, action) => {
            state[0] = action.payload;
            storeInLocal("loggedIndex", state);
        }
    }
})

export const { changeLoggedIndex, clearLoggedIndex } = loginIndexSlice.actions;

export const loggedIndexReducer = loginIndexSlice.reducer;

const userReducerSlice = createSlice({
    name: "user",
    initialState: getUsers(),
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
            storeInLocal("users", JSON.stringify(state));
        }
    }
})

export const {addUser} = userReducerSlice.actions;

export const userReducer = userReducerSlice.reducer;
