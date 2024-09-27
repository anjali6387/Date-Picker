// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import recurrenceReducer from '../features/recurrence/recurrenceSlice';

export const store = configureStore({
  reducer: {
    recurrence: recurrenceReducer,
  },
});
