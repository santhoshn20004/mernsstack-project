import React from 'react';

const EventItem = ({ event }) => {
  return (
    <li>
      <div>{event.title}</div>
      <div>{event.date}</div>
      <div>{event.description}</div>
    </li>
  );
};

export default EventItem;
