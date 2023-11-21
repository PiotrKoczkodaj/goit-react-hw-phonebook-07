import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/operations';
import { addContact } from 'redux/operations';



const contactsSlice = createSlice({
  name: 'contact',
  initialState: {
    isLoading: false,
    items: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state)=> {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected,(state, action)=> {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state)=> {
  state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
    })
  },
});

export const { fetchingSucces, fetchingInProgress, fetchingError } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
