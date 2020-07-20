import pairs from '@hexlet/pairs';
import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const { cons } = pairs;

const isEven = (num) => num % 2 === 0;

const generateEven = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEven = () => runGame(generateEven, gameRule);

export default runEven;
