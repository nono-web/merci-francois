import React, { useState } from 'react';
import FD from "../../assets/Blue and Red President Campaign Poster.jpg";

import "./Salim.css";

const Salim = () => {
const [img, setImg] = useState('displaynon');
  
  const handleClick = () => {
    setImg('displayunon');
  };
  return (
    <div>
      <div className="container">
        <div className="background-img">
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <p className="prenom">Salim</p>
              <p> Pour tout ce que tu nous as appris François un grand MERCI</p>
            </div>
          </div>
        </div>
      </div>
      <div className="containerbutton">
        <button onClick={handleClick}  className="Button" >Ne pas cliquer</button>
        <img className={img} src={FD} />
      </div>
    </div>
  );
};

export default Salim;
