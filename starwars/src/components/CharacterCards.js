import React from "react";
import { Card } from "./CharacterStyles";

const CharacterCards = (props) => (

        <div>
          {props.characters.map(character => {
            return (
              <Card key={character.url}>
                <h1>{character.name}</h1>
                <p> Height: {character.height}</p>
                <p> Hair-Color: {character.hair_color}</p>
                <p> DOB: {character.birth_year}</p>
              </Card>
            );
          })}
        </div>
      );



  export default CharacterCards;