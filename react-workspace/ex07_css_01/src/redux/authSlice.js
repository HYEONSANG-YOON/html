import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../service/authThunk";
import { commonLoadingHandlers } from "./commonLoadingHandlers";

const initialState = {
    username : sessionStorage.getItem("username") || "",
    isLoggedIn: !!sessionStorage.getItem("username"),
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.username = "";
            state.isLoggedIn = false;
            sessionStorage.removeItem("username");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, commonLoadingHandlers.pending)
            .addCase(loginThunk.fulfilled, (state, action) => { 
                state.loading = false;
                if ( action.payload.result === 0 ){
                    state.isLoggedIn = true;
                    state.username = action.payload.username;
                    sessionStorage.setItem("username", action.payload.username);
                }else{
                    state.error = "로그인 실패";
                }
            })
            .addCase(loginThunk.rejected, commonLoadingHandlers.rejected);

        builder
            .addCase(registerThunk.pending, commonLoadingHandlers.pending)
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.loading = false;
                if ( action.payload.result === 0){
                    state.error = null;
                }else{
                    state.error = action.payload.message || "회원가입 실패";
                }
            })
            .addCase(registerThunk.rejected, commonLoadingHandlers.rejected);
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;