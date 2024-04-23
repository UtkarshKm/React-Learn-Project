import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		todo: this,
	},
});

export default store;
