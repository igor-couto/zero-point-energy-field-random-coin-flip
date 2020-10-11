import React from 'react';
import Coin from './components/Coin/';
import Links from './components/Links/';
import ExplanatoryText from './components/ExplanatoryText';
import './App.css';

function App() {
    return (
        <div>

            <main>     
                <Coin/>
                <ExplanatoryText/>
            </main>

            <footer>
                <Links/>
            </footer>

        </div>
  );
}

export default App;