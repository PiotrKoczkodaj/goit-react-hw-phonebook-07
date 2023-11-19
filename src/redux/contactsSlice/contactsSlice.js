import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const contactsInitialState = JSON.parse(localStorage.getItem('Persons'));

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem('Persons', JSON.stringify(state));
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex(
          contact => contact.id === action.payload.id
        );

        state.splice(index, 1);
        localStorage.setItem('Persons', JSON.stringify(state));
      },
      prepare(contactId) {
        return {
          payload: {
            id: contactId,
          },
        };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
