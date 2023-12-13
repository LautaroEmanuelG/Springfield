import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  const [randomKey, setRandomKey] = useState(0);

  const handleRandomButtonClick = () => {
    // Incrementando la clave para forzar el re-renderizado
    setRandomKey((prevKey) => prevKey + 1);
  };

  const [textoBusqueda, setTextoBusqueda] = useState("");

  const handleChangeTexto = (e) => {
    console.log("Texto de búsqueda:", textoBusqueda);
    setTextoBusqueda(e.target.value);
  };

  return (
    <>
      <header>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          <button>Home</button>
        </Link>
        <div className="buscar">
          <input
            className="text"
            type="text"
            value={textoBusqueda}
            onChange={handleChangeTexto}
            placeholder="Ingrese su búsqueda"
          />
          <Link
          style={{ textDecoration: "none", color: "#fff" }}
          to={`/Buscar/${textoBusqueda}`} 
        ><button className="btn-enviar">🔍</button></Link>
        </div>
        <Link
          style={{ textDecoration: "none", color: "#fff" }}
          to="/Personaje-al-azar/"
        >
          <button onClick={handleRandomButtonClick}>Personaje al azar</button>
        </Link>
      </header>
      <main key={randomKey}>
        {/* Usando key para forzar el re-renderizado */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
