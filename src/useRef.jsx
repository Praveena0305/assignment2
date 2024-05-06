import React, { useRef } from 'react';

const MyComponent = () => {
  const myRef = useRef(null);

  // Use myRef in your component logic

  return <div ref={myRef}>My Component</div>;
};

export default MyComponent;
