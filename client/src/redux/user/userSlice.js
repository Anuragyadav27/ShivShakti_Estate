import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
      signInStarted: (state)=>{
        state.loading = true;
      },
      signInSuccess: (state, action)=>{
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null; 
      },
      signInFailure: (state, action)=>{
        state.error = action.payload;
        state.loading = false;
      },
      updateUserStarted: (state)=>{
        state.loading = true;
      },
      updateUserSuccess: (state, action)=>{
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null; 
      },
      updateUserFailure: (state, action)=>{
        state.error = action.payload;
        state.loading = false;
      },
      deleteUserStarted: (state)=>{
        state.loading = true;
      },
      deleteUserSuccess: (state, action)=>{
        state.currentUser = null;
        state.loading = false;
        state.error = null; 
      },
      deleteUserFailure: (state, action)=>{
        state.error = action.payload;
        state.loading = false;
      },
      signOutUserStarted: (state)=>{
        state.loading = true;
      },
      signOutUserSuccess: (state, action)=>{
        state.currentUser = null;
        state.loading = false;
        state.error = null; 
      },
      signOutUserFailure: (state, action)=>{
        state.error = action.payload;
        state.loading = false;
      },
    }
});

export const {signInStarted , signInSuccess, signInFailure , updateUserFailure , updateUserStarted , updateUserSuccess , deleteUserFailure , deleteUserStarted , deleteUserSuccess , signOutUserFailure , signOutUserStarted , signOutUserSuccess} = userSlice.actions;

export default userSlice.reducer;