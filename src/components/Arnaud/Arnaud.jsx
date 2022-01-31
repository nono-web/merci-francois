import React, { useState } from 'react';
import './Arnaud.css';

const Arnaud = () => {
  const [isSelected10, setIsSelected10] = useState(false);

  const handleClicked = () => {
    setIsSelected10(!isSelected10);
  };
  return (
    <div className="trop">
      <div className="a-app">
        <div className="a-f">
          <span></span>
          <span></span>
          <span></span>
          <h2>Merci pour toute les rewiews de PR</h2>
        </div>
        <div className="a-f1">
          <span></span>
          <span></span>
          <span></span>
          <h2>Merci François</h2>
        </div>
        <div className="a-f2">
          <span></span>
          <span></span>
          <span></span>
          <h2>Merci François pour ta patience</h2>
        </div>
      </div>
      <div>
        <button className="arnaud-button" onClick={handleClicked}>
          Attention : c'est peut être une PR ?
        </button>
      </div>
      <div className={isSelected10 ? 'arnaud-button-selected' : 'arnaud'}>
        <h2> 🎉 Au Top François 🎉 </h2>
      </div>
    </div>
  );
};

export default Arnaud;
