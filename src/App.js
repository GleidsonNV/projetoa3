import React from 'react';
import './App.css';
import Header from './Header';
import Destaque from './Destaque';
import Recusos from './Recursos';
import Informacao from './Informacao';
import Clientes from './Clientes';
import Precos from './Precos';
import Rodape from './Rodape';

function App(){

  return (
   <div className="container">
    <Header />
    <Destaque />
    <Recusos />
    <Informacao />
    <Clientes />
    <Precos />
    <Rodape />
   </div>
  )
}

export default App;