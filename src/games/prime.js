import pairs from '@hexlet/pairs';
import { getRandomNumber } from '../utils.js';
import { engine } from '../index.js';

const { cons } = pairs;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrime = () => {
  const question = getRandomNumber(1, 100).toString();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrime = () => engine(generatePrime, gameRule);

export default runPrime;
