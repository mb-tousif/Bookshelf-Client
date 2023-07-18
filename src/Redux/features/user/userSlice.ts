import { createSlice } from "@reduxjs/toolkit";
import { TAuth } from "../../../@types/AllTypes";


const initialState:TAuth = {
    token: localStorage.getItem('token')|| null,
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload as string;
            localStorage.setItem("token", state.token);
        },
        logout: (state) => {
            state.token = null;
            localStorage.removeItem("token");
        }
    }
})

export const { setCredentials, logout } = userSlice.actions;
export default userSlice.reducer;