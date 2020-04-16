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
  const evenDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const calcDescription = 'What is the result of the expression?';
  const gcdDescription = 'Find the greatest common divisor of given numbers.';
  const progressionDescription = 'What number is missing in the progression?';
  const isPrimeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  if (switcher === 1) {
    console.log(evenDescription);
  }
  if (switcher === 2) {
    console.log(calcDescription);
  }
  if (switcher === 3) {
    console.log(gcdDescription);
  }
  if (switcher === 4) {
    console.log(progressionDescription);
  }
  if (switcher === 5) {
    console.log(isPrimeDescription);
  }
};

export const gameDefinition = (switcher) => {
  if (switcher === 1) {
    return brain();
  }
  if (switcher === 2) {
    return calc();
  }
  if (switcher === 3) {
    return gcd();
  }
  if (switcher === 4) {
    return progression();
  }
  if (switcher === 5) {
    return isPrime();
  }
};

export const resultDefenition = (userResult, result) => {
  if (Number(userResult) !== result) {
    wrongAnswer(userResult, result);
    return false;
  }
  return true;
};
