'use strict'

// console.log('start the game');

// console.log(document.querySelector('.mesage').textContent);
// const newMsg = document.querySelector('.mesage').textContent = "The Number Is Correct" ;

// console.log(newMsg);

// const value = document.querySelector('.num').textContent = 14;
// console.log(value);
// const score = document.querySelector('.score').textContent = 17;
// const highScore = document.querySelector('.highscore').textContent = 17;
// const input = document.querySelector('.value').value = 14;
// console.log(input);

let count = Number(document.querySelector('.score').textContent);

let highScore = 0;
const check = document.querySelector('.check').addEventListener('click', function(){
   
    
    const input = Number(document.querySelector('.value').value);
    const num = Math.floor(Math.random()*20 + 1);

    count--;
    console.log(count);
    document.querySelector('.score').textContent = count;

    if(count === 1){
        document.querySelector('.mesage').textContent = 'Play Again  !';
    }
    
     if(input === 0){
         document.querySelector('.mesage').textContent = 'Invalid Number Try Between 1 TO 20 Only !';
     }
    else if(!input){
        document.querySelector('.mesage').textContent = 'plese enter the number !';
    }
    else if(input > 20 || input < 1){
        document.querySelector('.mesage').textContent = 'Invalid Number Try Between 1 TO 20 Only !'; 
    }
    else if(input !== num){
        document.querySelector('.mesage').textContent = 'Oops try Again'; 
    }
    else if(input === num){
        document.querySelector('.mesage').textContent = 'Congratulation You Won';
        document.querySelector('.num').textContent = num;

        if(count > highScore){
            highScore = count;
            document.querySelector('.highscore').textContent = highScore;
       
        }
       
    }   
    // document.querySelector('.number').style.tranform = rotate('45deg');
    console.log(input , num , typeof input, typeof num);

});

const again = document.querySelector('.again').addEventListener('click',function(){
    count = 20;
    Math.floor(Math.random()*20 + 1);
    document.querySelector('.mesage').textContent = 'Guess The Number ....';
    document.querySelector('.num').textContent = '?';
    document.querySelector('.score').textContent = count;
    document.querySelector('.value').value = ''; 
    
});