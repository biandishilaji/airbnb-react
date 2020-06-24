import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg'

import Routes from './routes/routes'
// useState para criar estados da aplicação

function App() {

  return (
    // quando for incluir um código js no meio do html, coloca {}
      /* for é uma palavra reservada pro js, então se usa htmlFor  */
    // class é uma palavra reservada para JAVASCRIPT, o classname é uma classe do css
    // onsubmit executa funçao js quando formulário receber submit
<div className="container">
 <img src={logo} alt="AirCnc"></img>
 <div className="content">
   <Routes />
 </div>
</div>
  );
}

export default App;
