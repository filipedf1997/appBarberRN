import React from 'react';
import styled from 'styled-components';
import StarFull from '../assets/star.svg';
import StarHalf from '../assets/star_half.svg';
import StarEmpty from '../assets/star_empty.svg';

const StarArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StarView = styled.View``;

const StarText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  color: #737373;
`;

export default ({stars, showNumber}) => {
  let s = [0,0,0,0,0];
  let sFloor = Math.floor(stars);
  let left = stars - sFloor;

  for(let i = 0; i <= sFloor; i++){
    s[i] = 2;
    if(left > 0 && i === sFloor){
      s[i] = 1;
    };
  };

  return(
    <StarArea>
      {s.map((i, k) => (
        <StarView key={k}>
          {i === 0 && <StarEmpty width='18' heigth='18' fill='#FF9200' />}
          {i === 1 && <StarHalf width='18' heigth='18' fill='#FF9200' />}
          {i === 2 && <StarFull width='18' heigth='18' fill='#FF9200' />}
        </StarView>
      ))}
      {showNumber && <StarText>{stars}</StarText>}
    </StarArea>
  );
};