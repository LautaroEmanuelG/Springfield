import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Presentacion } from "../cardCharacter/Presentacion";

const Character = () => {
  const [currentCharacter, setCurrentCharacter] = useState({});
  const { nombreCharacter } = useParams();

  useEffect(() => {
    const buscarCharacter = async () => {
      const response = await fetch(
        `https://apisimpsons.fly.dev/api/personajes/find/${nombreCharacter}`
      );
      const data = await response.json();
      const found = await data.result.find(
        (character) => character.Nombre.trim() === nombreCharacter.trim()
      );
      setCurrentCharacter(found);
    };
    buscarCharacter();
  }, [nombreCharacter]);

  return (
    <Presentacion key={currentCharacter._id} currentCharacter={currentCharacter} />
  );
};

export default Character;
