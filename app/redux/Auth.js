import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";

GoogleSignin.configure({
    webClientId: Config.KEY,
});


export const loginfunc = createAsyncThunk(
    'auth/login',
    async (thunkAPI) => {
        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            return response;
        } catch (error) {
            thunkAPI.rejectWithValue({ msg: "An error occurred" });
        }
    }
);


export const logoutfunc = createAsyncThunk(
    'auth/logout',
    async (thunkAPI) => {
        try {
            await GoogleSignin.signOut();
        } catch (error) {
            thunkAPI.rejectWithValue({ msg: "An error occurred" });
        }
    }
);


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: {},
        status: "idle",
        errors: {},

    },
    extraReducers: builder => {
        builder
            .addCase(loginfunc.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.user = {};
                state.isAuthenticated = false;

            })
            .addCase(loginfunc.fulfilled, (state, action) => {
                state.status = "success";
                state.isAuthenticated = true;
                state.errors = {};
                state.user = action.payload.user;

            })
            .addCase(loginfunc.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.isAuthenticated = false;
                state.user = {};
            })

        builder
            .addCase(logoutfunc.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.user = state.user;
                state.isAuthenticated = true

            })
            .addCase(logoutfunc.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.errors = {};
                state.user = {}
                state.status = "idle";
            })
            .addCase(logoutfunc.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.user = state.user;
                state.isAuthenticated = true
            })

    }

});


export default authSlice.reducer;