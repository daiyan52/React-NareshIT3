import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModifyReminder = ({ reminders, updateReminder }) => {
  const [selectedReminder, setSelectedReminder] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [reminderText, setReminderText] = useState('');

  const handleReminderChange = (e) => {
    const selectedValue = e.target.value;
    const reminder = reminders.find((r) => r.value === selectedValue);
    setSelectedReminder(reminder);
    setSelectedDate(reminder.date);
    setSelectedTime(reminder.date);
    setReminderText(reminder.text);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleUpdateReminder = () => {
    if (selectedReminder && reminderText) {
      const updatedDateTime = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        selectedTime.getHours(),
        selectedTime.getMinutes()
      );

      updateReminder(selectedReminder.value, updatedDateTime, reminderText);

      setSelectedReminder(null);
      setSelectedDate(new Date());
      setSelectedTime(new Date());
      setReminderText('');
    }
  };

  return (
    <div className="container">
      <h2>Modify Reminder</h2>
      <div className="form-group">
        <label>Select Reminder:</label>
        <select
          value={selectedReminder ? selectedReminder.value : ''}
          onChange={handleReminderChange}
          className="form-control"
        >
          <option value="">Select a reminder</option>
          {reminders.map((reminder) => (
            <option key={reminder.value} value={reminder.value}>
              {reminder.text}
            </option>
          ))}
        </select>
      </div>

      {selectedReminder && (
        <div>
          <div className="form-group">
            <label>Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
            />
          </div>

          <div className="form-group">
            <label>Time:</label>
            <DatePicker
              selected={selectedTime}
              onChange={handleTimeChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div>

          <div className="form-group">
            <label>Reminder Text:</label>
            <input
              type="text"
              value={reminderText}
              onChange={(e) => setReminderText(e.target.value)}
              className="form-control"
              placeholder="Modify your reminder"
            />
          </div>

          <button onClick={handleUpdateReminder} className="btn btn-primary">
            Update Reminder
          </button>
        </div>
      )}
    </div>
  );
};

export default ModifyReminder;
