import readlineSync from 'readline-sync';
import { car, cdr } from './helper.js';

export const questionCounter = 3;
const userCommunication = (message) => readlineSync.question(message);
const questionToUser = 'Your answer: ';
const greetingUser = 'Welcome to the Brain Games!\nMay I have your name? ';
const userName = userCommunication(greetingUser);
const correctAnswer = (userAnswer, rightAnswer) => console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\n Let's try again, ${userName}!`);
const congratMassage = () => console.log(`Congratulations, ${userName}!`);

export const engine = (gameData, startMassage) => {
  console.log(startMassage);
  for (let i = 0; i < questionCounter; i += 1) {
    const question = `Question: ${car(gameData[i])}`;
    console.log(question);
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
