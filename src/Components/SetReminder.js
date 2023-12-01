import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SetReminder = ({ addReminder }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [reminderText, setReminderText] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleAddReminder = () => {
    if (reminderText) {
      const dateTime = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        selectedTime.getHours(),
        selectedTime.getMinutes()
      );

      addReminder({
        dateTime,
        text: reminderText,
      });

      setSelectedDate(new Date());
      setSelectedTime(new Date());
      setReminderText('');
    }
  };

  return (
    <div className="container">
      <h2>Set Reminder</h2>
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
          placeholder="Enter your reminder"
        />
      </div>

      <button onClick={handleAddReminder} className="btn btn-primary">
        Add Reminder
      </button>
    </div>
  );
};
export default SetReminder;
