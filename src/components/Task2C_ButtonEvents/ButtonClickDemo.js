import React from 'react';
import './App.css';

function ButtonClickDemo() {
  // External function handler
  function handleClick() {
    alert("Button clicked using external function!");
  }

  // Arrow function as handler
  const handleArrowClick = () => {
    alert("Button clicked using arrow function!");
  };

  // With parameter
  const handleWithParameter = (name) => {
    alert(`Hello, ${name}!`);
  };

  // Using event object
  const handleEventObject = (event) => {
    alert(`Button clicked! Event type: ${event.type}`);
  };

  return (
    <div className="container" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>React Button Click Event Examples</h2>
      {/* 1. Inline arrow function */}
      <button className="btn" onClick={() => alert("Inline button clicked!")}>
        Inline Function
      </button>
      <br /><br />

      {/* 2. External named function */}
      <button className="btn" onClick={handleClick}>
        External Function
      </button>
      <br /><br />

      {/* 3. Arrow function reference */}
      <button className="btn" onClick={handleArrowClick}>
        Arrow Function
      </button>
      <br /><br />

      {/* 4. Function with parameter */}
      <button className="btn" onClick={() => handleWithParameter("Sanjana")}>
        Click with Parameter
      </button>
      <br /><br />

      {/* 5. Event object usage */}
      <button className="btn" onClick={handleEventObject}>
        Event Object Handler
      </button>
    </div>
  );
}

export default ButtonClickDemo;