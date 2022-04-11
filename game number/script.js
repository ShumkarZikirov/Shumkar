'use strict';

// document.querySelector('.guess-message').textContent = 'Правильно!';  // Меняеть текст

// document.querySelector('.question').textContent = 7;


// console.log(document.querySelector('.number-input').value);

// let fun = function(){
//     console.log(document.querySelector('.number-input').value)  // Создается функция для вывода значение input на консоль
// }

let secret = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let hiScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const ques = Number(document.querySelector('.number-input').value);
    console.log(ques);

    //  Пустой input

    if(!ques){
        document.querySelector('.guess-message').textContent = 'Введите число';

        // Игрок Выиграл

    }else if(ques === secret){
        document.querySelector('.guess-message').textContent = 'Правильно!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.question').style.width = '50rem';
        document.querySelector('.question').textContent = secret;       // Показываеть рандомное число
        
        if(score > hiScore){
            hiScore = score;
            document.querySelector('.highscore').textContent = hiScore;
        }

        //  Угадай 
    }else if(ques > secret){

        // Слишком много
        if(score > 1){
            document.querySelector('.guess-message').textContent = 'Слишком много!';
            score--;
            document.querySelector('.score').textContent = score; 
        }else{

        // Game over    
            document.querySelector('.guess-message').textContent = 'Game over!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.question').textContent = secret;     // Показываеть рандомное число
        }

        // Мало
    }else if(ques < secret){
        if(score > 1){
            document.querySelector('.guess-message').textContent = 'Мало!';
            score--;
            document.querySelector('.score').textContent = score;  
        }else{

        // Game over    
            document.querySelector('.guess-message').textContent = 'Game over!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.question').textContent = secret;     // Показываеть рандомное число
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    secret = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.question').textContent = '???';
    document.querySelector('.question').style.width = '25rem';
    document.querySelector('.guess-message').textContent = 'Начни угадывать';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number-input').value = '';
    document.querySelector('body').style.backgroundColor = 'rgb(0,0,0)';
})