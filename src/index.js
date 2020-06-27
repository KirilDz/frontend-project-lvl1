import readlineSync from 'readline-sync';
import { car, cdr } from './helper.js';

export const questionCounter = 3;

const userCommunication = readlineSync.question;
const userName = userCommunication('Welcome to the Brain Games!\nMay I have your name? ');

export const engine = (gameData, startMassage) => {
  console.log(startMassage);
  for (let i = 0; i < questionCounter; i += 1) {
    const question = `Question: ${car(gameData[i])}`;
    console.log(question);
    const userAnswer = userCommunication('Your answer: ');
    if (userAnswer === `${cdr(gameData[i])}`) {
      console.log('Correct!');
    }
    if (userAnswer !== `${cdr(gameData[i])}`) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${cdr(gameData[i])}".\n Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
