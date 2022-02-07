import React, { useState } from 'react';
import MyImg from './headerImg.jpg';
import { FaStar } from 'react-icons/fa';
import {
  Wrapper,
  HeaderImg,
  Title,
  StarContainer,
  Input,
  Rate,
  Section,
  GreyLine,
  Button1,
  Button2,
  Section2,
  theme,
} from './styleComponent';

// ==============================

const Card = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      <div className="prenom">Rodolphe</div>
      <Wrapper>
        <HeaderImg src={MyImg}></HeaderImg>
        <Title>Vote for your favorite teacher !!</Title>
        <StarContainer>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <Input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  size={30}
                  color={ratingValue <= (hover || rating) ? 'ffc107' : 'e4E5E9'}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
          <Rate> Your note : {rating} (5)</Rate>
        </StarContainer>
        <Section2 theme={theme}>
          <h1>Many thanks Francois for your skills</h1>
          <h1>Now you can take some holidays 😆</h1>
          <GreyLine />
        </Section2>
        <Section theme={theme}>
          <Button1 theme={theme}>👌</Button1>
          <Button2 theme={theme}>🤘</Button2>
          <Button1 theme={theme}>you rock</Button1>
          <Button2 theme={theme}>🎸</Button2>
        </Section>
      </Wrapper>
    </div>
  );
};

export default Card;
