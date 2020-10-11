import React from 'react';
import Coin from './components/Coin/';
import Links from './components/Links/';
import ExplainText from './components/ExplainText/';
import './App.css';

function App() {
    return (
        <div>

            <main>     
                <Coin/>
                <ExplainText/>
            </main>

            <footer>
                <Links/>
            </footer>

        </div>
  );
}

export default App;