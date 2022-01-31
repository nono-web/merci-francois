import React from 'react';
import fleche from './fleche-droite.png';
import triangle from './triangle.png';
import flechebas from './vers-le-bas.png';
import './Davy.css';

const Davy = () => {
  return (
    <div className="davy">
      <div className="cadre">
        <div className="autre">
          <h1 className="coucou" id="coucou">
            Coucou
          </h1>
        </div>
        <div className="blabla">
          <h1 className="thanks" id="thanks">
            Merci François pour cette formation
          </h1>
        </div>
      </div>
      <div>
        <div className="grid">
          <div className="un">
            <img src={fleche} alt="" />
          </div>

          <div className="trois">
            <img src={triangle} alt="" />
          </div>
          <div className="quatre">
            <p>Vive les animations CSS</p>
          </div>
          <div className="cinq">
            <h4>Davy 😉</h4>
          </div>
          <div className="six">
            <img src={fleche} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Davy;
