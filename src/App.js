import React, { useState } from 'react';
import './App.css';
import { format } from 'date-fns';

function App() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedTime, setSelectedTime] = useState(format(new Date(), 'HH:mm'));
  const [selectedActivity, setSelectedActivity] = useState('Wake up');

  const handleSetReminder = () => {
    const scheduledDateTime = new Date();
    scheduledDateTime.setHours(Number(selectedTime.split(':')[0]));
    scheduledDateTime.setMinutes(Number(selectedTime.split(':')[1]));
    scheduledDateTime.setSeconds(0);

    // Schedule reminder logic would typically go here
    // For simplicity, we'll just log the details
    console.log(`Reminder set for ${selectedDay} at ${selectedTime} for ${selectedActivity}`);
    
    // You can add further logic here to integrate with notifications or alerts
    // such as using libraries like react-toastify for notifications
    
    return false;
  };

  return (
    <div className="App">
      <h1>Reminder App</h1>
      <div>
        <label htmlFor="day">Select Day:</label>
        <select id="day" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>
      <div>
        <label htmlFor="time">Select Time:</label>
        <input
          type="time"
          id="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="activity">Select Activity:</label>
        <select id="activity" value={selectedActivity} onChange={(e) => setSelectedActivity(e.target.value)}>
          <option value="Wake up">Wake up</option>
          <option value="Go to gym">Go to gym</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Meetings">Meetings</option>
          <option value="Lunch">Lunch</option>
          <option value="Quick nap">Quick nap</option>
          <option value="Go to library">Go to library</option>
          <option value="Dinner">Dinner</option>
          <option value="Go to sleep">Go to sleep</option>
        </select>
      </div>
      <div>
        <button onClick={handleSetReminder}>Set Reminder</button>
      </div>
    </div>
  );
}

export default App;
