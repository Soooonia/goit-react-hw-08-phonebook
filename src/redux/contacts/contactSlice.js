import {
    createContactThunk,
    deleteContactThunk,
    getContactsThunk,
  } from "./contactThunk";
  import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
  import { createContact, deleteContact } from "./contactOperations";
  
  const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
  };
  
  const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
  };
  
  const handleFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.contacts = payload;
  };
  
  const handleRejected = (state, { error }) => {
    state.isLoading = false;
    state.error = error.message;
  };
  
  export const addContactAsync = createAsyncThunk(
    "contacts/addContact",
    async ({ contact, token }) => {
      return await createContact(contact, token);
    }
  );
  
  export const deleteContactAsync = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId) => {
      return await deleteContact(contactId);
    }
  );
  
  const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getContactsThunk.pending, handlePending)
        .addCase(getContactsThunk.fulfilled, handleFulfilled)
        .addCase(getContactsThunk.rejected, handleRejected)
        .addCase(addContactAsync.pending, handlePending)
        .addCase(addContactAsync.fulfilled, (state, action) => {
          handleFulfilled(state, action); 
        })
        .addCase(addContactAsync.rejected, handleRejected)
        .addCase(deleteContactAsync.pending, handlePending)
        .addCase(deleteContactAsync.fulfilled, handleFulfilled)
        .addCase(deleteContactAsync.rejected, handleRejected)
      
        .addMatcher(
          isAnyOf(
            createContactThunk.rejected,
            deleteContactThunk.rejected,
            getContactsThunk.rejected
          ),
          handleRejected
        );
    },
  });
  
  export const contactsReducer = contactSlice.reducer;