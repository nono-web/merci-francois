import React from 'react';
import lemur from "./lemur.jpeg";
import glace from "./glace.jpg";

import "./Ranto.css";

const Ranto = () => {
    return (
        <main className="coucou-Ranto">
            <div className="title-r">
                <h1 className="whatsup-r"> Hello François ! </h1>
            </div>
                <img src={lemur} />
            <h1 className="glace-fam"> Ceci est une glace !!! </h1>
                <img src={glace} />
            <div className="box-thanks"> 
                <h2 className="thanks-f"> Merci François!</h2>
            </div>
        </main>
    )
}

export default Ranto
