import React, {useState} from 'react';
import './App.css';
import Reset from './components/button/Reset';
import Rozgrywka from './components/Rozgrywka/Rozgrywka';
import Wyniki from './components/Wyniki/Wyniki';



function App(props) {

  return (
    <div className="App">

    <header>
      <Reset/>

        <div>Zagrajmy!</div>
        <p>Wybierz jedną z opcji:</p>
    </header>

    <section>
      <Rozgrywka />
   </section>

   <section>
     <Wyniki/>
   </section>
    <footer>
      <p>2022</p>
    </footer>

    </div>
  );
}

export default App;
