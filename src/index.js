import readlineSync from 'readline-sync';
import { car, cdr } from './helper.js';

export const questionCounter = 3;
const userCommunication = (message) => readlineSync.question(message);
const questionToUser = 'Your answer: ';
const correctAnswer = (userAnswer, rightAnswer) => console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\n Let's try again, ${userName}!`);
const congratMassage = () => console.log(`Congratulations, ${userName}!`);
const userName = userCommunication(greetingUser);

const engine = (gameData, startMassage) => {
  console.log(startMassage);
  for (let i = 0; i < questionCounter; i += 1) {
    console.log(`Question: ${car(gameData[i])}`);
    const userAnswer = userCommunication(questionToUser);
    if (userAnswer === `${cdr(gameData[i])}`) {
      console.log('Correct!');
    }
    if (userAnswer !== `${cdr(gameData[i])}`) {
      return correctAnswer(userAnswer, cdr(gameData[i]));
    }
  }
  return congratMassage();
};

const greetingUser = 'Welcome to the Brain Games!\nMay I have your name? ';

export default engine;
