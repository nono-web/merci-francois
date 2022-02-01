import React, { useState } from 'react';
import './Vincent.css';

const Vincent = () => {
  const [testing, setTesting] = useState('');
  const [testing2, setTesting2] = useState('Clique ici François!');

  const handleClick = () => {
    setTesting('dv');
    setTesting2('');
  };

  return (
    <div>
      <div className="prenom">Vincent</div>
      <div>
        <p className="pp"> Merci François !! Pour cette Formation !!</p>
        <div>
          <button className={testing} onClick={handleClick}>
            {testing2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vincent;
