import readlineSync from 'readline-sync';
import { car, cdr } from './utils.js';

export const maxNumberOfRounds = 3;

export const engine = (generateRound, gameRule) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  let numberOfCompletedRounds = 0;

  while (numberOfCompletedRounds < maxNumberOfRounds) {
    const gameData = generateRound();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');

    numberOfCompletedRounds += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
