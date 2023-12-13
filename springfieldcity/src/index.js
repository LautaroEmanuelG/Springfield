import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Layout from './views/Layout';
import Character from './views/Character';
import Personaje from './views/Personaje-al-azar';
import SearchPresentacion from './components/SearchPresentacion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<App />} />
          <Route path="Character/:nombreCharacter" element={<Character />} />
          <Route path="Buscar/:nombreCharacters" element={<SearchPresentacion />} />
          <Route path="Personaje-al-azar" element={<Personaje/>} />
        </Route>
        {/* <Route path='*' element={<Navigate replace to="/"/>} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);