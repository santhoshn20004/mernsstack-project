import React, { useState } from 'react';
import './App.css'; 
import EventList from './components/EventList';
import AddEventForm from './components/AddEventForm';
import EventDetails from './components/EventDetails';

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAddEvent = newEvent => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
  };

  const handleEventClick = event => {
    setSelectedEvent(event);
  };

  return (
    <div className="container">
      <h1>Online Event Management</h1>
      <AddEventForm onAdd={handleAddEvent} />
      <EventList events={events} onEventClick={handleEventClick} />
      {selectedEvent && <div className="event-details"><EventDetails event={selectedEvent} /></div>}
    </div>
  );
};

export default App;
