import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllPeople, fetchPeopleByFilter } from './peopleAPI';

const initialState = {
  people: [],
  status: 'idle',
};

export const fetchAllPeopleAsync = createAsyncThunk(
  'product/fetchAllPeople',
  async () => {
    const response = await fetchAllPeople();
    return response.data;
  }
);

export const fetchPeopleByFilterAsync = createAsyncThunk(
  'product/fetchPeopleByFilter',
  async (filter) => {
    const response = await fetchPeopleByFilter(filter);
    return response.data;
  }
);

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPeopleAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllPeopleAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.people = action.payload;
      })
      .addCase(fetchPeopleByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPeopleByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.people = action.payload;
      });
  },
});

export const { increment } = peopleSlice.actions;

export const selectAllPeople = (state) => state.people.people;


export default peopleSlice.reducer;
