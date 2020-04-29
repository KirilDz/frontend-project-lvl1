import { questionCounter } from './helper.js';
import {car, cdr} from './base.js';
import readlineSync from "readline-sync";


const engine = (data, startMassage) => {
  console.log(startMassage);
  for (let i = 0; i < questionCounter; i += 1) {
    console.log(`Question: ${car(data[i])}`);
    const userAnswer = userCommunication(questionToUser);
    if (userAnswer === `${cdr(data[i])}`) {
      console.log('Correct!');
    }
    if (userAnswer !== `${cdr(data[i])}`) {
      return correctAnswer(userAnswer, cdr(data[i]));
    }
  }
  return congratMassage();
};


const greetingUser = 'Welcome to the Brain Games!\nMay I have your name? ';
const questionToUser = 'Your answer: ';
const userCommunication = (message) => readlineSync.question(message);
const userName = userCommunication(greetingUser);
const correctAnswer = (userAnswer, rightAnswer) => console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\n Let's try again, ${userName}!`);
const congratMassage = () => console.log(`Congratulations, ${userName}!`);

export default engine;
