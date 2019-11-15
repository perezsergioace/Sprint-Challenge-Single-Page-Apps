import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import styled from "styled-components"

export default function CharacterList() {

  const Title = styled.div`
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     font-size: 50px;
     `

  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
    .then((response) => {
      console.log(response.data.results);
      setCharacters(response.data.results)
    })
    .catch((error) => {
      console.error("Data not returned", error)
    })
  }, []);

  return (
    <section className="character-list">
    <Link to="/">Home</Link>
    <Link to="/Search"><button>Search</button></Link>

      <Title>Character List</Title>
      {characters.map(character => (
        <CharacterCard 
        key={character.id} 
        name={character.name} 
        image={character.image}
        species={character.species} 
        gender={character.gender} 
        status={character.status}
        />
      ))}
    </section>
  );
}