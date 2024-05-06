import React from 'react';
import './style.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const EventCard = ({ event }) => {
  const handleShowDetails = () => {
    // Handle the click event to show more details
    console.log('Show more details for event:', event);
  };

  return (
    <div className="event-card">
      <img src={event.image} alt={event.title}/>
      <div className="event-details">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <button onClick={handleShowDetails}>Event Date: {event.date}</button>
        <p><LocationOnIcon /> Location: {event.location}</p>
       
        
      </div>
    </div>
  );
};

export default EventCard;
