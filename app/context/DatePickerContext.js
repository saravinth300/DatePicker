// context/DatePickerContext.js
import { createContext, useContext, useState } from 'react';

const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const value = {
    recurrence,
    setRecurrence,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  };

  return (
    <DatePickerContext.Provider value={value}>
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePicker = () => useContext(DatePickerContext);
