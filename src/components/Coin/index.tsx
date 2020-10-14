import React, {useState} from 'react';
import './style.css';
import coinHeads from './coin-heads.svg';
import coinTails from './coin-tails.svg';
import {Settings} from '../../settings/settings';

export default function Coin() {
    
    const [coinSide, setCoinSide] = useState('tails');
    const [isFlipping, setFlipping] = useState(false);

    let coinHeadsElement : HTMLElement | null;
    let coinTailsElement : HTMLElement | null;

    const animationTime = 2000;

    const Flip = async function (){

        coinHeadsElement = document.getElementById('coinHeads');
        coinTailsElement = document.getElementById('coinTails');

        if(isFlipping) return;

        setFlipping(true);

        BeginAnimation();
        FlipCoin();

        setTimeout(function () {
            StopAnimation();
            setFlipping(false);
        }, animationTime);
    }

    async function FlipCoin(){
        const response = await fetch(Settings.API);
        const responseModels = await response.json();
        console.log(responseModels.data[0] % 2 === 0 ? 'deu tails' : 'deu heads');

        if(responseModels.data[0] % 2 === 0){
            setCoinSide('tails');
            coinHeadsElement!.style.zIndex = '0';
            coinTailsElement!.style.zIndex = '100';
        }
            
        else {
            setCoinSide('heads');
            coinHeadsElement!.style.zIndex = '100';
            coinTailsElement!.style.zIndex = '0';
        }
            
    }

    function SetResult(){
        if(coinSide === 'tails'){
            console.log('estado é tails');
            coinHeadsElement!.style.zIndex = '0';
            coinTailsElement!.style.zIndex = '100';
        }
        else {
            console.log('estado é hrads');
            coinHeadsElement!.style.zIndex = '100';
            coinTailsElement!.style.zIndex = '0';
        } 
    }

    function BeginAnimation(){
        coinHeadsElement!.removeAttribute('class');
        void coinHeadsElement!.offsetWidth;
        coinHeadsElement!.classList.add('coin');
        coinHeadsElement!.classList.add('heads');
        
        coinTailsElement!.removeAttribute('class');
        void coinTailsElement!.offsetWidth;
        coinTailsElement!.classList.add('coin');
        coinTailsElement!.classList.add('tails');
    }

    function StopAnimation(){
        coinHeadsElement!.removeAttribute('class');
        void coinHeadsElement!.offsetWidth;
        coinHeadsElement!.classList.add('coin');

        coinTailsElement!.removeAttribute('class');
        void coinTailsElement!.offsetWidth;
        coinTailsElement!.classList.add('coin');
    }

    return(
        <section id="coin" onClick={Flip}>

            <img id="coinHeads" src={coinHeads} className="coin" alt="coin heads" />
            <img id="coinTails" src={coinTails} className="coin" alt="coin tails" />
            
        </section>
    )
}