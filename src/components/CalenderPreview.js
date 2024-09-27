// 

'use client'; 
import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const CalendarPreview = () => {
  const { recurrenceType, startDate, interval, endDate } = useSelector((state) => state.recurrence);

  const generateDates = () => {
    if (!startDate) return [];

    const dates = [];
    let current = dayjs(startDate);
    const end = endDate ? dayjs(endDate) : null;

    for (let i = 0; i < 10; i++) {
      if (end && current.isAfter(end)) {
        break;
      }

      dates.push(current.format('YYYY-MM-DD'));
      if (recurrenceType === 'daily') {
        current = current.add(interval, 'day');
      } else if (recurrenceType === 'weekly') {
        current = current.add(interval, 'week');
      } else if (recurrenceType === 'monthly') {
        current = current.add(interval, 'month');
      } else if (recurrenceType === 'yearly') {
        current = current.add(interval, 'year');
      }
    }

    return dates;
  };

  const recurringDates = generateDates();

  return (
    <div className="mt-4 p-6 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out">
      <h3 className="font-bold text-lg mb-4 text-gray-700 flex justify-center">Recurring Dates Preview:</h3>
      
      {/* Show message if start date is not selected */}
      {!startDate ? (
        <p className="text-red-500 bg-red-100 p-4 rounded-md shadow-md">
          Please select at least a start date
        </p>
      ) : (
        <ul className="space-y-2 transition-opacity duration-500 ease-in-out">
          {recurringDates.map((date, index) => (
            <li 
              key={index} 
              className="p-3 bg-gray-50 border border-gray-200 rounded-md shadow-sm text-gray-800 hover:bg-gray-100 transition-all"
            >
              {date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalendarPreview;
