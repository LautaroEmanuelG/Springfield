import React, { useState } from "react";
import { Link, Outlet, useNavigate  } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleEnviarBusqueda = (e) => {
    e.preventDefault();
    navigate(`/Buscar/${textoBusqueda}`);
  };

  return (
    <>
      <header>
        <Link className="home" style={{ textDecoration: "none", color: "#fff" }} to="/">
          <button>Home</button>
        </Link>
        <form className="buscar" onSubmit={handleEnviarBusqueda}>
          <input
            className="text"
            type="text"
            value={textoBusqueda}
            onChange={handleChangeTexto}
            placeholder="Buscar Personaje"
          />
          <button className="btn-enviar" type="submit">
            🔍
          </button>
        </form>
        <Link className="random"
          style={{ textDecoration: "none", color: "#fff" }}
          to="/Personaje-al-azar/"
        >
          <button onClick={handleRandomButtonClick}>Barajar</button>
        </Link>
      </header>
      <main key={randomKey}>
        {/* Usando key para forzar el re-renderizado */}
        <Outlet />
      </main>
      <footer className="caja footer">
        <div className="footer-column">
            <h3>Contacto</h3>
            <a href="https://github.com/LautaroEmanuelG" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/lautaro-gonzalez-93bb0728a/" target="_blank">LinkedIn</a>
            <a href="" target="_blank">Portfolio</a>
        </div>
        <div className="footer-column">
            <h3>Derechos de autor</h3>
            <p>&copy; 2023 LautaroEmanuelG <br/>Todos los derechos reservados.</p>
        </div>
        <div className="footer-column agradecimientos">
            <h3>Agradecimientos</h3>
            <p>Agradezcimientos a mis Profesores de: <br/>React, JavaScript, Java y Python por su dedicación y apoyo.</p>
        </div>
    </footer>
    </>
  );
};

export default Layout;
