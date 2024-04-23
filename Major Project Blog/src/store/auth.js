import {createSlice} from "@reduxjs/toolkit";

initialState = {
	status: false,
	userdata: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: ( state , actions) => {
            state.status = true;
            state.userdata = actions.payload.userdata;
        },
		logout: (state) => {
            state.status = false,
            state.userdata = null;
        },
	},
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
