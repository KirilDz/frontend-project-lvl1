#!/usr/bin/env node
import main from '../src/index.js';

main();

import readlineSync from 'readline-sync';

const main = () => {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 100);
    const result = number % 2 === 0;
    const correctAnswer = result ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((result && answer === 'yes') || (!result && answer === 'no')) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${actual}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${actual}!`);
  }
};

export default main;
