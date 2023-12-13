import React from "react";
import "./presentacion.css";

export const Presentacion = ({ currentCharacter }) => {
  return (
    <div className="presentacion">
      {currentCharacter && (
        <>
          <div className="contenedor">
            <img
              className="img"
              src={currentCharacter.Imagen}
              alt={currentCharacter.Nombre}
            />
            <div className="titulos">
              <h1 className="nombre">{currentCharacter.Nombre}</h1>
              <p className="ocupacion">{currentCharacter.Ocupacion}</p>
            </div>
          </div>
          <div className="contenedor-lore">
            <p className="historia">
              <strong>Historia:</strong> {currentCharacter.Historia}
            </p>
            <span className="datos">
              <p className="genero">
                <strong>{currentCharacter.Genero}</strong>
              </p>
              <p className="estado">
                <strong>{currentCharacter.Estado}</strong>
              </p>
            </span>
          </div>
        </>
      )}
    </div>
  );
};
