import pairs from '@hexlet/pairs';

const { cons } = pairs;
import { getRandomNumber } from '../utils.js';
import { engine } from '../index.js';


const isEven = (num) => num % 2 === 0;

const generateEven = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEven = () => engine(generateEven, gameRule);

export default runEven;
