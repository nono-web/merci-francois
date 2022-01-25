import React, { useEffect, useState } from 'react';

import img1 from '../../assets/sea.jpeg';
import img2 from '../../assets/scie.jpeg';
import img3 from '../../assets/franc.jpeg';
import img4 from '../../assets/silk.jpeg';

import './Anais.css';

const Anais = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [answer, setAnswer] = useState();
  const [messageDisplayed, setMessageDisplayed] = useState(false);

  const possibleAnswers = [
    'Merci François',
    'merci françois',
    'Merci françois',
    'merci François',
    'MerciFrançois',
    'mercifrançois',
    'Mercifrançois',
    'merciFrançois',
    'Merci Francois',
    'merci francois',
    'Merci francois',
    'merci Francois',
    'MerciFrancois',
    'mercifrancois',
    'Mercifrancois',
    'merciFrancois',
  ];

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleClick = () => {
    setMessageDisplayed(true);
  };

  useEffect(() => {
    possibleAnswers.map((possibleAnswer) => {
      if (possibleAnswer === answer) {
        return setIsCorrect(true);
      }
    });
  }, [answer]);

  return (
    <section className="anais-container">
      {!messageDisplayed && (
        <div className="anais-rebus">
          <h3>Rébus :</h3>
          <div className="anais-rebus-images">
            <div className="anais-rebus-image">
              <img src={img1} id="rebus-img1" alt="image 1 of the rebus" />
            </div>
            <div className="anais-rebus-image">
              <img src={img2} id="rebus-img2" alt="image 1 of the rebus" />
            </div>
            <div className="rebus-blank"></div>
            <div className="anais-rebus-image">
              <img src={img3} alt="image 1 of the rebus" />
            </div>
            <div className="anais-rebus-image">
              <img src={img4} alt="image 1 of the rebus" />
            </div>
          </div>
          <input
            type="text"
            placeholder="Alors, qu'elle est la réponse ? ☺️"
            onChange={handleChange}
          />
        </div>
      )}
      {isCorrect && !messageDisplayed && (
        <div className="anais-congrats">
          <iframe
            src="https://giphy.com/embed/artj92V8o75VPL7AeQ"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen></iframe>

          <button type="button" onClick={handleClick}>
            &#x2606;  🎉 Congrats!!  🎉 Claim your prize  🎉 &#x2606;
          </button>
        </div>
      )}
      {messageDisplayed && (
        <div className="anais-message">
          <div className="anais-message-title">
            <h3 id='merciiii'>Merciiiiii </h3>
            <p className="anais-emojis"> 😍 😍 😍</p>
          </div>
          <div className="anais-gif">
            <iframe
              src="https://giphy.com/embed/osjgQPWRx3cac"
              width="300"
              height="300"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            />
            <iframe
              src="https://giphy.com/embed/KB8C86UMgLDThpt4WT"
              width="300"
              height="300"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            />
          </div>
          <div className="anais-message-content">
            <p>
              Merci François pour ton merveilleux accompagnement, ta joie, ta
              bonne humeur, ton soutien quand ça n'allait pas qui a été si
              précieux. Merci d'être vieux avec moi et de surrutiliser GIF
              emojis et mettre de la couleur dans nos répo bien trop tristes
              autrement !!
            </p>
            <p>Je te souhaite de merveilleuses coding aventures 😃 🎉</p>
            <p id="anais-signature">Anaïs</p>
          </div>
          <div className="anais-gif">
            <iframe
              src="https://giphy.com/embed/vhsNmFjuN4WDS"
              width="300"
              height="300"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            />
            <iframe
              src="https://giphy.com/embed/609o8uNjasiJO"
              width="300"
              height="300"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Anais;
