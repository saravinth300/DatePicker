
import { useDatePicker } from '../context/DatePickerContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useDatePicker();

  const handleRecurrenceChange = (type) => {
    setRecurrence({ ...recurrence, type });
  };

  return (
    <div className="flex gap-4">
      {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((option) => (
        <button
          key={option}
          onClick={() => handleRecurrenceChange(option)}
          className={`px-4 py-2 ${recurrence.type === option ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default RecurrenceOptions;
