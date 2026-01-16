import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    username: "",
    password: "",
    isLoggedIn : false
}

const inputSlice = createSlice({
    name: "input",
    initalState,
    reducers: {
        setUsername(state, action) {
            state.username = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.username = "";
            state.password = "";
        }
    }
});
export const { setUsername, setPassword, login, logout } = inputSlice
export default inputSlice.reducer;