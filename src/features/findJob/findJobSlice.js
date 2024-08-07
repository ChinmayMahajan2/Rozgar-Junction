import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllJob, fetchJobByFilter } from './findJobAPI';

const initialState = {
  jobs: [],
  status: 'idle',
};

export const fetchAllJobAsync = createAsyncThunk(
  'findJob/fetchAllJob',
  async () => {
    const response = await fetchAllJob();
    return response.data;
  }
);

export const fetchJobByFilterAsync = createAsyncThunk(
  'findJob/fetchJobByFilter',
  async (filter) => {
    const response = await fetchJobByFilter(filter);
    return response.data;
  }
);
 
export const findJobSlice = createSlice({
  name: 'findJob',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllJobAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllJobAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.jobs = action.payload;
      })
      .addCase(fetchJobByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJobByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.jobs = action.payload;
      });
  },
});

export const { increment } = findJobSlice.actions;

export const selectAllJob = (state) => state.findJob.jobs;


export default findJobSlice.reducer;
