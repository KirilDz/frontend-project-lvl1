import readlineSync from 'readline-sync';
import calc from './games/calc.js';
import brain from './games/brain.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import isPrime from './games/isPrime.js';

export const generator = () => Math.round(Math.random() * 100);
export const answer = () => readlineSync.question('Your answer: ');
export const greeting = () => readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const userName = greeting();
export const wrongAnswer = (userAnswer, correctAnswer) => console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${userName}!`);
export const congratMassage = () => console.log(`Congratulations, ${userName}!`);

export const gameDescription = (switcher) => {
  const descriptionArr = [
    'Answer "yes" if the number is even, otherwise answer "no".',
    'What is the result of the expression?',
    'Find the greatest common divisor of given numbers.',
    'What number is missing in the progression?',
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  ];

  console.log(descriptionArr[switcher]);
};

export const gameDefinition = (switcher) => {
  let currentGame;

  if (switcher === 0) {
    currentGame = brain();
  } else if (switcher === 1) {
    currentGame = calc();
  } else if (switcher === 2) {
    currentGame = gcd();
  } else if (switcher === 3) {
    currentGame = progression();
  } else if (switcher === 4) {
    currentGame = isPrime();
  }
  return currentGame;
};


export const resultDefenition = (userResult, result) => {
  if (Number(userResult) !== result) {
    wrongAnswer(userResult, result);
    return false;
  }
  return true;
};
