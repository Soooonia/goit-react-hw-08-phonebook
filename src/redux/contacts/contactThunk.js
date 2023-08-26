import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContact, deleteContact, getContact } from "./contactOperations";

export const createContactThunk = createAsyncThunk("contacts/createContact", async (contactData) => {
  return await createContact(contactData);
});

export const deleteContactThunk = createAsyncThunk("contacts/deleteContact", async (contactId) => {
  return await deleteContact(contactId);
});

export const getContactsThunk = createAsyncThunk("contacts/getContacts", async () => {
  return await getContact();
});