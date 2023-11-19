import { createSlice } from '@reduxjs/toolkit';

const filterState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    filterContactList: {
      reducer(state, action) {
        return (state = action.payload.value);
      },
      prepare(value) {
        return {
          payload: {
            value,
          },
        };
      },
    },
  },
});

export const { filterContactList } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
