import React from 'react';
import Coin from './components/Coin/';
import Footer from './components/Footer/';
import ExplainText from './components/ExplainText/';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Coin/>
        <ExplainText/>
        <Footer/>

        </header>

    </div>
  );
}

export default App;