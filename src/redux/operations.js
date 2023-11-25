import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://655a447c6981238d054d5187.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const response = await axios.get('/contacts');

    return response.data;
  }
);

export const addContact = createAsyncThunk(
  '/contacts/postContact',
  async (contactData, thunkAPI) => {
    const response = await axios.post('/contacts', contactData);

    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  '/contacts/deleteContact',
  async (contact, thunkAPI) => {
    const response = await axios.delete(`/contacts/${contact}`);

    return response.data;
  }
);
