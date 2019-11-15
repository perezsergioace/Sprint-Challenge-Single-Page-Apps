import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import {Link} from "react-router-dom";



export default function SearchForm() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/character/")
    .then (response =>{
      const characters = response.data.results.filter(char =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults (characters);
    });
  },[searchTerm]);


  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form>
      <label htmlFor="name">Search: </label>
        <input 
          id="name" 
          type="text" 
          name="textfield" 
          placeholder="Search"
          value={searchTerm} 
          onChange={handleChange}
        />
        <Link to="/"><button>Home</button></Link>
      </form>

      {searchResults.map((character) => {
        return (
          <CharacterCard 
            key={character.id} 
            name={character.name} 
            image={character.image}
            species={character.species} 
            gender={character.gender} 
            status={character.status}
          />
        )
      })}
    </div>
  )
}
