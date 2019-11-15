import React from "react";
import styled from "styled-components"

export default function CharacterCard(props) {

  const Card = styled.div`
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background-color: #00ff07;
     margin: 5% 30%
     border: solid 4px black;
     border-radius: 40px;
     `

  return (
    <Card>
      <h1>Name: {props.name}</h1>
      <img src={props.image} />
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>Status: {props.status}</p>
    </Card>
  )
}