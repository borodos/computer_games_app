import { createSlice } from "@reduxjs/toolkit";

const authUserSlice = createSlice({
    name: "authUserSlice",
    initialState: {
        user: {},
    },

    reducers: {
        setAuthUser(state, action) {
            state.user = action.payload;
        },
        removeAuthUser(state) {
            state.user = {};
        },
    },
});

export default authUserSlice.reducer;
export const { setAuthUser, removeAuthUser } = authUserSlice.actions;
