import { questionCounter } from './helper.js';
import {cons, car, cdr} from './base.js';
import readlineSync from "readline-sync";

const engine = (data, startMassage) => {
  console.log(startMassage);
  for (let i = 0; i < questionCounter; i += 1) {
    console.log(`Question: ${car(data[i])}`);
    const userAnswer = answer();
    if (userAnswer === `${cdr(data[i])}`) {
      console.log('Correct!');
    }
    if (userAnswer !== `${cdr(data[i])}`) {
      return wrongAnswer(userAnswer, cdr(data[i]));
    }
  }
  return congratMassage();
};

const answer = () => readlineSync.question('Your answer: ');
const greeting = () => readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const userName = greeting();
const wrongAnswer = (userAnswer, correctAnswer) => console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${userName}!`);
const congratMassage = () => console.log(`Congratulations, ${userName}!`);

export default engine;
