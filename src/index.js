import readlineSync from 'readline-sync';
import { car, cdr } from './utils.js';

export const maxNumberOfRounds = 3;

export const engine = (gameFunction, startMassage) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

  console.log(startMassage);

  let i = 0;

  while (i < maxNumberOfRounds) {
    const gameData = gameFunction();
    const question = `Question: ${car(gameData)}`;
    console.log(question);
    const correctAnswer = cdr(gameData).toString();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${userName}!`);
      return;
    }

    i += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
