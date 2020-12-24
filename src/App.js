import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";
import "./App.css";

const StyledApp = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  h1 {
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
  }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [swCharacters, setSwCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setSwCharacters(res.data.results);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
    <div>
      <h1 className="Header">Characters</h1>
      <StyledApp>
        {swCharacters.map((swc) => (
          <Character character={swc} />
        ))}
      </StyledApp>
    </div>
  );
};

export default App;
