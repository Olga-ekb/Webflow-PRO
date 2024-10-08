'use strict'

const gameBotFunction = function(){
  function randomGenerate(min, max) {
    let rand = min = 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  let mysteryNumber = randomGenerate(1, 10);
  let answerNum = '';
  let tries = 3;

  const isNumber = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
  }

  return function getResult(){
    answerNum = prompt('Угадайте число от 1 до 10');

    if (answerNum === null) {
      alert('Вы завершили игру');
      return
    }

    while (!isNumber(answerNum) || answerNum.trim() === ''){
      alert('Вы ввели строку:');
      answerNum = prompt('Угадайте число от 1 до 10');
    }

    answerNum = Number(answerNum);

    if (mysteryNumber > answerNum) {
      alert('Загаданное число больше: ' + 'Осталось попыток: ' + tries);
    } else if (mysteryNumber < answerNum) {
      alert('Загаданное число меньше: ' + 'Осталось попыток: ' + tries);
    } else if (mysteryNumber === answerNum) {
      const isUserWantNewGame = confirm('Поздравляю, Вы угадали! Хотите сыграть ещё?'); 

      if (isUserWantNewGame){
      tries = 3;
      mysteryNumber = randomGenerate(1, 10);
      } else {
      tries = 0; }
      } 

    if (tries > 0){
      tries--;
      getResult();
    } else {
      alert('Вы завершили игру');
      return
    }   
  
  
  } 
    
  }


let launchgameBot = gameBotFunction();
launchgameBot();