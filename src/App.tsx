import React from 'react';
import coinHeads from './coin-heads.svg';
import Coin from './components/Coin/';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={coinHeads} className="App-logo" alt="coin heads" />
        
        <Coin/>
        
        <p>
          A true random coin flip generator, powered by a zero point energy field vacuum.
        </p>

        <p>
        Because computer entropy is for loosers.
        </p>

        <a
          className="App-link"
          href="https://github.com/igor-couto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>

        <a
          className="App-link"
          href="https://qrng.anu.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ANU QRNG
        </a>

        </header>

    </div>
  );
}

export default App;
