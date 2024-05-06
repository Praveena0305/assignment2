import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import EventCard from './EventCard';

const events = [
  {
    title: 'Stop Child Labour',
    description: 'In simple terms, child labour is the employment of a child in any type of work for remuneration in cash or kind. The Child labour (Prohibition and Regulation) Act, 1986 defines a “child” as a person who has not completed the fourteenth',
    date: '2024-05-10',
    location: 'india',
    image: 'image1.webp',
  },
  {
    title: 'Welocome To End Poverty!',
    description: 'We are a civil society organization founded in 2009 aimed at improving the quality of life of rural communities in India. As a rural development NGO registered under the Haryana Registration and Regulation of Societies Act, 2012, to work towards the economic development of the poor and needy people in its operational areas.',
    date: '2024-05-15',
    location: ' Gujarat, Uttarakhand, Goa, Karnataka and Delhi',
    image: 'image2.jpeg',
  },
  {
    title: 'Unemployment',
    description: 'Unemployment is more than an economic evil. It is associated with lack of national progress as well as increased crime rates. We at Save The Humanity an NGO for unemployed youth believe we can be part of the solution, the problem',
    date: '2024-05-15',
    location: 'Location 2',
    image: 'image3.jpeg',
  },
  {
    title: 'save Earth!',
    description: 'One of the most difficult challenges that we are facing is environmental degradation, resulting from deforestation, pollution, and climate change. Deteriorating environmental conditions have resulted in many other problems such as scarcity of resources, poor sanitation and hygiene, as well as calamities such as floods and droughts',
    date: '2024-05-15',
    location: 'Location 2',
    image: 'image4.jpeg',
  },
];

const HomePage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <img
        src="bacground.webp"
        alt="Background Image"
        style={{
          position: 'absolute',
          top: -815,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'none',
          zIndex: -1,
        }}
      />
      <img
        src="bacground.webp"
        alt="Second Image"
        style={{
          position: 'absolute',
          top: '-600',
          left: -1755,
          width: '100',
          height: '100%',
          objectFit: 'none',
          zIndex: -2,
          
          
        }}
      />
      <img
        src="bacground.webp"
        alt="Third Image"
        style={{
          position: 'absolute',
          top: 800,
          left: 0, // Adjust the left position based on your design
          width: '100%',
          height: '100%',
          objectFit: 'none',
          zIndex: -4,
        }}
      />
      <div style={{ padding: '20px' }}>
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
