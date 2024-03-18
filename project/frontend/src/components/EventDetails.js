import React from 'react';

const EventDetails = ({ event }) => {
  return (
    <div>
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Description: {event.description}</p>
    </div>
  );
};

export default EventDetails;
