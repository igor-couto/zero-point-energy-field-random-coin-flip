import React, {useState} from 'react';
import './style.css';
import coinHeads from './coin-heads.svg';
import coinTails from './coin-tails.svg';
import {Settings} from '../../settings/settings';

export default function Coin() {
    
    const [coinState, setCoinState] = useState('cara');

    const Flip = async function (){

        // Begin Animation
        const coinHeads = document.getElementById("coinHeads");
        coinHeads!.removeAttribute("class");
        void coinHeads!.offsetWidth;
        coinHeads!.classList.add("coin");
        coinHeads!.classList.add("heads");

        const coinTails = document.getElementById("coinTails");
        coinTails!.removeAttribute("class");
        void coinTails!.offsetWidth;
        coinTails!.classList.add("coin");
        coinTails!.classList.add("tails");

        // API Request
        const response = await fetch(Settings.API);
        const responseModels = await response.json();

        if(responseModels.data[0] % 2 == 0)
            setCoinState('cara');
        else 
            setCoinState('coroa');


        setTimeout(function () {

            // Stop Animation
            coinHeads!.removeAttribute("class");
            void coinHeads!.offsetWidth;
            coinHeads!.classList.add("coin");

            coinTails!.removeAttribute("class");
            void coinTails!.offsetWidth;
            coinTails!.classList.add("coin");

            // Change z-index based on the result
            if(coinState == 'cara'){
                coinHeads!.style.zIndex = "100";
                coinTails!.style.zIndex = "0";
            }
            else {
                coinHeads!.style.zIndex = "0";
                coinTails!.style.zIndex = "100";
            }
            
        }, 1000);
    }

    return(
        <div id="coin" onClick={Flip}>

            <img id="coinHeads" src={coinHeads} className="coin" alt="coin heads" />
            <img id="coinTails" src={coinTails} className="coin" alt="coin tails" />
            
        </div>
    )
}