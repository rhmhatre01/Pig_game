'use strict';
// selecting Elements.
const score0=document.getElementById('score--0');
const score1=document.getElementById('score--1');
const playerEl0=document.querySelector('.player--0');
const playerEl1=document.querySelector('.player--1');
const current0El=document.querySelector('#current--0');
const current1El=document.querySelector('#current--1');


//Variables.
let scores=[0,0];
let activePlayer=0;
let playing=true;
let currentScore=0;


//Buttons.
const dice=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');


//Funtion to switch player.
const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer=activePlayer===0?1:0;
        currentScore=0;
        playerEl0.classList.toggle('player--active');
        playerEl1.classList.toggle('player--active');
};


//function to Reset game.
const init=function(){
    playing=true;
    scores=[0,0];
    score0.textContent=0;
    score1.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;
    playerEl1.classList.remove('player--winner');
    playerEl0.classList.remove('player--winner');
    playerEl1.classList.add('player--active');
    playerEl0.classList.remove('player--active');
}


//The main logic
score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden');

//Event listner for rool dice
btnRoll.addEventListener('click',function(){
    if(playing){
    //Ranndom roll of dice
    let randomRoll=Math.trunc(Math.random()*6+1);
    dice.classList.remove('hidden');
    dice.src=`dice-${randomRoll}.png`;
    if(randomRoll!==1){
        currentScore+=randomRoll;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }else{
        switchPlayer();
    }
  }

});

//Event listner for hold scores
btnHold.addEventListener('click',function(){
    if(playing){
        dice.classList.add('hidden');
    scores[activePlayer]+=currentScore;
    console.log(scores);
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];  
    if(scores[activePlayer]>=20){
        playing =false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
else{
    
    switchPlayer();
};
}
})
//Event listner for Game reset.
btnNew.addEventListener('click',init);
   
