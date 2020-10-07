import React from 'react';
import './style.css';

export default function Footer() {
    return(
        <div id="footer">
            <a
                className="App-link"
                href="https://github.com/igor-couto/zero-point-energy-field-random-coin-flip"
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
      </div>
    )
}