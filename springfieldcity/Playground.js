// let data = {
//     "result": [
//       {
//         "_id": "63e32ae6edf49032166cb9a1",
//         "Nombre": "Reverendo Alegria",
//         "Historia": "El Reverendo Timothy Lovejoy, Jr. también conocido como Reverendo Lovejoy , es el reverendo local en Springfield , más precisamente, de la Primera Iglesia de Springfield .",
//         "Imagen": "https://static.simpsonswiki.com/images/thumb/c/c1/Timothy_Lovejoy%2C_Jr..png/250px-Timothy_Lovejoy%2C_Jr..png",
//         "Genero": "Masculino",
//         "Estado": "Vivo",
//         "Ocupacion": "Reverendo de la Primera Iglesia de Springfield"
//       },
//       {
//         "_id": "63e33166edf49032166d282f",
//         "Nombre": "Jessica Alegria",
//         "Historia": "Jessica Lovejoy es la hija del reverendo Lovejoy y Helen Lovejoy ",
//         "Imagen": "https://static.simpsonswiki.com/images/9/93/Jessica_Lovejoy.png",
//         "Genero": "Femenino",
//         "Estado": "Vivo",
//         "Ocupacion": "Estudiante de la Escuela Primaria de Springfield "
//       },
//       {
//         "_id": "63e32b5aedf49032166cc164",
//         "Nombre": "Helen Alegria",
//         "Historia": "Helen Alegria es la esposa chismosa y crítica de Timothy Lovejoy y la madre de Jessica Lovejoy",
//         "Imagen": "https://static.simpsonswiki.com/images/thumb/9/91/Helen_Lovejoy.png/150px-Helen_Lovejoy.png",
//         "Genero": "Femenino",
//         "Estado": "Vivo",
//         "Ocupacion": "Ama de casa",
//         "updatedAt": "2023-03-19T22:28:57.792Z"
//       }
//     ]
//   }
// let characters = data.result;
// let nombreCharacter = "Helen Alegria";
// const buscarCharacter =  () => {
//     console.log("Characters buscando:",characters);
//     characters.map((character) => {
//         console.log("Revisando comparacion",character.Nombre,"=",nombreCharacter);
//     })

//     const found = characters.find((character) => character.Nombre === nombreCharacter);
//       console.log("Character encontrado:",found);
//     }
//     buscarCharacter()

//const [characters, setCharacters] = useState([]);
// useEffect(() => {
//   const getCharacters = async () => {
//     const response = await fetch(
//       `https://apisimpsons.fly.dev/api/personajes/find/${nombreCharacter}`
//     );
//     const data = await response.json();

//     console.log("Data reult:", data.result);
//     setCharacters(data.result);
//   };
//   getCharacters();
// }, [nombreCharacter]);

// useEffect(() => {
//   const buscarCharacter = () => {
//     console.log("Characters buscando:", characters);
//     const found = characters.find(
//       (character) => character.Nombre === nombreCharacter
//     );
//     setCurrentCharacter(found);
//   };
//   buscarCharacter();
//   // }, [characters]);

//  let random = Math.floor(Math.random() * 635)
//  console.log("Random:",random);

import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './layout.css'

const Layout = () => {
  return (
    <>
      <header>
        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/"><button>Home</button></Link>
        <div className="buscar">
          <input className="text" type="text" placeholder='Buscar personaje' />
          <input className='btn-enviar' type="button" value="Enviar" />
        </div>
        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/Personaje-al-azar/"><button>Personaje al azar</button></Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout

import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './layout.css';

const Layout = () => {
  const [randomKey, setRandomKey] = useState(0);
  const navigate = useNavigate();

  const handleRandomButtonClick = () => {
    // Incrementando la clave para forzar el re-renderizado
    setRandomKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <header>
        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">
          <button>Home</button>
        </Link>
        <div className="buscar">
          <input className="text" type="text" placeholder="Buscar personaje" />
          <input className="btn-enviar" type="button" value="Enviar" />
        </div>
        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/Personaje-al-azar/"><button onClick={handleRandomButtonClick}>Personaje al azar</button></Link>

      </header>
      <main key={randomKey}>
        {/* Usando key para forzar el re-renderizado */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
