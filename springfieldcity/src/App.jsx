import React, { useState, useEffect } from 'react';
import './App.css';
import './mediaQueris.css'
import { CardCharacter } from './cardCharacter/CardCharacter';
import { Link } from 'react-router-dom';

function App() {
  const [characters, setcharacters] = useState([])
  const [count, setCount] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://apisimpsons.fly.dev/api/personajes?limit=10&page=${count}`)
      const data = await response.json()
      setcharacters(data.docs)
    }
    fetchData()
  }, [count])

  const handlerSuma = () => {
    setCount(count + 1)
  }

  const handlerResta = () => {
    count === 0 ? setCount(count) : setCount(count - 1)
  }

  return (
    <div className="App">
      <h1 className="title">Los simpson</h1>
      <section className="btn-count">
        <button className="btn-handler" onClick={handlerResta}>Página Anterior</button>
        <button className="btn-handler" onClick={handlerSuma}>Página Siguiente</button>
      </section>
      <ul className="cardList">
        {characters.map((character) => {
          return (
            <Link style={{ textDecoration: 'none', color: '#fff' }} to={`/Character/${character.Nombre}`} key={character._id}>
              <CardCharacter key={character._id} character={character} />
            </Link>
          )
        })}
      </ul>
      <section className="btn-count">
        <button className="btn-handler" onClick={handlerResta}>Página Anterior</button>
        <button className="btn-handler" onClick={handlerSuma}>Página Siguiente</button>
      </section>
    </div>
  );
}

export default App;
