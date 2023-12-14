import React, { useState, useEffect } from "react";
import { Presentacion } from "../cardCharacter/Presentacion";
import "./personaje-al-azar.css"

const Personaje = () => {
  let random = Math.floor(Math.random() * 635);
  const [personaje, setPersonaje] = useState({});
  const [count, setCount] = useState(random);
  useEffect(() => {
    const fetchPersonaje = async () => {
      const response = await fetch(
        `https://apisimpsons.fly.dev/api/personajes?limit=1&page=${count}`
      );
      const data = await response.json();
      console.log("Aca busco data", data.docs[0]);
      setPersonaje(data.docs[0]);
    };
    fetchPersonaje();
  }, [count]);

  const handlerRandom = () => {
    const random = Math.floor(Math.random() * 635);
    console.log("Aca busco random", random);
    setCount(random);
  };

  return (
      <Presentacion key={personaje._id} currentCharacter={personaje} />
  );
};

export default Personaje;
