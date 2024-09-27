'use client'; 
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRecurrenceType, setStartDate, setEndDate } from '../features/recurrence/recurrenceSlice';
import RecurrenceOptions from './RecurrenceOptions';

const DatePicker = () => {
  const dispatch = useDispatch();
  const { recurrenceType, startDate, endDate } = useSelector((state) => state.recurrence);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 text-gray-700 flex items-center justify-center">Pick Dates & Recurrence Type</h2>

      {/* Flex container for all options */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-4">

        {/* Recurrence Type */}
        <div className="flex-1">
          <label className="block font-bold text-gray-600 mb-2">Recurrence Type:</label>
          <RecurrenceOptions
            value={recurrenceType}
            onChange={(e) => dispatch(setRecurrenceType(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Start Date */}
        <div className="flex-1">
          <label className="block font-bold text-gray-600 mb-2">Start Date:</label>
          <input
            type="date"
            value={startDate || ''}
            onChange={(e) => dispatch(setStartDate(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
          />
        </div>

        {/* End Date */}
        <div className="flex-1">
          <label className="block font-bold text-gray-600 mb-2">End Date (optional):</label>
          <input
            type="date"
            value={endDate || ''}
            onChange={(e) => dispatch(setEndDate(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
