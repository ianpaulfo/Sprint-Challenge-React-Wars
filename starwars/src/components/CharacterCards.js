import React from "react";

const CharacterCards = (props) => (

        <div>
          {props.characters.map(character => {
            return (
              <div key={character.url}>
                <h1>{character.name}</h1>
                <p> Height: {character.height}</p>
                <p> Hair-Color: {character.hair_color}</p>
                <p> DOB: {character.birth_year}</p>
              </div>
            );
          })}
        </div>
      );



  export default CharacterCards;