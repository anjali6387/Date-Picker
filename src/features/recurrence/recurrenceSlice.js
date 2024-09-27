// features/recurrence/recurrenceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recurrenceType: 'daily',
  interval: 1,
  daysOfWeek: [],
  nthDay: null,
  startDate: null,
  endDate: null,
};

const recurrenceSlice = createSlice({
  name: 'recurrence',
  initialState,
  reducers: {
    setRecurrenceType: (state, action) => {
      state.recurrenceType = action.payload;
    },
    setInterval: (state, action) => {
      state.interval = action.payload;
    },
    setDaysOfWeek: (state, action) => {
      state.daysOfWeek = action.payload;
    },
    setNthDay: (state, action) => {
      state.nthDay = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export const { setRecurrenceType, setInterval, setDaysOfWeek, setNthDay, setStartDate, setEndDate } = recurrenceSlice.actions;
export default recurrenceSlice.reducer;
