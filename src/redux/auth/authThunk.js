import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, logIn, logOut, setToken, deleteToken } from "./authOperations";

export const loginThunk = createAsyncThunk("auth/login", async (body, { dispatch }) => {
    const data = await logIn(body)
    dispatch(getProfileThunk())
    return data

})

export const getProfileThunk = createAsyncThunk("auth/getProfile", async (_, { getState }) => {
    const { token } = getState().auth;
    
    if (token) {
        setToken(token); 
        return await getProfile();
    }
});

export const logOutThunk = createAsyncThunk("auth/logout", async (_, { getState }) => {
    const { token } = getState().auth;
    
    if (token) {
        setToken(token); 
        await logOut();
        deleteToken(); 
    }
});