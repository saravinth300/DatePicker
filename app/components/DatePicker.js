
import { useDatePicker } from '../context/DatePickerContext';

const DatePicker = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useDatePicker();

  return (
    <div className="flex gap-4 mt-4">
      <div>
        <label>Start Date</label>
        <input
          type="date"
          value={startDate || ''}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <label>End Date</label>
        <input
          type="date"
          value={endDate || ''}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2"
        />
      </div>
    </div>
  );
};

export default DatePicker;
