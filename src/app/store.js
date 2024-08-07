import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '../features/people/peopleSlice'
import findJobReducer from '../features/findJob/findJobSlice'

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    findJob: findJobReducer
  },
});
