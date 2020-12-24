// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  background: black;
  width: 30%;
  color: gold;
  border-radius: 10px;
  margin: 2%;
`;

export default function Character(props) {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = props.character;

  return (
    <StyledCharacter>
      <div>
        <h3>Name: {name}</h3>
        <h3>Height: {height}</h3>
        <h3>Mass: {mass}</h3>
        <h3>Hair Color: {hair_color}</h3>
        <h3>Skin Color: {skin_color}</h3>
        <h3>Eye Color: {eye_color}</h3>
        <h3>Birth Year: {birth_year}</h3>
        <h3>Gender: {gender}</h3>
      </div>
    </StyledCharacter>
  );
}
