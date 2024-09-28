
import { useDatePicker } from '../context/DatePickerContext';

const MiniCalendar = () => {
  const { startDate, endDate } = useDatePicker();

  return (
    <div className="mt-4 p-4 border rounded">
      <h3 className="text-lg font-bold">Selected Dates Preview</h3>
      <p>Start Date: {startDate || 'Not selected'}</p>
      <p>End Date: {endDate || 'Not selected'}</p>
    </div>
  );
};

export default MiniCalendar;
