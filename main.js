"use strict";

// console.log(document.querySelector('.message'));
// document.querySelector(".message").textContent = "You won bro";
// document.querySelector(".guess").value = 34;

// listening for clicks
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector(".number").textContent = secretNumber;
let currentScore = 20;
let highScore = 0;
// const saveScore = 20;
document.querySelector(".check").addEventListener("click", function () {
  const my_guess = Number(document.querySelector(".guess").value);

  if (!my_guess) {
    document.querySelector(".message").textContent = "No entry!";
  } else if (my_guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "You won!";
    document.querySelector('.number').style.width = '30rem'; 
    document.querySelector('body').style.backgroundColor = '#60b347';
    if(currentScore>highScore){
      highScore = currentScore;
      document.querySelector('.highscore').textContent = highScore;
    }
} else if (my_guess > secretNumber) {
    // document.querySelector('body').style.backgroundColor = 'red';
    if (currentScore > 0) {
      document.querySelector(".message").textContent = "📈Too High";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      document.querySelector(".message").textContent = "You lost!";
      document.querySelector('.score'.textContent) = 0;
    }
  } else if (my_guess < secretNumber) {
    // document.querySelector('body').style.backgroundColor = 'red';
    if (currentScore > 0) {
      document.querySelector(".message").textContent = "📉Too Low";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      document.querySelector(".message").textContent = "You lost bsdk";
      document.querySelector('.score'.textContent) = 0;

    }
  }
});

document.querySelector('.again').addEventListener('click',function(){
    currentScore = 20;
    document.querySelector('.score').textContent = currentScore;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'; 
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector(".guess").value = ' ';


    
})