import React from "react";
import "./cardCharacter.css";

export const CardCharacter = ({ character }) => {
  return (
    <article className="card" key={character._id}>
      <p className="numT">{character._id[0]}</p>
      <h2 className="charList__nombre">{character.Nombre}</h2>
      <img
        className="charList__img"
        src={character.Imagen}
        alt={character.Nombre}
      />
      <h3 className="charList__ocupacion">{character.Ocupacion}</h3>
      <p className="numB">{character._id[0]}</p>
    </article>
  );
};
