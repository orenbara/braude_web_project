/*
Calendar Component
This component renders a monthly calendar grid.
It displays color days based on habit progress.
*/
import React from 'react';

const Calendar = ({ currentMonth, calendar, isEditable, onDayClick }) => {
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  return (
    <div className="grid grid-cols-7 gap-2">
      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
        <div key={day} className="text-center text-gray-600 text-sm">{day}</div>
      ))}
      {[...Array(firstDayOfMonth).keys()].map(i => (
        <div key={`empty-${i}`} className="h-8"></div>
      ))}
      {[...Array(daysInMonth).keys()].map(day => {
        const status = calendar[day + 1] || 'default';
        return (
          <div
            key={day + 1}
            onClick={() => isEditable && onDayClick(day + 1)}
            className={`h-8 flex items-center justify-center rounded-full text-sm cursor-pointer
              ${status === 'green' ? 'bg-green-500 text-white' :
                status === 'red' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-400'}`}
          >
            {day + 1}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;