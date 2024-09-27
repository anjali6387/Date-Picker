// components/RecurrenceOptions.js
'use client'; 
import React from 'react';

const RecurrenceOptions = ({ value, onChange }) => {
  return (
    <div>
      <select
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
