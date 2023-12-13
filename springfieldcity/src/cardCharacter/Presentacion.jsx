import React from "react";
import "./presentacion.css";

export const Presentacion = ({ currentCharacter }) => {
  return (
    <>
      {currentCharacter && (
        <div className="presentacion">
          <aside className="contenedor-img">
            <img
              className="img"
              src={currentCharacter.Imagen}
              alt={currentCharacter.Nombre}
            />
            <div className="titulos">
              <h1 className="nombre">{currentCharacter.Nombre}</h1>
              <p className="ocupacion">{currentCharacter.Ocupacion}</p>
            </div>
          </aside>
          <aside className="contenedor-lore">
            <p className="historia">
              <strong>Historia:</strong> {currentCharacter.Historia}
            </p>
            <p className="genero">
              <strong>Género: </strong>{currentCharacter.Genero}
            </p>
            <p className="estado">
              <strong>Estado: </strong>{currentCharacter.Estado}
            </p>
          </aside>
        </div>
      )}
    </>
  );
};
