import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isUser: false,
    token: localStorage.getItem('token')|| null,
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isUser = action.payload.success;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isUser = false;
            state.token = null;
            localStorage.removeItem("token");
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;