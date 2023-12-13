import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardCharacter } from "../cardCharacter/CardCharacter";
import { Link } from "react-router-dom";

function SearchPresentacion() {
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const { nombreCharacters } = useParams();

  useEffect(() => {
    const buscarCharacters = async () => {
      const response = await fetch(
        `https://apisimpsons.fly.dev/api/personajes/find/${nombreCharacters}`
      );
      const data = await response.json();
      console.log(data);
      setCurrentCharacters(data.result);
    };
    buscarCharacters();
  }, [nombreCharacters]);
  return (
    <div className="App">
      <h1 className="title">{nombreCharacters}</h1>
      <ul className="cardList">
        {currentCharacters.map((character) => {
          return (
            <Link style={{ textDecoration: 'none', color: '#fff' }} to={`/Character/${character.Nombre}`} key={character._id}>
              <CardCharacter key={character._id} character={character} />
            </Link>
          )
        })}
      </ul>
    </div>
  );
}

export default SearchPresentacion;
