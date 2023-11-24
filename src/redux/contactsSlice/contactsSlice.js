import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts } from 'redux/operations';
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
        state.items.push(action.payload)
      }).addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error= action.payload
      }).addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
         const index = state.items.findIndex(
            task => task.id === action.payload.id
        )
        state.items.splice(index, 1);
      })
    
  },
});


export const contactsReducer = contactsSlice.reducer;
