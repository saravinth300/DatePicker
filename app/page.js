"use client"

import { DatePickerProvider } from "./context/DatePickerContext";
import RecurrenceOptions from './components/RecurrenceOptions';
import DatePicker from './components/DatePicker';
import MiniCalendar from './components/MiniCalendar';


export default function Home() {
  return (

  <DatePickerProvider>
    <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-8">Recurring Date Picker</h1>
        <RecurrenceOptions />
        <DatePicker />
        <MiniCalendar />
      </div>
    
    </DatePickerProvider>
    
  );
}
