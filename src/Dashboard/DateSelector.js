import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../src/index.css';

const DateSelector = ({ onDateChange }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthChange = (date) => {
    setSelectedMonth(date);
    onDateChange(date);
  };

  return (
    <DatePicker
      id="datePicker"
      placeholderText="Select Month" 
      className="custom-datepicker-input"
      selected={selectedMonth}
      onChange={handleMonthChange}
      dateFormat="MMMM yyyy" 
      showMonthYearPicker 
    />
  );
};

export default DateSelector;
