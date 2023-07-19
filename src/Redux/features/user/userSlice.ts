import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TAuth } from "../../../@types/AllTypes";


const initialState:TAuth = {
    accessToken: localStorage.getItem('token')|| null,
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action:PayloadAction<{ accessToken: string}>) => {
            state.accessToken = action.payload.accessToken;
            localStorage.setItem("token", state.accessToken);
        },
        logout: (state) => {
            state.accessToken = null;
            localStorage.removeItem("token");
        }
    }
})

export const { setCredentials, logout } = userSlice.actions;
export default userSlice.reducer;