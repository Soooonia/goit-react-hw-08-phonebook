import { getProfileThunk, logOutThunk, loginThunk } from "./authThunk";

const { createSlice, isAnyOf } = require("@reduxjs/toolkit");

const initialState = {
  token: "",
  isLoading: false,
  error: "",
  profile: null,
  userName: null, 
  userEmail: null  
}

const handlePending = (state, {payload}) => {
  state.isLoading = true
}
const handleFulfilled = (state, {payload}) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token
  state.profile = payload
  state.userName = payload.user.name
  state.userEmail = payload.user.email

}
const handleRejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload; 
}

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
};

const handleFulfilledLogout = (state) => { 
  state.isLoading = false;
  state.error = '';
  state.token = '';
  state.userName = null;
  state.userEmail = null;
  state.profile = null; 
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loginThunk.fulfilled, handleFulfilled)
    .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
    .addCase(logOutThunk.fulfilled, handleFulfilledLogout)
    .addMatcher(isAnyOf(loginThunk.pending, getProfileThunk.pending), handlePending)
    .addMatcher(isAnyOf(loginThunk.rejected, getProfileThunk.rejected), handleRejected)
  },
})

export const authReducer = authSlice.reducer